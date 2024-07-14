<template>
    <div class='right'>
        <ul>
            <Dropdown @setAnimationDone="setAnimationDone" @setAnimationStart="setAnimationStart" :data="navList[0]"
                :avatar="true">
                <template #f>
                    <div :class="avatarClassName">
                        <!-- <img src="~/assets/img/test.png" alt="avatar"> -->
                        <NuxtImg class="img"
                            src="http://ke1on.top:5999/%E4%B8%BA%E7%BE%8E%E5%A5%BD%E7%9A%84%E4%B8%96%E7%95%8C%E7%8C%AE%E4%B8%8A%E7%A5%9D%E7%A6%8F.jpg"
                            loading="lazy"></NuxtImg>

                    </div>
                </template>
                <template #c v-if="navList[0].animationDone">
                    <div class="dropdown">
                        <p class="useName">{{ 'Ke1on' }}</p>
                        <p class="useInfo">
                            <img src="~/assets/img/bigVip.avif" alt="">
                            <svg-lv6 />
                        </p>
                        <p class="useInfo2">
                            <small><span>硬币：</span>1688</small>
                            <small><span>K币：</span>1688</small>
                        </p>
                        <p class="useInfo3">
                            <small><span>20</span><span>关注</span></small>
                            <small><span>20</span><span>粉丝</span></small>
                            <small><span>20</span><span>动态</span></small>
                        </p>
                    </div>

                </template>
            </Dropdown>
            <li class="item avatarCopy via-gray-900"></li>
            <li class="item">
                <Dropdown @setAnimationDone="setAnimationDone" @setAnimationStart="setAnimationStart"
                    :data="navList[1]">
                    <template #f>
                        <div class="flex flex-col items-center">
                            <svg-bigVip></svg-bigVip>
                            <p>大会员</p>
                        </div>
                    </template>
                    <template #c v-if="navList[1].animationDone">
                        <div class="dropdown">
                            1231312312321
                        </div>

                    </template>
                </Dropdown>

            </li>
            <li class="item">
                <Dropdown @setAnimationDone="setAnimationDone" @setAnimationStart="setAnimationStart"
                    :data="navList[2]">
                    <template #f>
                        <div class="flex flex-col items-center">
                            <svg-message></svg-message>
                            <p>消息</p>
                        </div>
                    </template>
                    <template #c v-if="navList[2].animationDone">
                        1231321231

                    </template>
                </Dropdown>
            </li>
            <li class="item">

                <Dropdown @setAnimationDone="setAnimationDone" @setAnimationStart="setAnimationStart"
                    :data="navList[3]">
                    <template #f>
                        <div class="flex flex-col items-center">
                            <svg-news></svg-news>
                            <p>动态</p>
                        </div>
                    </template>
                    <template #c v-if="navList[3].animationDone">
                        1231321231

                    </template>
                </Dropdown>
            </li>
            <li class="item">
                <Dropdown @setAnimationDone="setAnimationDone" @setAnimationStart="setAnimationStart"
                    :data="navList[4]">
                    <template #f>
                        <div class="flex flex-col items-center">
                            <svg-collect></svg-collect>
                            <p>收藏</p>
                        </div>
                    </template>
                    <template #c v-if="navList[4].animationDone">
                        asdadsasdsadad
                    </template>
                </Dropdown>
            </li>
            <li class="item"> 
                <Dropdown @setAnimationDone="setAnimationDone" @setAnimationStart="setAnimationStart"
                    :data="navList[5]">
                    <template #f>
                        <div class="flex flex-col items-center">
                            <svg-history></svg-history>
                            <p>历史</p>
                        </div>
                    </template>
                    <template #c v-if="navList[5].animationDone">
                        123123
                    </template>
                </Dropdown>
            </li>
            <li class="item"> 
                <Dropdown @setAnimationDone="setAnimationDone" @setAnimationStart="setAnimationStart"
                    :data="navList[6]">
                    <template #f>
                        <div class="flex flex-col items-center">
                            <svg-invent></svg-invent>
                            <p>创作中心</p>
                        </div>
                    </template>
                    <template #c v-if="navList[6].animationDone">
                        1233123131
                    </template>
                </Dropdown>
            </li>
        </ul>
    </div>
</template>

<script setup>
// const animationDone = ref(false);
// const animationStart = ref(false);
const setAnimationStart = ({ val, name }) => {
    navList.forEach(item => {
        if (item.name === name) {
            item.animationStart = val
        }
    })
}
const setAnimationDone = ({ val, name }) => {
    navList.forEach(item => {
        if (item.name === name) {
            item.animationDone = val
        }
    })
}
const navList = reactive([
    { name: '头像', animationDone: false, animationStart: false },
    { name: '大会员', animationDone: false, animationStart: false },
    { name: '消息', animationDone: false, animationStart: false },
    { name: '动态', animationDone: false, animationStart: false },
    { name: '收藏', animationDone: false, animationStart: false },
    { name: '历史', animationDone: false, animationStart: false },
    { name: '创作中心', animationDone: false, animationStart: false },
])
const avatarClassName = computed(() => {
    return navList[0].animationStart ? 'item avatar avatarAnimationStart' : 'item avatar '
})

</script>
<style scoped lang='scss'>
@import '~/assets/css/textAnimation.scss';

.right {
    width: 28%;
    flex-shrink: 0;

    ul {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;

        .item {
            position: relative;
            height: 100%;
            color: white;
            display: flex;
            align-items: center;
            height: fit-content;
            justify-content: center;
            flex-direction: column;
            cursor: pointer;
            padding: .5rem;
            font-weight: 400;


            &>svg {
                width: 1.3rem;
                height: 1.3rem;

                &:hover {

                    animation: $textAnimation2;
                }
            }
        }

        .avatarCopy {
            height: calc(4rem + 2px);
            width: calc(4rem + 2px);
        }

        .avatar {
            height: 4rem;
            width: 4rem;
            position: relative;
            z-index: 2;
            transition: height 0.5s ease-out, width 0.4s ease-in-out;

            &>img {
                border: 2px solid white;
                border-radius: 50%;
            }
        }

        .avatarAnimationStart {
            height: 8rem;
            width: 8rem;
        }
    }
}



.dropdown {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    width: 20rem;
    padding: 1rem;
    background-color: white;
    animation: $textAnimation3;

    .useName {
        font-size: large;
        font-weight: 400;
        color: var(--textColorPink);
        text-align: center;
    }

    .useInfo {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        gap: 1rem;

        img {
            height: 1.5rem;
            width: fit-content;
            flex-shrink: 0;
        }

        svg {
            width: fit-content;
            height: 1.5rem;

        }
    }

    .useInfo2 {
        display: flex;
        gap: 1rem;
        justify-content: center;
        color: var(--baseColor);
        font-size: small;

        span {
            color: var(--textColor2);
        }
    }

    .useInfo3 {
        color: var(--baseColor);
        font-size: larger;
        display: flex;
        justify-content: space-between;

        small {
            display: flex;
            flex-direction: column;
            text-align: center;
            line-height: 100%;

            span:nth-child(1) {
                color: var(--baseColor);
                font-size: large;
                font-weight: 600;
            }

            span:nth-child(2) {
                color: var(--textColor2);
            }
        }
    }
}

img {
    width: 100%;
    height: 100%;
    object-fit: fill;
}
</style>