<template>
    <div class='right'>
        <ul>
            <Dropdown @setAnimationStart="setAnimationStart" :avatarAnimationStart="avatarAnimationStart"
                :avatar="true">
                <template #f>
                    <div :class="avatarClassName">
                        <!-- <img src="~/assets/img/test.png" alt="avatar"> -->
                        <NuxtImg class="img"
                            src="http://ke1on.top:5999/%E4%B8%BA%E7%BE%8E%E5%A5%BD%E7%9A%84%E4%B8%96%E7%95%8C%E7%8C%AE%E4%B8%8A%E7%A5%9D%E7%A6%8F.jpg"
                              alt="Avatar"></NuxtImg>

                    </div>
                </template>
                <template #c>
                    <IndexHeader-rightUser-dropdown class="dropdown" />
                </template>
            </Dropdown>
            <li class="item avatarCopy via-gray-900"></li>
            <li class="item">
                <Dropdown>
                    <template #f>
                        <div class="flex flex-col items-center">
                            <svg-bigVip></svg-bigVip>
                            <p>大会员</p>
                        </div>
                    </template>
                    <template #c>
                        <div class="dropdown">
                            1231312312321
                        </div>

                    </template>
                </Dropdown>

            </li>
            <li class="item">
                <Dropdown>
                    <template #f>
                        <div class="flex flex-col items-center">
                            <svg-message></svg-message>
                            <p>消息</p>
                        </div>
                    </template>
                    <template #c>
                        1231321231

                    </template>
                </Dropdown>
            </li>
            <li class="item">

                <Dropdown>
                    <template #f>
                        <div class="flex flex-col items-center">
                            <svg-news></svg-news>
                            <p>动态</p>
                        </div>
                    </template>
                    <template #c>
                        1231321231

                    </template>
                </Dropdown>
            </li>
            <li class="item">
                <Dropdown>
                    <template #f>
                        <div class="flex flex-col items-center">
                            <svg-collect></svg-collect>
                            <p>收藏</p>
                        </div>
                    </template>
                    <template #c>
                        asdadsasdsadad
                    </template>
                </Dropdown>
            </li>
            <li class="item">
                <Dropdown>
                    <template #f>
                        <div class="flex flex-col items-center">
                            <svg-history></svg-history>
                            <p>历史</p>
                        </div>
                    </template>
                    <template #c>
                        123123
                    </template>
                </Dropdown>
            </li>
            <li class="item">
                <Dropdown>
                    <template #f>
                        <div class="flex flex-col items-center">
                            <svg-invent></svg-invent>
                            <p>创作中心</p>
                        </div>
                    </template>
                    <template #c>
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
const avatarAnimationStart = ref(false)
const setAnimationStart = ({ val }) => {
    avatarAnimationStart.value = val
}

const avatarClassName = computed(() => {
    return avatarAnimationStart.value ? 'item avatar avatarAnimationStart' : 'item avatar '
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

            &>img {
                border: 2px solid white;
                border-radius: 50%;
            }
        }

        .avatarAnimationStart {
            height: 8rem;
        }
    }
}



.dropdown {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    width: 20rem;
    padding: 1rem;
    background-color: white;
    animation: $textAnimation3;
}

img {
    width: 100%;
    height: 100%;
    object-fit: fill;
}
</style>