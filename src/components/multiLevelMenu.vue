<template>
    <div>
        <slot name="f">

        </slot>
    </div>

    <div class='multiLevelMenu' v-if="showMore">
        <div v-for="(i, index) in menuList" class="flex gap-1 items-end px-2 py-1  ">
            <svg-bigVip fillColor="var(--baseColor)" class="flex-shrink-0"></svg-bigVip>
            <span  class="flex-shrink-0">{{ i.label }}</span>
        </div>
    </div>
</template>

<script setup>
const showMore = ref(true)
const menuList = ref([
    {
        label: '个人中心',
        children: [
            { label: 'test' }
        ]
    },
    {
        label: '投稿管理',
    },
    {
        label: '推荐服务'
    },

])
</script>
<style scoped lang='scss'>
.multiLevelMenu {
    position: absolute;
    top: 0%;
    left: 100%;
    z-index: 999; 
    background-color: white;
    border-radius: .5rem;
    padding: .5rem;
    display: flex;
    flex-direction: column;
 
}
</style>