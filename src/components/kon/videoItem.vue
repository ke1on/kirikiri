<template>
    <div>
        <div ref="playerBox" @mouseover="play" @mouseleave="pause" class="w-full aspect-video">
            <div v-show="!isPlaying" class="w-full h-full imgbox rounded-lg overflow-hidden relative cursor-pointer">
                <NuxtImg :src="videoData.pic" loading="lazy" referrerpolicy="no-referrer" class="rounded-lg"></NuxtImg>
                <div
                    class="mask absolute bottom-0 left-0 text-[var(--textColorWhite)] text-sm p-[2%] flex justify-between w-full">
                    <div class="flex gap-2">
                        <div class="flex items-center gap-1">
                            <svgAll name="videoTV" />
                            <span>{{ formatToWan(videoData.view) }}</span>
                        </div>
                        <div class="flex items-center gap-1">
                            <svgAll name="danmu" />
                            <span>{{ formatToWan(videoData.danmaku) }}</span>
                        </div>
                    </div>
                    <div>04:52</div>
                </div>
            </div>
            <div v-show="isPlaying" class="viodebox rounded-lg overflow-hidden relative cursor-pointer">
                <video ref="videoDOM" src="~/assets/moren.mp4"
                    poster="http://i2.hdslb.com/bfs/archive/caca6b7b9b77171065204cb8be68ae30e7656a4e.jpg"></video>
                <div
                    class="mask absolute bottom-0 left-0 text-[var(--textColorWhite)] text-sm p-[2%] flex justify-between w-full">

                    <div class="ml-auto flex gap-1">
                        <p>00:00</p>
                        <p>04:52</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="h-[3rem] line-clamp-2 my-1">{{ videoData.title }}</div>
        <div class="text-sm flex items-center gap-1 text-[var(--textColor2)]">
            <svg-up></svg-up>
            <span>苏苏的职场日记</span>
            <span class="font-bold">·</span>
            <span>昨天</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { sqlVideo } from '~/src/types/sqlTable'
const props = defineProps<{
    preview: boolean;
    videoData: sqlVideo;
}>();
const isPlaying = ref(false);
const videoDOM = ref<HTMLVideoElement | null>(null);
const playerBox = ref(null);
const formatToWan = (num: any,) => {
    if (num < 10000) {
        return num;
    }
    const wan = (Number(num) / 10000).toFixed(2); // 保留两位小数
    return `${wan}万`;
}
const play = () => {
    if (!props.preview) return;
    isPlaying.value = true;
    nextTick(() => {
        videoDOM.value?.play();
    })
}
const pause = () => {
    if (!props.preview) return;
    isPlaying.value = false;
    videoDOM.value?.pause();
}
</script>
<style scoped lang='scss'>
.mask {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.01));
}
</style>