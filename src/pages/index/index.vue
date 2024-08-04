<!-- 首页 -->
<template>
    <IndexHeader />
    <div class="px-[8%]">
        <IndexNav />
        <indexContainer />
    </div>
    <kon-dialog></kon-dialog>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus"
import { useAuthStore } from '~/store/auth'
import clientOnly from '~/utils/clientOnly'
const auth = useAuthStore()
const useInfo = computed(() => {
    return auth.getUseIno()
})
clientOnly(() => {
    let  message=useInfo.value?.token ? `欢迎 ${useInfo.value.useName}~` : ' wink ^_< 欢迎您 游客~'
    ElMessage({
        message: message,
        type: "success",
        duration: 2000,
    })
})
</script>
<style scoped></style>