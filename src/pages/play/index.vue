<template>
    <div class='play'>
        <indexHeader :header2="true"></indexHeader>
        <div class="play-container  px-[9%]  flex gap-8">

            <div class="w-[75%]  flex-shrink-0">
                <div class="play-title w-full py-4 pb-2 h-[6rem]">
                    <p class=" text-lg font-[600]">{{ videoData.title }}</p>
                    <div class="text-[.8rem] text-gray-400 flex gap-4 py-2">
                        <div class="flex items-center gap-1">
                            <svgAll name="videoTV" />
                            <span>{{ formatToWan(videoData.view) }}</span>
                        </div>
                        <div class="flex items-center gap-1">
                            <svgAll name="danmu" />
                            <span>{{ formatToWan(videoData.danmaku) }}</span>
                        </div>
                        <div>
                            2024-08-03 08:43:50
                        </div>
                        <div class="flex items-center gap-1">
                            <svgAll name="err" />
                            <span>未经作者授权，禁止转载</span>
                        </div>
                    </div>
                </div>
                <iframe class="w-full aspect-video shadow-lg"
                    :src="`//player.bilibili.com/player.html?isOutside=true&bvid=${bvid}&p=1`" scrolling="no" border="0"
                    frameborder="no" framespacing="0" allowfullscreen="true"
                    sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts">
                </iframe>

                <ul class="flex gap-8 py-4 text-[var(--textColor1)] border-b  border-[var(--textColor3)]">
                    <li class="flex gap-2 items-center">
                        <svgAll class="cursor-pointer svg" name="like" fillColor="var(--textColor1)" size="2rem" />
                        <span class="-mb-1">{{ videoData.like }}</span>
                    </li>
                    <li class="flex gap-2 items-center">
                        <svgAll class="cursor-pointer svg" name="toubi" fillColor="var(--textColor1)" size="2rem" />
                        <span class="-mb-1">{{ videoData.like }}</span>
                    </li>
                    <li class="flex gap-2 items-center">
                        <svgAll class="cursor-pointer svg" name="collectPlay" fillColor="var(--textColor1)"
                            size="2rem" />
                        <span class="-mb-1">{{ videoData.like }}</span>
                    </li>
                    <li class="flex gap-2 items-center">
                        <svgAll class="cursor-pointer svg" name="share" fillColor="var(--textColor1)" size="2rem" />
                        <span class="-mb-1">{{ videoData.like }}</span>
                    </li>
                </ul>
                <div class="text-sm my-4">
                    没有简介~
                </div>
                <ul class="tags flex gap-2  border-b py-4 border-[var(--textColor3)]">
                    <li class="py-1 px-2 rounded-full bg-[var(--textColor5)]">生活</li>
                    <li class="py-1 px-2 rounded-full bg-[var(--textColor5)]">游戏</li>
                    <li class="py-1 px-2 rounded-full bg-[var(--textColor5)]">单机游戏</li>
                    <li class="py-1 px-2 rounded-full bg-[var(--textColor5)]">单机游戏</li>
                    <li class="py-1 px-2 rounded-full bg-[var(--textColor5)]">单机游戏</li>
                    <li class="py-1 px-2 rounded-full bg-[var(--textColor5)]">单机游戏</li>
                    <li class="py-1 px-2 rounded-full bg-[var(--textColor5)]">单机游戏</li>
                </ul>
                <div class="flex gap-12 my-2">
                    <p>评论<span class="text-[var(--textColor1)] ml-1 text-[12px]">{{ videoData.like }}</span></p>
                    <div class="flex gap-2 items-center">
                        <p>最热</p>
                        <p class="h-[60%] bg-black w-[1px]"></p>
                        <p class="text-[var(--textColor1)]">最新</p>
                    </div>
                </div>
                <div class="flex gap-3 items-center my-4">
                    <div class="w-12 aspect-square rounded-full overflow-hidden">
                        <NuxtImg :src="auth.$state.useInfo.face" referrerpolicy="no-referrer" alt=""></NuxtImg>
                        <img src="~/assets/img/33_open.png" />
                    </div>
                    <div class="flex-grow">
                        <input
                            class="w-full text-base outline-none bg-[var(--textColor5)] py-3 px-2 rounded-lg placeholder:text-sm"
                            type="text" placeholder="勇敢滴少年啊快去创造热评~">
                    </div>
                </div>
                <div class="text-[var(--textColor1)] text-sm text-center mt-20">
                    <p>并没有爬评论哦~</p>
                    <p>由于项目建立之处爬取数据时省略了许多字段，导致该页面许多数据为空，只能用点赞数代替QAQ</p>
                </div>
            </div>
            <div class="w-[24%]  h-full via-gray-400 max-w-[25%]">
                <div class="owner-container h-[6rem] py-4 flex gap-4">

                    <div class="avatar h-full flex items-center">
                        <NuxtImg class=" h-12 w-12 rounded-full" :src="ownerData.face" referrerpolicy="no-referrer"
                            alt=""></NuxtImg>
                    </div>
                    <div class="text-sm flex-grow">
                        <p>{{ ownerData.name }}</p>
                        <p class="text-[.7rem] text-[var(--textColor2)] font-[300]">up主很懒，并没有留下什么...</p>
                        <div class="flex gap-4">
                            <button
                                class="border px-6 py-1 border-[var(--textColorPink2)] text-[var(--textColorPink2)] rounded-lg">充电</button>
                            <button
                                class="flex-grow bg-[var(--textColorBlue)] text-white rounded-lg py-1 pr-2">+关注</button>
                        </div>
                    </div>
                </div>
                <div class="flex gap-2 items-center p-2 px-3 rounded-lg text-sm bg-[#F1F2F3]">
                    <span>弹幕列表</span>
                    <span>:</span>
                    <svgAll class="rotate-90 ml-auto" size="1.2rem" name="fold" fillColor="var(--baseColor)" />
                </div>
                <div class="text-sm my-3 flex gap-2 items-center">
                    <p>接下来播放</p>
                    <label for="k"
                        class="flex items-center gap-1 text-[var(--textColor1)] ml-auto text-[12px] select-none cursor-pointer">
                        开启预览
                        <input id="k" type="checkbox" class="border-[var(--textColor1)]" v-model="preview" />
                    </label>
                </div>
                <div class="line h-[1px] w-full bg-slate-200"></div>
                <div class="flex flex-col gap-4 mt-4" v-if="videoList.length > 0">
                    <kon-videoItem :preview="preview" v-for="i in videoList" :videoData="i"
                        :direction="true"></kon-videoItem>
                    <div
                        class="text-sm text-[var(--textColor1)] bg-[var(--textColor5)] py-2 text-center rounded-lg cursor-pointer hover:text-[var(--textColorBlue)]">
                        查看更多</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import type { sqlVideo, Owner } from '~/types/sqlTable'
import type { videoInfoWithOwner } from '~/types/other'
import { useRoute } from 'nuxt/app';
import { useAuthStore } from "~/store/auth"
const auth = useAuthStore();
const preview = ref(false);
const route = useRoute();
const { query } = route;
const { bvid } = query;
const videoData = await $fetch<sqlVideo>("/api/videoDetails?bvid=" + bvid);
const ownerData = await $fetch<Owner>("/api/videoOwners?mid=" + videoData.mid);
let videoList = ref<Array<sqlVideo>>([])
async function addList(num: number) {
    return await $fetch<Array<sqlVideo>>(`/api/videoList?num=${num}`);
}

const formatToWan = (num: any,) => {
    if (num < 10000) {
        return num;
    }
    const wan = (Number(num) / 10000).toFixed(2); // 保留两位小数
    return `${wan}万`;
}

onMounted(async () => {
    videoList.value = await addList(8);
    //从浏览器存储获取播放记录
    const historyVideo: Array<videoInfoWithOwner> = JSON.parse(localStorage.getItem("historyVideo") || "[]");
    //检测是否看过 
    if (historyVideo.find((i, index) => i.video.bvid === videoData.bvid)) {
        //删除该记录并重新添加
        historyVideo.splice(historyVideo.findIndex((i) => i.video.bvid === videoData.bvid), 1)
        historyVideo.unshift({video:videoData,owner:ownerData});
    } else {
        historyVideo.unshift({video:videoData,owner:ownerData})
    }

    localStorage.setItem("historyVideo", JSON.stringify(historyVideo))
})
</script>
<style scoped lang='scss'>
.svg {
    &:hover {
        --textColor1: var(--textColorBlue) !important;
    }
}
</style>