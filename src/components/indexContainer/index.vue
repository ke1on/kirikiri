<template>
    <div class='indexContainer grid  gap-4 2xl:grid-cols-5 grid-cols-4 relative'  v-if="!loaded">

        <kon-carouselWindow class="col-span-2 row-span-2" />
        <kon-videoItemWindow v-for="i in 11"></kon-videoItemWindow> 
    </div>
    
    <div class='indexContainer grid  gap-4 2xl:grid-cols-5 grid-cols-4 relative' v-if="loaded"> 
       <kon-carousel :videoList="carouselVideoList" class="col-span-2 row-span-2"></kon-carousel>
            <kon-videoItem :preview="preview" :direction="false" v-for="i in videoList" :videoData="i"></kon-videoItem> 
        <div class="loaderBox flex justify-center w-full 2xl:col-span-5 col-span-4  p-8">
            <kon-loader @onLoading='addVideoList'></kon-loader>
        </div>
        <label for="k" class="absolute flex items-center gap-1 -right-16  text-[12px] select-none cursor-pointer">
            开启<br />预览
            <input id="k" type="checkbox" v-model="preview" />
        </label>
        <div @click="changeContainer"
            class="hover:bg-[rgba(0,0,0,.0625)] flex flex-col absolute items-center gap-1 -right-12 top-20 p-2  text-[12px] rounded-lg border select-none cursor-pointer">
            <span>换</span>
            <span>一</span>
            <span>换</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { sqlVideo } from '~/types/sqlTable'
import { ElMessage } from "element-plus"
const preview = ref(false)
watch(() => preview.value, (newVal) => {
    newVal&& ElMessage({
        message: "首次使用需要加载bilibili组件，请耐心等待",
        type: "success",
        duration: 1200,
    })
})
const loaded = ref(false)
let videoList = ref<any>([])
let carouselVideoList = ref<any>([])
async function addList(num: number) {
    return await $fetch<Array<sqlVideo>>(`/api/videoList?num=${num}`);
}
async function addVideoList() {
    let newData = await addList(10);
    newData.forEach((i: sqlVideo) => {
        videoList.value.push(i)
    })
}
async function changeContainer() {
    
    loaded.value=false;
    videoList.value = [];
    videoList.value = await addList(11);
    loaded.value=true
}
onMounted(async () => {
    videoList.value = await addList(11);
    carouselVideoList.value = await addList(5);
    loaded.value = true;

})

</script>

<style scoped lang='scss'></style>