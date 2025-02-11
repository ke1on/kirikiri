<template>
    <div class='goLogin w-[20rem] bg-[var(--textColorWhite)] py-4 rounded-lg'>
        <p class="text-center text-[var(--textColor1)] my-4">登录即可查看{{ title }} </p>
        <kon-dialog>
            <template #title="{ open }">
                <button class="bg-blue-400 text-white py-3 w-[80%] ml-[10%] rounded-lg" @click="open">登录</button>
            </template>
        </kon-dialog>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: '消息'
    }
})
</script>
<style scoped lang='scss'></style>