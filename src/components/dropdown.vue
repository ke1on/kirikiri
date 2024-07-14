<template>

    <div :class="dropdownContainerClassName" @mouseover="start" @mouseleave="over">
        <slot name="f"></slot>
        <div class="p" :style="{ 'top': avatar ? '50%' : '120%' }">
            <div v-if="animationDone">
                <slot name="c"></slot>
            </div>

        </div>
    </div>


</template>

<script setup>
const emit = defineEmits(['setAnimationStart'])
const animationDone = ref(false)
const props = defineProps(['data', 'avatar'])
const dropdownContainerClassName = computed(() => {
    return props.avatar ? 'dropdown-container dropdown-container-animation-start'
        : 'dropdown-container';
})
let startFnCopy;
let timer;
let start = () => {
    startFnCopy = start;
    if (!props.avatar) {
        animationDone.value = true

    } else {
        emit('setAnimationStart', { val: true })
        timer = setTimeout(() => {
            animationDone.value = true
        }, 300);
    }
    //防止鼠标移出后，动画还没结束，鼠标移入，导致动画消失
    start = () => { }
}
const over = () => {
    animationDone.value = false
    if (!props.avatar) { 
        setTimeout(() => {
            start = startFnCopy;
        }, 300);
    } else {
        emit('setAnimationStart', { val: false, })
        start = startFnCopy;
    }
    clearTimeout(timer)
} 
</script>
<style scoped lang='scss'>
.p {
    z-index: 1;
    top: 100%;
    left: 50%;
    background-color: white;
    position: absolute;
    transform: translateX(-50%);
    width: fit-content;
    height: fit-content;
    overflow: hidden;
    border-radius: .5rem;
    box-shadow: 0 0 1rem rgba(0,0,0,.15);
}

.dropdown-container {
    position: relative;
    width: fit-content;
    height: fit-content;
}

.dropdown-container-animation-start {
    position: absolute !important;
    top: 0;
    right: calc(100% - 4rem);
}
</style>