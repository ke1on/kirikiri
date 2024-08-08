<template>
    <div class="bg absolute w-full h-full top-0 z-[-1]" v-show="!isLoad">
        <img class="object-fill w-full h-full" src="@/assets/img/header.avif" alt="">
    </div>

    <div class="banner absolute overflow-hidden top-0  z-0" v-show="isLoad" @mousemove="onmousemove"
        @mouseleave.stop="onmouseleave">
        <div v-for="(i, index) in mediaList.imgList" ref="" @mouseleave="(e) => { e.preventDefault() }">
            <NuxtImg :src="'http://www.ke1on.top:5999/kirikiri/banner/' + i.path" :style="i.style" alt="" />
        </div>
        <div ref="" @mouseleave="(e) => { e.preventDefault() }" v-for="(i, index) in mediaList.videoList" class="top-0"
            :style="`left:${40 * index}%;`"><video autoplay muted loop
                :src="'http://www.ke1on.top:5999/kirikiri/banner/' + i.path"></video></div>
    </div>
</template>

<script setup lang="ts">

const mediaList = ref({
    imgList: [
        { path: '1.webp', style: '' },
        { path: '2.webp', style: '' },
        { path: '3.webp', style: '' },
        { path: '4.webp', style: '' },
        { path: '5.webp', style: '' },
        { path: '6.webp', style: '' },
        { path: '7.webp', style: '' },
        { path: '8.webp', style: '' },
        { path: '9.webp', style: '' },
        { path: '10.webp', style: '' },
        { path: '11.webp', style: '' },
        { path: '12.webp', style: '' },
        { path: '13.webp', style: '' },
        { path: '14.webp', style: '' },
        { path: '15.webp', style: '' },
        { path: '16.webp', style: '' },
        { path: '17.webp', style: '' },
    ]
    , videoList: [
        { path: '1.webm', style: '' },
        { path: '2.webm', style: '' },
        { path: '3.webm', style: '' }
    ]
})
const isLoad = ref(false);
const domList = ref([])
/**
 * 视差系数
 */
const ratio = 1;
let mouseX = 0;
//复制俩份保证移除首次移入时的异样感
const onmousemoveCopy = (e: MouseEvent) => {


    if (!mouseX) {
        mouseX = e.clientX; animetion(0, true);
        return
    }
    let moveX = (mouseX - e.clientX)
    animetion(moveX)


}
const onmousemoveCopy2 = (e: MouseEvent) => {
    if (!mouseX) {
        mouseX = e.clientX; animetion(0, true);
        return
    } else {
        setTimeout(() => {
            onmousemove = onmousemoveCopy;
        }, 100);
    }
}
let onmousemove = onmousemoveCopy2;

function animetion(moveX: number, isOver: boolean = false) {
    mediaList.value.imgList.forEach((i, index, arr) => {

        //改变气泡图片动画方向
        if (index == 9 || index == 15) {
            let animetionRation = ratio * (1 / arr.length) * index * (0.168 / 5 * 9 / 16)
            let animetion = moveX * animetionRation;
            i.style = isOver ? `transform: translateY(${-Math.abs(animetion)}px);transition: .3s transform;` : `transform: translateY(${-Math.abs(animetion)}px);`
            return
        }
        let animetionRation = ratio * (1 / arr.length) * index * (0.168 / 5)
        let animetion = moveX * animetionRation;
        i.style = isOver ? `transform: translateX(${-animetion}px);transition: .3s transform;` : `transform: translateX(${-animetion}px);`
    })
}

function onmouseleave(e: MouseEvent) {
    mouseX = 0;
    onmousemove(e)
    onmousemove = onmousemoveCopy2;
}

onMounted(() => {

    let img = document.querySelector<HTMLImageElement>('.banner>div> img')
    if (img?.complete) {
        isLoad.value = true;
    }
    img && (img.onload = () => {
        isLoad.value = true;
    })
})
</script>
<style scoped lang='scss'>
.banner {
    width: 100%;
    min-width: 1000px;
    min-height: 155px;
    height: 9.375vw;

    &>div {
        position: absolute;
        width: 100%;
        height: 100%;

        &:nth-of-type(7) {
            width: 110%;
            margin-left: -5%;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: fill;
        }
    }
}
</style>