<template>
    <ul :class="`left ` + className">
        <li v-for="(i, index) in headerListLeft" class="flex items-center gap-1">
             <SvgAll class="-mt-1" v-if="i.icon" :name="i.icon" fillColor="var(--textColorWhite)"/>
            <span>{{ i.name }}</span>
        </li>
    </ul>
</template>

<script setup> 

 
 
const props = defineProps({
    className: { type: String, default: '' },
})
const headerListLeft = [
    { path: '/', name: '首页', icon: 'bilibili' },
    { path: '/', name: '番剧', icon: false },
    { path: '/', name: '直播', icon: false },
    { path: '/', name: '游戏中心', icon: false },
    { path: '/', name: '会员购', icon: false },
    { path: '/', name: '漫画', icon: false },
    { path: '/', name: '赛事', icon: false },
    { path: '/', name: '时光', icon: false },
    { path: '/', name: '下载客户端', icon: 'download' },
]
</script>
<style scoped lang="scss">
@import '~/assets/css/textAnimation.scss';
.left {
    display: flex; 
    // width: fit-content;
    height: fit-content;
    min-width: 35%;  
    align-items: center;
    li {
        color: var(--textColorWhite);  
        display: flex;
        align-items: center;
        height: fit-content;
        cursor: pointer;
        padding: .5rem;
        font-weight: 400;
        &:hover {
            
            animation: $textAnimation;
        }
    }
}
</style>