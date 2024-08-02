 import { useAuthStore } from '~/store/auth'
import clientOnly from '~/utils/clientOnly'

export default defineNuxtPlugin(() => {
    const authStore = useAuthStore()
     clientOnly(() => {
        authStore.initialize()
})
})