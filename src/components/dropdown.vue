<template>

    <div :class="dropdownContainerClassName" @mouseover="start" @mouseleave="over">
        <slot name="f"></slot>
        <div class="p" :style="{ 'top': avatar ? '50%' : '120%' }">
            <slot name="c"></slot>
        </div>
    </div>


</template>

<script setup>
const emit = defineEmits(['setAnimationDone', 'setAnimationStart'])
const props = defineProps(['data', 'avatar'])
const dropdownContainerClassName = computed(() => {
    return props.avatar ? 'dropdown-container dropdown-container-animation-start' : 'dropdown-container'
})
let startFnCopy;
let timer;
let start = () => {
    startFnCopy = start;
    if (!props.avatar) {
        emit('setAnimationDone', { val: true, name: props.data.name })
    } else {
        timer = setTimeout(() => {
            emit('setAnimationDone', { val: true, name: props.data.name })
        }, 300);
    }
    try {
        emit('setAnimationStart', { val: true, name: props.data.name })
    } catch (error) { }
    start = () => { }
}
const over = () => {
    try {
        emit('setAnimationStart', { val: false, name: props.data.name })
    } catch (error) { }
    emit('setAnimationDone', { val: false, name: props.data.name })
    if (!props.avatar) {
        setTimeout(() => {
            start = startFnCopy;
        }, 300);
    } else {
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