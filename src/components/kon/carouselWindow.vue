<template>
     
    <div   class='carousel flex flex-col w-full h-full pb-20 relative  overflow-hidden rounded-t-lg'>
        <div class="w-full h-full bg-slate-100"></div>
    </div>
</template>

<script setup lang="ts">
import type { sqlVideo } from '~/types/sqlTable'
const isLoad = ref(false);
const imgrefs = ref([]) as Ref<Array<any>>
const carouselIndex = ref(1);
const props = defineProps<{
    videoList: sqlVideo[]; 
}>()
const videoList = computed(() => {
    return props.videoList;
})

const dotIndex = computed(() => {
    if (carouselIndex.value == carouselContainer.value.length - 2) return videoList.value.length - 1;
    if (carouselIndex.value == carouselContainer.value.length - 1) return 0;
    if (carouselIndex.value == 0) return videoList.value.length - 1;
    return carouselIndex.value - 1;
})
/**
 * @name 过渡时间
 */
const carouselTransition = ref(300)
let carouselTransitionCopy = carouselTransition.value
let timer: any;

const carouselContainer = computed(() => {
    let length = videoList.value.length - 1
    const newlist: sqlVideo[] = [videoList.value[length], ...videoList.value, videoList.value[0],]
    return newlist
})
/**
 * @name 轮播图
 * @param {Number} du 轮播间隔时间
 * @param {Boolean} next 是否开启下一轮的自动轮播
 */
function carouselStart(du = 8000, next = true) {
    timer = setTimeout(() => {
        carouselIndex.value++;
        if (carouselIndex.value > carouselContainer.value.length - 2) {
            setTimeout(() => {
                carouselTransition.value = 0
                carouselIndex.value = 1;
                setTimeout(() => {
                    carouselTransition.value = carouselTransitionCopy
                }, 50);
            }, carouselTransitionCopy + 10);

        }
        next && carouselStart();
    }, du);
}
/**
 * @name 下一页
 */
function next() {
    clearTimeout(timer);
    if (carouselIndex.value == carouselContainer.value.length - 1) return;
    carouselIndex.value++;
    if (carouselIndex.value > carouselContainer.value.length - 2) {

        setTimeout(() => {
            carouselTransition.value = 0
            carouselIndex.value = 1;

            setTimeout(() => {
                carouselTransition.value = carouselTransitionCopy
            }, 50);
        }, carouselTransitionCopy + 10);

    }

    //重新开始
    carouselStart();
}
/**
 * @name 上一页
 */
function back() {
    clearTimeout(timer);
    carouselIndex.value--;
    if (carouselIndex.value == 0) {
        setTimeout(() => {
            carouselTransition.value = 0
            carouselIndex.value = carouselContainer.value.length - 2;

            setTimeout(() => {
                carouselTransition.value = carouselTransitionCopy
            }, 50);
        }, carouselTransitionCopy + 10);

    }
    carouselStart();
}

onMounted(() => {
    isLoad.value = true;
    carouselStart();
})
</script>
<style scoped lang='scss'>
.dot {
    &::before {
        content: '';
        position: absolute;
        border-radius: 50% 50% 0 0;
        background-color: rgba(255, 255, 255, 1);
        width: 120%;
        height: 60%;
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 100% 100%, 0% 100%);
        animation: next1 .6s 4 ease-in-out;
    }

    &::after {
        content: '';
        position: absolute;
        border-radius: 0 0 50% 50%;
        top: 50%;
        background-color: rgba(255, 255, 255, 1);
        width: 120%;
        height: 60%;
        clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 100%, 100% 0%);
        animation: next2 .6s 4 ease-in-out;
    }
}



@keyframes next1 {
    50% {
        clip-path: polygon(0% 0%, 100% 0%, 100% 40%, 40% 100%, 0% 100%);

    }
}

@keyframes next2 {
    50% {
        clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 40%, 40% 0%);

    }
}
</style>