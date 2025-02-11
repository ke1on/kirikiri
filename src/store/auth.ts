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
    async login(credentials: loginBody) {
      const res: any = await $fetch("/api/auth/login", { method: "POST", body: credentials })
      if (res.code === true) {
        localStorage.setItem('useInfo', JSON.stringify(res.data.recordset[0]));
        this.useInfo = res.data.recordset[0];
        ElMessage.success('登录成功！');
        this.isLogin = true
        return true

      } else {
        ElMessage.error('登录失败！')
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
    initialize() {
      let useInfoStr  = localStorage.getItem('useInfo');
      if (useInfoStr) {
        let a = JSON.parse(useInfoStr) as loginBody;
        this.login(a)
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