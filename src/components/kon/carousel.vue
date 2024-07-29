<template>
    <div class='carousel flex flex-col w-full h-full pb-20 relative overflow-hidden  rounded-t-lg'>
        <!-- 图片区域 -->
        <div class="">
            <div class="flex h-[100%]"
                :style="`transform: translateX(${carouselIndex * -100}%);transition: transform ${carouselTransition / 1000}s;`">
                <kon-imgLoad class="flex-shrink-0 w-full h-full" v-for="(item, index) in carouselContainer"
                    :url="item.url" :key="index" :ref="el => imgrefs[index] = el" />
            </div>

        </div>
        <!-- 颜色区域 -->
        <div class="flex-grow relative  rounded-b-lg" v-if="isLoad"
            :style="`background:${imgrefs[carouselIndex].averageColor} ;`">

            <div class="h-[100%] bottom-full w-full absolute" v-if="isLoad"
                :style="` background: linear-gradient(to top,${imgrefs[carouselIndex].averageColor} , rgba(0, 0, 0, 0.01));`">
            </div>
            <!-- 视频信息 -->
            <div class="absolute top-0 h-full w-full p-2 text-xl">
                <div class="flex">
                    <div class="text-[var(--textColorWhite)]">
                        <p>{{ carouselContainer[carouselIndex].name }}</p>
                    </div>
                    <div class="flex ml-auto gap-4">
                        <div class="w-fit h-fit p-1 rounded-lg  bg-[rgba(255,255,255,.125)] hover:bg-[rgba(255,255,255,.25)] cursor-pointer rotate-180"
                            @click="back">
                            <svgAll name="fold" fillColor="var(--textColorWhite)" size="1.2rem" />
                        </div>
                        <div class="w-fit h-fit p-1 rounded-lg  bg-[rgba(255,255,255,.125)] hover:bg-[rgba(255,255,255,.25)] cursor-pointer "
                            @click="next">
                            <svgAll name="fold" fillColor="var(--textColorWhite) " size="1.2rem" />
                        </div>
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <div v-for="(i, index) in data"
                        :class="`   w-4 h-4 overflow-hidden rounded-full  bg-[rgba(255,255,255,.25)] relative ${dotIndex == index ? ' dot' : ' '}`">

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
const isLoad = ref(false);
const imgrefs = ref([]);
const carouselIndex = ref(1);
const dotIndex = computed(() => {
    if (carouselIndex.value == imgrefs.value.length - 2) return data.value.length - 1;
    if (carouselIndex.value == imgrefs.value.length - 1) return 0;
    return carouselIndex.value - 1;
})
/**
 * @name 过渡时间
 */
const carouselTransition = ref(300)
let carouselTransitionCopy = carouselTransition.value
let timer;
const data = ref([
    { name: "1", url: 'http://i1.hdslb.com/bfs/archive/b5b9caa85003136cc48b59eb6cc72e42dbb4e6ae.jpg' },
    { name: "2", url: 'http://i1.hdslb.com/bfs/archive/a73d23185b5303ce1888760606cb9a69e0e72fed.jpg' },
    { name: "3", url: 'http://i1.hdslb.com/bfs/archive/dfcba744d59f2b46ad6b8ab7b9fd8f02303b18e1.jpg' },
    { name: "4", url: 'http://i0.hdslb.com/bfs/archive/88a2822a3cfe57151cc373cc040030f9bd94054d.jpg' },
    { name: "5", url: 'http://i0.hdslb.com/bfs/archive/433ba546eff3e29aaf5a0d4c35bf458cf88c1c33.jpg' },
]);
const carouselContainer = computed(() => {
    let length = data.value.length - 1
    return [data.value[length], ...data.value, data.value[0],]
})
/**
 * @name 轮播图
 * @param {Number} du 轮播间隔时间
 * @param {Boolean} next 是否开启下一轮的自动轮播
 */
function carouselStart(du = 5000, next = true) {
    timer = setTimeout(() => {
        console.log(1)
        carouselIndex.value++;
        if (carouselIndex.value > imgrefs.value.length - 2) { 
            setTimeout(() => {
                carouselTransition.value = "0"
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
    if (carouselIndex.value == imgrefs.value.length - 1) return;
    carouselIndex.value++;
    if (carouselIndex.value > imgrefs.value.length - 2) {

        setTimeout(() => {
            carouselTransition.value = "0"
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
            carouselTransition.value = "0"
            carouselIndex.value = imgrefs.value.length - 2;

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