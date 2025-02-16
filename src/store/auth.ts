import { defineStore } from 'pinia'
import type { loginBody, registerBody, registerResponse, useInfo } from '~/types/auth'
import { ElMessage } from 'element-plus'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    useInfo: {
      token: '',
      useName: '',
      face: '',
      useID: '',
    } as useInfo,
    isLogin: false,
  }),
  actions: {
    async login(credentials: loginBody | useInfo) {
      const res: any = await $fetch("/api/auth/login", { method: "POST", body: credentials })
      console.log(res)
      if (res.code === 200) {
        localStorage.setItem('useInfo', JSON.stringify(res.data));
        this.useInfo = res.data;
        ElMessage.success(`欢迎~ ${this.useInfo.useName}`);
        this.isLogin = true
        return true

      } else {
        ElMessage.error(res.msg)
        console.log(res)
      }

    },
    logout() {
      this.useInfo.useName = '';
      this.useInfo.token = '';
      this.useInfo.face = '';
      this.useInfo.useID = '';
      localStorage.removeItem('useInfo')
    },
    async initialize() {
      let useInfoStr = localStorage.getItem('useInfo');
      if (useInfoStr) {
        let useInfo: useInfo = JSON.parse(useInfoStr);
        await this.login(useInfo)
      } else {
        ElMessage.success(`欢迎~游客san`);
      }

    },
    async register(credentials: registerBody) {
      const res = await $fetch("/api/auth/register", { method: "POST", body: credentials }) as registerResponse
      const { useInfo, code, msg } = res;
      if (code !== 200) {
        console.log(msg)
        ElMessage.error("注册失败！")
        return false
      }
      ElMessage.success("注册成功！")
      useInfo && (this.useInfo = useInfo)
      localStorage.setItem('useInfo', JSON.stringify(useInfo))
    },
    getUseIno() {
      return this.useInfo
    }
  },
})