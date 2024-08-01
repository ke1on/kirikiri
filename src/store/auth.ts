import { defineStore } from 'pinia'
import type { loginBody, registerBody, registerResponse, useInfo } from '~/types/auth'
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
      
      if (res.code === 200) {
        localStorage.setItem('useInfo', JSON.stringify(res.data.recordset[0]));
        this.useInfo = res.data.recordset[0]
      }

    },
    logout() {
      this.useInfo.useName = ''
      this.useInfo.token = ''
      this.useInfo.face = ''
      localStorage.removeItem('useInfo')
    },
    initialize() {
      const useInfoStr = localStorage.getItem('useInfo');
      const { token } = useInfoStr ? JSON.parse(useInfoStr) : null;
      if (token) {
        this.useInfo.token = token
        // 可以在这里添加获取用户信息的逻辑
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