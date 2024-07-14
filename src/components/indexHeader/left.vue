<template>
    <ul :class="`left ` + className">
        <li v-for="(i, index) in headerListLeft">
            <component :is="i.icon" class="mr-1" />
            <span>{{ i.name }}</span>
        </li>
    </ul>
</template>

<script setup>
import { ref } from "vue";
import bilibili_tv from '~/components/svg/bilibili_tv.vue'
import download from '~/components/svg/download.vue'
const props = defineProps({
    className: { type: String, default: '' },
})
const headerListLeft = [
    { path: '/', name: '首页', icon: bilibili_tv },
    { path: '/', name: '番剧', icon: false },
    { path: '/', name: '直播', icon: false },
    { path: '/', name: '游戏中心', icon: false },
    { path: '/', name: '会员购', icon: false },
    { path: '/', name: '漫画', icon: false },
    { path: '/', name: '赛事', icon: false },
    { path: '/', name: '时光', icon: false },
    { path: '/', name: '下载客户端', icon: download },
]
</script>
<style scoped lang="scss">
@import '~/assets/css/textAnimation.scss';
.left {
    display: flex;
    justify-content: space-between; 
    // width: fit-content;
    height: 100%;
     width: 35%;
     flex-shrink: 0;
    align-items: center;
    li {
        color: white;
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