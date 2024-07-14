<template>
    <div class='right'>
        <ul>
           
            <dropdown   @setAnimationDone="setAnimationDone" @setAnimationStart="setAnimationStart"
                :animationDone="animationDone" :animationStart="animationStart" :avatar="true">
                <template #f>
                    <li :class="avatarClassName">
                        <!-- <img src="~/assets/img/test.png" alt="avatar"> -->
                        <NuxtImg class="img"
                            src="http://ke1on.top:5999/%E4%B8%BA%E7%BE%8E%E5%A5%BD%E7%9A%84%E4%B8%96%E7%95%8C%E7%8C%AE%E4%B8%8A%E7%A5%9D%E7%A6%8F.jpg"
                            loading="lazy"></NuxtImg>

                    </li>
                </template>
                <template #c v-if="animationDone">
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
            </dropdown>
                    <li class="item avatarCopy via-gray-900"></li>
            <li class="item">
                <svg></svg>
                <p>大会员</p>
            </li>
            <li class="item">
                <svg></svg>
                <p>消息</p>
            </li>
            <li class="item">
                <svg></svg>
                <p>动态</p>
            </li>
            <li class="item">
                <svg></svg>
                <p>收藏</p>
            </li>
            <li class="item">
                <svg></svg>
                <p>历史</p>
            </li>
            <li class="item">
                <svg></svg>
                <p>创作中心</p>
            </li>
        </ul>
    </div>
</template>

<script setup>
const animationDone = ref(false);
const animationStart = ref(false);
const setAnimationStart = (val) => {
    animationStart.value = val 
}
const setAnimationDone = (val) => {
    animationDone.value = val
}
const avatarClassName = computed(() => {
    return animationStart.value ? 'item avatar avatarAnimationStart' : 'item avatar '
})
</script>
<style scoped lang='scss'>
.right {
    width: 28%;



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
            cursor: pointer;
            padding: .5rem;
            font-weight: 400;

            &>svg {
                display: none;
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