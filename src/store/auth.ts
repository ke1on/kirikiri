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
  }),
  actions: {
    async login(credentials: loginBody) {
      const res: any = await $fetch("/api/auth/login", { method: "POST", body: credentials })
      if (res.code === true) {
        localStorage.setItem('useInfo', JSON.stringify(res.data.recordset[0]));
        this.useInfo = res.data.recordset[0];
        ElMessage.success('登录成功！')
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
      const useInfoStr = localStorage.getItem('useInfo');
      if (useInfoStr) {
        this.useInfo = JSON.parse(useInfoStr);
      } 
    },
    async register(credentials: registerBody) {
      const res = await $fetch("/api/auth/register", { method: "POST", body: credentials }) as registerResponse
      const { useInfo, code, msg } = res;
      if (code !== 200) {
        console.log(msg)
        return false
      }
      console.log(msg)
      useInfo && (this.useInfo = useInfo)
      localStorage.setItem('useInfo', JSON.stringify(useInfo))
    },
    test(e: any) {
      console.log(e)
    }
  },
})