<template>
    <div class='indexContainer grid  gap-4 2xl:grid-cols-5 grid-cols-4 relative' v-if="loaded">
        <kon-carousel :videoList="carouselVideoList" class="col-span-2 row-span-2"></kon-carousel>
        <kon-videoItem :preview="preview" v-for="i in videoList" :videoData="i"></kon-videoItem>
        <div class="loaderBox flex justify-center w-full   p-8">
            <kon-loader @onLoading='addVideoList'></kon-loader>
        </div>
        <label for="k" class="absolute flex items-center gap-1 -right-16  text-[12px] select-none cursor-pointer">
            开启<br />预览
            <input id="k" type="checkbox" v-model="preview" />
        </label>
        <div
            class="hover:bg-[rgba(0,0,0,.0625)] flex flex-col absolute items-center gap-1 -right-12 top-20 p-2  text-[12px] rounded-lg border select-none cursor-pointer">
            <span>换</span>
            <span>一</span>
            <span>换</span>
        </div>
    </div>

</template>

<script setup lang="ts">
import type { sqlVideo } from '~/src/types/sqlTable'
const preview = ref(false)
const loaded = ref(false)
let videoList = ref<any>([])
let carouselVideoList = ref<any>([])
async function addList(num: number) {
    return await $fetch<Array<sqlVideo>>(`/api/videoList?num=${num}`);
}
async function addVideoList() {
    let newData = await addList(11);
    newData.forEach((i: sqlVideo) => {
        videoList.value.push(i)
    })
}
onMounted(async () => {
    videoList.value = await addList(11);
    carouselVideoList.value = await addList(5);
    loaded.value = true;

})

</script>

<style scoped lang='scss'></style>