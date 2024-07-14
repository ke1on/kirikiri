<!-- 组件--头部 -->
<template>
    <div class="header">
        <div class="content">
            <IndexHeader-left classname="max-w-[40%]" /> 
            <IndexHeader-center /> 
            <IndexHeader-right />
        </div>

    </div>
</template>

<script setup>

</script>
<style scoped lang="scss">
.header {

    width: 100%;
    min-height: 180px;
    background: url('@/assets/img/header.avif') no-repeat center;
    background-size: cover;

    * {
        font-size: 0.8rem;
    }

    .content {
        padding: 0 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 5rem;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.01));
    }

}
</style>