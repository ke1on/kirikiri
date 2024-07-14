<template>
    <div class='multiLevelMenu'>
        <div v-for="(i, index) in menuList">
            <svg></svg>
            <span>{{ label }}</span>
            
        </div>
    </div>
</template>

<script setup>
    const  menuList=ref([
        {
            label:'个人中心',

        },
        {
            label:'投稿管理',
        },
        {
            label:'推荐服务'
        },
         
    ])
</script>
<style scoped lang='scss'></style>