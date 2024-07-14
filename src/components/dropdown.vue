<template>

    <div :class="dropdownContainerClassName" @mouseover="start" @mouseleave="over">
        <slot name="f"></slot>
        <div class="p">
            <slot name="c"></slot>
        </div>
    </div>


</template>

<script setup>
const emit = defineEmits(['setAnimationDone', 'setAnimationStart'])
const props = defineProps(['animationDone', 'animationStart', 'avatar'])
const dropdownContainerClassName = computed(() => {
    return props.avatar ? 'dropdown-container dropdown-container-animation-start' : 'dropdown-container'
})

let startFnCopy;
let start = () => {
    startFnCopy = start;
    console.log(123)

    setTimeout(() => {
        emit('setAnimationDone', true)

    }, 500);
    try {

        emit('setAnimationStart', true)
    } catch (error) { }
    start = () => { }
}
const over = () => {
    try {
        emit('setAnimationStart', false)
    } catch (error) { }
    emit('setAnimationDone', false)
    setTimeout(() => {

        start = startFnCopy;
    }, 500);


}

</script>
<style scoped lang='scss'>
.p {
    z-index: 1;
    top: 50%;
    left: 50%;
    background-color: white;
    position: absolute;
    transform: translateX(-50%);
    width: fit-content;
    height: fit-content;
    overflow: hidden;
    border-radius: .5rem;

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