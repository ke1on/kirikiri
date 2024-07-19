<template>
    <div class='carousel flex flex-col w-full h-full pb-20 relative'>
        <div class="  ">
            <div class="flex" :style="`transform: translateX(${carouselIndex * -100}%);transition: transform ${carouselTransition/1000}s;`">
                <kon-imgLoad class="flex-shrink-0 w-full" v-for="(item, index) in carouselContainer" :url="item.url"
                    :key="index" :ref="el => refs[index] = el" />
            </div>

        </div>
        <div class="flex-grow bg-red-300">

        </div>
        <div class="w-fit rotate-180" @click="back">
            <svgAll name="fold" fillColor="var(--baseColor) " />
        </div>
        <div class="w-fit " @click="next">
            <svgAll name="fold" fillColor="var(--baseColor)  " />
        </div>
    </div>
</template>

<script setup>
const refs = ref([]);
const carouselIndex = ref(0);
const carouselTransition = ref(800)
let carouselTimer=carouselTransition.value
let timer;
const data = ref([
    { name: "1", url: 'http://i1.hdslb.com/bfs/archive/b5b9caa85003136cc48b59eb6cc72e42dbb4e6ae.jpg' },
    { name: "1", url: 'http://i1.hdslb.com/bfs/archive/a73d23185b5303ce1888760606cb9a69e0e72fed.jpg' },
    { name: "1", url: 'http://i1.hdslb.com/bfs/archive/dfcba744d59f2b46ad6b8ab7b9fd8f02303b18e1.jpg' },
    { name: "1", url: 'http://i0.hdslb.com/bfs/archive/86bbd2cc398c0afba87ddcc62cd8e82fc9c9859e.jpg' },
    { name: "1", url: 'http://i0.hdslb.com/bfs/archive/433ba546eff3e29aaf5a0d4c35bf458cf88c1c33.jpg' },
]);
const carouselContainer = computed(() => {
    let length = data.value.length - 1
    return [data.value[length], ...data.value, data.value[0],]
})
function carouselStart(du = 5000,next=true) {
    timer = setTimeout(() => {
        carouselIndex.value++;
        if (carouselIndex.value > refs.value.length - 1) {
            carouselTransition.value = "0"
            let waitTime = 100
            setTimeout(() => {
                carouselTransition.value = carouselTimer
            }, waitTime);
            carouselIndex.value = 1;
            carouselStart(carouselTimer - waitTime,false);

        }
       next&&carouselStart();
    }, du);
}
function next() {
    clearTimeout(timer);
    carouselIndex.value++;
    if (carouselIndex.value > refs.value.length - 1) {
        carouselTransition.value = "0"
        setTimeout(() => {
            carouselTransition.value = carouselTimer
        }, 100);
        carouselIndex.value = 2;
    }
    carouselStart();
}
function back() {
    clearTimeout(timer);
    carouselIndex.value--;
    if (carouselIndex.value < 0) {
        carouselTransition.value = "0"
        setTimeout(() => {
            carouselTransition.value = carouselTimer
        }, 100);
        carouselIndex.value = refs.value.length - 2;
    }
    carouselStart();
}
watch( carouselIndex, (n) => {
    console.log(n)    
})
onMounted(() => {
    carouselStart();
})
</script>
<style scoped lang='scss'></style>