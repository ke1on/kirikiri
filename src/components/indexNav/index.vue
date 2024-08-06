<template>
    <div class='indexNav  py-4 flex items-center h-[6rem] gap-4 justify-between '>
        <!-- 左侧 -->
        <div class="left flex  gap-4  flex-shrink-0">
            <div class="flex flex-col items-center flex-shrink-0">
                <img class="w-[2.5rem] aspect-square rounded-full"
                    src="http://ke1on.top:5999/%E5%87%89%E5%AE%AB%E6%98%A5%E6%97%A5%E7%9A%84%E5%BF%A7%E9%83%81.jpg">
                <p class="text-sm mt-1">动态</p>
            </div>
            <div class="flex flex-col items-center flex-shrink-0">
                <div class="w-[2.5rem] p-3 aspect-square rounded-full bg-red-400 flex justify-center items-center overflow-hidden">
                    <svg-fire class="w-full h-full" ></svg-fire>
                </div>
                <p class="text-sm mt-1">热门</p>
            </div>
        </div>
        <!-- 中间 -->
        <ul class="center flex flex-col justify-between gap-2 flex-grow">
            <li v-for="(item, index) in centerList" :key="index" class="flex gap-2 relative flex-grow liItem">
                <kon-multiLevelMenu :menuList="i.menuList" :needIcon="false" v-for="(i, index2) in item"
                    :direction="index == 0 ? 't' : 'b'" class="flex-grow  centerItem" style="font-size: 12px;">
                    <template #f>
                        <p
                            class="bg rounded-lg px-2 py-1 flex-grow text-center text-sm text-[var(--textColor1)] relative cursor-pointer">
                            {{ i.name }}
                        </p>
                    </template>
                </kon-multiLevelMenu>
            </li>
        </ul>
        <div class="line"></div>
        <!-- 右侧 -->

        <ul class="w-[20%] flex-shrink-0 grid gap-2 grid-cols-3 grid-rows-2 ">
            <li v-for="(i, index) in rightList" class="">

                <div class="flex gap-1 items-center text-sm text-[var(--baseColor)] svgItem">
                    <svgAll :name="i.icon" :size="i.size" fillColor="var(--textColor1)" class=" cursor-pointer"></svgAll>
                    <p class="text-[var(--textColor1)] px-2 xl:px-0 py-1 text-nowrap  cursor-pointer">{{ i.name }}</p>
                </div>

            </li>
        </ul>
    </div>
</template>

<script setup>
const centerList = ref([
    [
        { name: '番剧', path: '/', menuList: [{ label: '连载动画' }, { label: '完结动画' }, { label: '新番时间表' }, { label: '番剧索引' },] },
        { name: '国创', path: '/', menuList: [{ label: '连载动画' }, { label: '完结动画' }, { label: '新番时间表' }, { label: '番剧索引' }] },
        { name: '综艺', path: '/', menuList: [{ label: '连载动画' }, { label: '完结动画' }, { label: '新番时间表' }, { label: '番剧索引' }] },
        { name: '动画', path: '/', menuList: [{ label: '连载动画' }, { label: '完结动画' }, { label: '新番时间表' }, { label: '番剧索引' }] },
        { name: '鬼畜', path: '/', menuList: [{ label: '连载动画' }, { label: '完结动画' }, { label: '新番时间表' }, { label: '番剧索引' }] },
        { name: '舞蹈', path: '/', menuList: [{ label: '连载动画' }, { label: '完结动画' }, { label: '新番时间表' }, { label: '番剧索引' }] },
        { name: '娱乐', path: '/', menuList: [{ label: '连载动画' }, { label: '完结动画' }, { label: '新番时间表' }, { label: '番剧索引' }] },
        { name: '科技', path: '/', menuList: [{ label: '连载动画' }, { label: '完结动画' }, { label: '新番时间表' }, { label: '番剧索引' }] },
        { name: '美食', path: '/', menuList: [{ label: '连载动画' }, { label: '完结动画' }, { label: '新番时间表' }, { label: '番剧索引' }] },
        { name: '汽车', path: '/', menuList: [{ label: '连载动画' }, { label: '完结动画' }, { label: '新番时间表' }, { label: '番剧索引' }] },
        // { name: 'VLOG', path: '/' },
        // { name: '单机游戏', path: '/' },
        // { name: '公益', path: '/' },
    ],
    [
        { name: '电影', path: '/', menuList: [{ label: '连载动画' }, { label: '完结动画' }, { label: '新番时间表' }, { label: '番剧索引' },] },
        { name: '游戏', path: '/', menuList: [{ label: '连载动画' }, { label: '完结动画' }, { label: '新番时间表' }, { label: '番剧索引' },] },
        { name: '音乐', path: '/', menuList: [{ label: '连载动画' }, { label: '完结动画' }, { label: '新番时间表' }, { label: '番剧索引' },] },
        { name: '影视', path: '/', menuList: [{ label: '连载动画' }, { label: '完结动画' }, { label: '新番时间表' }, { label: '番剧索引' },] },
        { name: '知识', path: '/', menuList: [{ label: '连载动画' }, { label: '完结动画' }, { label: '新番时间表' }, { label: '番剧索引' },] },
        { name: '资讯', path: '/', menuList: [{ label: '连载动画' }, { label: '完结动画' }, { label: '新番时间表' }, { label: '番剧索引' },] },
        { name: '生活', path: '/', menuList: [{ label: '连载动画' }, { label: '完结动画' }, { label: '新番时间表' }, { label: '番剧索引' },] },
        { name: '时尚', path: '/', menuList: [{ label: '连载动画' }, { label: '完结动画' }, { label: '新番时间表' }, { label: '番剧索引' },] },
        { name: '搞笑', path: '/', menuList: [{ label: '连载动画' }, { label: '完结动画' }, { label: '新番时间表' }, { label: '番剧索引' },] },
        { name: '日常', path: '/', menuList: [{ label: '连载动画' }, { label: '完结动画' }, { label: '新番时间表' }, { label: '番剧索引' },] },
        // { name: '虚拟主播', path: '/' },
        // { name: '公开课', path: '/' },
        // { name: '电视剧', path: '/' },
        // { name: '动物圈', path: '/' },
        // { name: '纪录片', path: '/' },
    ]
])
const rightList = ref([
    { name: '专栏', icon: 'document', size: '1.5rem', path: '/' },
    { name: '活动', icon: 'flag', size: '1.5rem', path: '/' },
    { name: '社区中心', icon: 'chat', size: '1.5rem', path: '/' },
    { name: '直播', icon: 'camera', size: '1.5rem', path: '/' },
    { name: '课堂', icon: 'smile', size: '1.5rem', path: '/' },
    { name: '新歌热榜', icon: 'music', size: '1.5rem', path: '/' },
])
</script>
<style scoped lang='scss'>
.svgItem{
    &:hover{
        
        --textColor1:var(--textColorBlue);
    }
}
.line { 
    width: 1px;
    height: 100%;
    margin-left: 4px;
    border-left: 1px dashed var(--textColor2);
}

.multiLevelMenuContainer {
    font-size: 12px !important;
}

.bg {
    $bg: #f5f5f5;
    background-color: $bg ;

    &:hover {
        background-color: darken($bg, $amount: 10);
    }
}

@media (max-width: 1280px) {
    .liItem {
        .centerItem {
            &:nth-of-type(10) {
                display: none;
            }
            &:nth-of-type(9) {
                display: none;
            }
            &:nth-of-type(8) {
                display: none;
            }
        }
    }

}
</style>