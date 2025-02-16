<template>
    <div :class="classList">
        <div class="h-full flex flex-col items-center justify-center">
            <p>扫描二维码登录</p>
            <div class="flex items-center justify-center p-2 border aspect-square mt-4 mb-2">
                <kon-loader :needOb="false"></kon-loader>
            </div>
            <p>请使用<span>kirikiri客户端</span>扫描登录</p>
            <small class="text-[var(--textColor2)]">没有这种东西的啦（笑</small>

        </div>
        <div class="flex-grow">
            <kon-form-register @setClose="setClose"></kon-form-register>
        </div>

    </div>
</template>

<script setup>
const close = ref(false)
const classList = computed(() => {
    return !close.value ? 'form' : 'close form'
})
const setClose = (val) => {
    
    close.value = val;
    console.log(classList.value, val)
}
 setTimeout(() => {
    setClose(true)
 }, 1000);
</script>
<style scoped lang='scss'>
.form {
    width: 820px;
    height: 430px;
    box-sizing: border-box;
    display: flex;
    gap: 1rem;
    padding: 52px 65px 100px 92px;
    background: url("~/assets/img/22_open.png") no-repeat left bottom, url("~/assets/img/33_open.png") no-repeat right bottom;
    background-color: var(--textColorWhite);
    background-size: 14%;
    border-radius: .5rem;
}

.close {
    background: url("~/assets/img/22_close.png") no-repeat left bottom, url("~/assets/img/33_close.png") no-repeat right bottom;
    background-color: var(--textColorWhite);
    background-size: 14%;
}
</style>