<template>
    <div class="container flex flex-col gap-4 pl-2 cursor-pointer">
        <div class="grid grid-cols-12 gap-x-2 grid-rows-3 hover:bg-[rgba(0,0,0,.05)] p-2" v-for="(item, index) in dataList">
            <NuxtImg class="row-span-3 col-span-5 rounded-md cursor-pointer" referrerpolicy="no-referrer"
                :src="item.video.pic" alt="视频封面" />
            <p class="col-span-7 row-span-2 line-clamp-2 text-ellipsis h-[2.5rem] biger cursor-pointer">
                 {{ item.video.title }} </p>
            <p class="col-span-7 text-[var(--textColor2)] flex items-center gap-1 cursor-pointer">
                <svg-up fillColor="var(--textColor2)"></svg-up>
                <span>{{ item.owner.name }}</span>
            </p>

        </div>
        <p class="text-center text-[var(--textColor2)] w-full my-2">没有更多了~</p>
    </div>
</template>

<script setup lang="ts">
import type { videoInfoWithOwner } from '~/types/other'
const props = defineProps<{
    dataList:Array<videoInfoWithOwner>
}>()
 
</script>
<style scoped lang='scss'></style>