<template>
    <div class='right'>
        <ul>
            <kon-dropdown @setAnimationStart="setAnimationStart" :avatarAnimationStart="avatarAnimationStart"
                :avatar="true">
                <template #f>
                    <div :class="avatarClassName">
                        <NuxtImg class="img" v-if="loaded && useInfo.face" :src="useInfo.face"
                            referrerpolicy="no-referrer" /> 
                        <img class="img bg-white  " v-else src="~/assets/img/33_open.png"
                            referrerpolicy="no-referrer"></img>

                    </div>
                </template>
                <template #c>
                    <IndexHeader-right-item1 class="dropdown" />
                </template>
            </kon-dropdown>
            <li class="item avatarCopy via-gray-900"></li>
            <li class="item">
                <kon-dropdown>
                    <template #f>
                        <div class="flex flex-col items-center cursor-pointer">
                            <svg-bigVip fillColor="var(--textColorWhite)"></svg-bigVip>
                            <p  class="text">大会员</p>
                        </div>
                    </template>
                    <template #c>
                        <IndexHeader-right-item2 class="dropdown" style="width: 25rem;" />

                    </template>
                </kon-dropdown>

            </li>
            <li class="item">
                <kon-multiLevelMenu :menuList="messageList" direction="b" class="text-[var(--baseColor)]">
                    <template #f>
                        <div class="flex flex-col items-center cursor-pointer">
                            <svg-message fillColor="var(--textColorWhite)"></svg-message>
                            <p class="text-[var(--textColorWhite)] text"  >消息</p>
                        </div>
                    </template>
                </kon-multiLevelMenu>
            </li>
            <li class="item">

                <kon-dropdown>
                    <template #f>
                        <div class="flex flex-col items-center cursor-pointer">
                            <svg-news fillColor="var(--textColorWhite)"></svg-news>
                            <p class="text">动态</p>
                        </div>
                    </template>
                    <template #c>
                        <IndexHeader-right-item3 class="dropdown" style="width: 25rem;padding-bottom: 0;" />
                    </template>
                </kon-dropdown>
            </li>
            <li class="item">
                <kon-dropdown :needIndent="true">
                    <template #f>
                        <div class="flex flex-col items-center cursor-pointer">
                            <svg-collect></svg-collect>
                            <p class="text">收藏</p>
                        </div>
                    </template>
                    <template #c>
                        <kon-optionalContainer class="dropdown" :data="collectList"
                            style="width: 30rem;"></kon-optionalContainer>
                    </template>
                </kon-dropdown>
            </li>
            <li class="item">
                <kon-dropdown :needIndent="true">
                    <template #f>
                        <div class="flex flex-col items-center cursor-pointer">
                            <svg-history></svg-history>
                            <p class="text">历史</p>
                        </div>
                    </template>
                    <template #c>
                        <kon-optionalContainer class="dropdown" direction="y" style="width: 20rem;"
                            :data='historyListData'>
                        </kon-optionalContainer>
                    </template>
                </kon-dropdown>
            </li>
            <li class="item">
                <kon-dropdown>
                    <template #f>
                        <div class="flex flex-col items-center cursor-pointer">
                            <svg-invent></svg-invent>
                            <p class="text">创作中心</p>
                        </div>
                    </template>
                </kon-dropdown>
            </li>
            <li class="item">
                <button class="bg-[var(--textColorPink2)] px-8 py-2 text-white rounded-2xl">投稿</button>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/store/auth';
import type { videoInfoWithOwner } from '~/types/other'
import clientOnly from '~/utils/clientOnly';
const auth = useAuthStore()
const useInfo = computed(() => {
    return auth.$state.useInfo
})
const loaded = ref(false)
const avatarAnimationStart = ref(false)
const setAnimationStart = ({ val }: { val: any }) => {
    avatarAnimationStart.value = val
}

const avatarClassName = computed(() => {
    return avatarAnimationStart.value ? 'item avatar avatarAnimationStart' : 'item avatar '
})
const messageList = ref([
    { label: '回复我的' },
    { label: '@我的' },
    { label: '收到的赞' },
    { label: '系统消息' },
    { label: '我的消息' },
])
const historyData = ref<Array<videoInfoWithOwner>>([])
clientOnly(() => {
    historyData.value = JSON.parse(localStorage.getItem('historyVideo') || '[]');
})
const historyListData = ref([
    { name: '视频', dataList: historyData.value },
    { name: '直播', dataList: [] },
    { name: '专栏', dataList: [] }])
const collectList = ref([
    { name: '默认收藏夹', dataList: historyData.value, num: 120 },
    { name: '默认收藏夹2', dataList: [], num: 120 },
    { name: '默认收藏夹3', dataList: [], num: 120 }],)
onMounted(() => {
    loaded.value = true
})
</script>
<style scoped lang='scss'>
@import '~/assets/css/textAnimation.scss';
@media  (max-width: 1380px) {
    .text{
        display: none;
    }
}
.right {
    flex-grow: 1;

    ul {
        width: fit-content;
        height: 100%;
        display: flex;
        margin-left: auto;
        align-items: center;
        position: relative;

        .item {
            position: relative;
            height: 100%;
            color: var(--textColorWhite);
            display: flex;
            align-items: center;
            height: fit-content;
            justify-content: center;
            flex-direction: column;
            padding: .5rem;
            font-weight: 400;

            &:hover>div>div:first-child>svg {
                animation: $textAnimation2;
            }

            &>div>div:first-child>svg {
                width: 1.3rem;
                height: 1.3rem;
            }
        }

        .avatarCopy {
            height: calc(4rem + 2px);
            width: calc(4rem + 2px);
        }

        .avatar {
            height: 4rem;
            aspect-ratio: 1;
            position: relative;
            z-index: 2;
            transition: height 0.25s ease-out;
            cursor: pointer;

            &>img {
                --textColorWhite: var(--textColor3);
                border: 2px solid var(--textColorWhite);
                border-radius: 50%;
            }
        }

        .avatarAnimationStart {
            height: 7rem;
        }
    }
}



.dropdown {
    min-width: 20rem;
    padding: 1rem;
    animation: $textAnimation3;
    border-radius: .5rem;
    color: var(--baseColor);
}

img {
    width: 100%;
    height: 100%;
    object-fit: fill;
}
</style>