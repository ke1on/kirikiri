<!-- 首页 -->
<template>
    <IndexHeader />
    <div class="px-36">
        <IndexNav />
        <!-- <indexContainer /> -->
    </div>
    <kon-dialog name="login"></kon-dialog>
</template>

<script setup> 
import { ElMessage } from "element-plus"
clientOnly(() => {
    ElMessage({
        message: "欢迎来到kirikiri^w^",
        type: "success",
        duration: 2000,
    })
})
</script>
<style scoped></style>