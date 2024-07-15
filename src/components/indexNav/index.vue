<template>
    <div class='indexNav px-40 py-4 flex items-center h-[8rem] justify-between '>
        <!-- 左侧 -->
        <div class="left flex  gap-4 w-[10%]">
            <div class="flex flex-col items-center">
                <img class="w-[3rem] aspect-square rounded-full"
                    src="http://ke1on.top:5999/%E5%87%89%E5%AE%AB%E6%98%A5%E6%97%A5%E7%9A%84%E5%BF%A7%E9%83%81.jpg">
                <p class="text-sm mt-1">动态</p>
            </div>
            <div class="flex flex-col items-center">
                <div class="w-[3rem] p-4 aspect-square rounded-full bg-red-400 flex justify-center items-center">
                    <svg-fire class="w-full h-full"></svg-fire>
                </div>
                <p class="text-sm mt-1">热门</p>
            </div>
        </div>
        <!-- 中间 -->
        <ul class="center flex flex-col justify-between gap-2 w-fit">
            <li v-for="(item, index) in centerList" :key="index" class="flex gap-2">
                <p v-for="(i, index) in item"
                    class="bg-neutral-100 rounded-lg p-2 min-w-24 text-center text-sm text-[var(--textColor1)]">
                    {{ i.name }}
                </p>
            </li>
        </ul>
        <div class="line"></div>
        <!-- 右侧 -->

        <ul class="w-[20%] flex-shrink-0 grid gap-2 grid-cols-3 grid-rows-2 ">
            <li v-for="(i, index) in rightList" class="">
                <div class="flex gap-1 items-center text-sm text-[var(--baseColor)]">
                    <svgAll :name="i.icon" fillColor="var(--baseColor"></svgAll>
                    <p>{{ i.name }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
const centerList = ref([
    [
        { name: '番剧', path: '/' },
        { name: '国创', path: '/' },
        { name: '综艺', path: '/' },
        { name: '动画', path: '/' },
        { name: '鬼畜', path: '/' },
        { name: '舞蹈', path: '/' },
        { name: '娱乐', path: '/' },
        { name: '科技', path: '/' },
        { name: '美食', path: '/' },
        { name: '汽车', path: '/' },
        // { name: 'VLOG', path: '/' },
        // { name: '单机游戏', path: '/' },
        // { name: '公益', path: '/' },
    ],
    [
        { name: '电影', path: '/' },
        { name: '电视剧', path: '/' },
        { name: '纪录片', path: '/' },
        { name: '游戏', path: '/' },
        { name: '音乐', path: '/' },
        { name: '影视', path: '/' },
        { name: '知识', path: '/' },
        { name: '资讯', path: '/' },
        { name: '生活', path: '/' },
        { name: '时尚', path: '/' },
        // { name: '动物圈', path: '/' },
        // { name: '搞笑', path: '/' },
        // { name: '虚拟主播', path: '/' },
        // { name: '公开课', path: '/' },
    ]
])
const rightList = ref([
    { name: '专栏', icon: '', path: '/' },
    { name: '活动', icon: '', path: '/' },
    { name: '社区中心', icon: '', path: '/' },
    { name: '直播', icon: '', path: '/' },
    { name: '课堂', icon: '', path: '/' },
    { name: '新歌热榜', icon: '', path: '/' },
])
</script>
<style scoped lang='scss'>
.line {
    margin: 0 2%;
    width: 1px;
    height: 100%;
    border-left: 1px dashed var(--textColor2);
}
</style>