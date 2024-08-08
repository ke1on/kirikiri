<template>
    <div v-if="!direction" class=" box border border-[rgba(0,0,0,0)] hover:border-[rgba(0,0,0,0.1)] hover:rounded-lg" >
        <NuxtLink :to="`/play?bvid=${videoData.bvid}`" target="_blank" class="cursor-pointer">
            <div ref="playerBox" @mouseover="play" @mouseleave="pause" class="w-full aspect-video">
                <div v-show="!isPlaying"
                    class="w-full h-full imgbox rounded-lg overflow-hidden relative cursor-pointer">
                    <NuxtImg :src="videoData.pic" loading="lazy" referrerpolicy="no-referrer" class="rounded-lg">
                    </NuxtImg>
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
                    <iframe class="w-full aspect-video shadow-lg"
                    :src="`//player.bilibili.com/player.html?isOutside=true&bvid=${videoData.bvid}&p=1`" scrolling="no" border="0"
                    frameborder="no" framespacing="0" allowfullscreen="true"
                    sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts">
                </iframe>
                    <div
                        class="mask absolute bottom-0 left-0 text-[var(--textColorWhite)] text-sm p-[2%] flex justify-between w-full">

                        <div class="ml-auto flex gap-1">
                            <p>00:00</p>
                            <p>04:52</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="px-1">
                <div class="h-[2.9rem] text-[.9rem] line-clamp-2  mt-2" :title="videoData.title">{{ videoData.title }}
                </div>
                <div class="text-sm flex items-center gap-1 text-[var(--textColor2)]">
                    <svg-up fillColor="var(--textColor1)"></svg-up>
                    <span>{{ ownersInfo.name }}</span>
                    <span class="font-bold">·</span>
                    <span>昨天</span>
                </div>
            </div>
        </NuxtLink>
    </div>
    <div v-else>
        <NuxtLink    :to="`/play?bvid=${videoData.bvid}`" :external="true"
            class="flex gap-2 cursor-pointer box border border-[rgba(0,0,0,0)] hover:border-[rgba(0,0,0,0.1)] hover:rounded-lg">
            <div ref="playerBox" @mouseover="play" @mouseleave="pause" class="h-24 aspect-video">
                <div v-show="!isPlaying"
                    class="w-full h-full imgbox rounded-lg overflow-hidden relative cursor-pointer">
                    <NuxtImg :src="videoData.pic" loading="lazy" referrerpolicy="no-referrer" class="rounded-lg">
                    </NuxtImg>
                    <div
                        class="mask absolute bottom-0 left-0 text-[var(--textColorWhite)] text-sm p-[2%] flex justify-between w-full">
                        <div class="ml-auto mr-2 text-[12px]">04:52</div>
                    </div>
                </div>
                <div v-show="isPlaying" class="viodebox rounded-lg overflow-hidden relative cursor-pointer">
                    <video ref="videoDOM" src="~/assets/moren.mp4"
                        poster="http://i2.hdslb.com/bfs/archive/caca6b7b9b77171065204cb8be68ae30e7656a4e.jpg"></video>
                    <div
                        class="mask absolute bottom-0 left-0 text-[var(--textColorWhite)] text-sm p-[2%] flex justify-between w-full">

                        <div class="ml-auto mr-2 flex gap-1 text-[12px]">
                            <p>00:00</p>
                            <p>04:52</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-[.8rem] py-1">
                <div class="h-[2.5rem]  line-clamp-2 text-sm" :title="videoData.title">{{ videoData.title }}</div>
                <div class="text-sm flex items-center gap-1 text-[var(--textColor2)]">
                    <svg-up size=".6rem" fillColor="var(--textColor2)"></svg-up>
                    <span>{{ ownersInfo.name }}</span>
                </div>
                <div class="flex gap-2 text-[var(--textColor2)]">
                    <div class="flex items-center gap-1">
                        <svgAll name="videoTV" />
                        <span>{{ formatToWan(videoData.view) }}</span>
                    </div>
                    <div class="flex items-center gap-1">
                        <svgAll name="danmu" />
                        <span>{{ formatToWan(videoData.danmaku) }}</span>
                    </div>
                </div>
            </div>
        </NuxtLink>

    </div>
</template>

<script setup lang="ts">
import type { sqlVideo, Owner } from '~/types/sqlTable'
const props = withDefaults(defineProps<{
  preview?: Boolean,
  videoData: sqlVideo,
  direction?: Boolean
}>(), {
  preview: ()=>false,
  direction: ()=>false  
});
const isPlaying = ref(false);
const videoDOM = ref<HTMLVideoElement | null>(null);
const playerBox = ref(null);
const ownersInfo = await getOwnersInfo();
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
async function getOwnersInfo() {
    let res = await $fetch<Owner>(`/api/videoOwners?mid=${props.videoData.mid}`);
    return res;
} 
</script>
<style scoped lang='scss'>
.mask {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.01));
}

.box {
    position: relative;
    transition: all .3s;

    &::before,
    &::after {
        content: '';
        transition: all .3s;
        position: absolute;
        --h: 0%;
        --w: 0%;
        --bg: rgba(0, 0, 0, 0.1);
        bottom: calc(-1 * var(--h));
        z-index: -1;
        height: var(--h);
        width: calc(var(--w));
        left: calc((100% - var(--w)) / 2);
        border-radius: 0 0 .5rem .5rem;
        background-color: var(--bg);
    }

    &:hover {
        &::before {
            --h: 4%;
            --w: 96%;
        }

        &::after {
            --h: 4%;
            bottom: calc(-1 * var(--h) * 2);
            --w: 90%;
            --bg: rgba(0, 0, 0, 0.05);
        }
    }
}
</style>