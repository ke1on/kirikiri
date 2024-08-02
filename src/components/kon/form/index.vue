<template>
    <div class='form'>
        <div class="h-full flex flex-col items-center justify-center">
            <p>扫描二维码登录</p>
            <div class="flex items-center justify-center p-2 border aspect-square mt-4 mb-2">
                <kon-loader :needOb="false"></kon-loader>
            </div>
            <p>请使用<span>kirikiri客户端</span>扫描登录</p>
        </div>
        <div class="flex-grow">
            <kon-form-register></kon-form-register>
        </div>

    </div>
</template>

<script setup>

</script>
<style scoped lang='scss'>
.form {
    width: 820px;
    height: 430px; 
    box-sizing: border-box;
    display: flex;  
    padding: 52px 65px 100px 92px;
    background: url("~/assets/img/22_open.png") no-repeat left bottom,url("~/assets/img/33_open.png") no-repeat right bottom;
    background-color: var(--textColorWhite);
    background-size: 14%;
}
</style>