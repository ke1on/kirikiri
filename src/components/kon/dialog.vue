<template>
    <div class='dialog' v-if="show">

        <div class="dialog-content w-full h-full  flex items-center justify-center" @click="close">
            <slot name="default">
                <kon-register></kon-register>
            </slot>
        </div>



    </div>
</template>

<script setup>
const show = ref(false)
function close() {
    show.value = false
}
defineExpose({show})
</script>
<style scoped lang='scss'>
.dialog {
    min-height: 100vh;
    min-height: 100svh;
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999999;
}
</style>