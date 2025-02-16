<template>

    <div class="title">
        <slot name="title" :open="open">
        </slot>
    </div>


    <div class='dialog' v-show="show" @click.stop="close" v-if="show">
        <div class="dialog-content" @click.stop="() => false">
            <slot name="default">
                <kon-form />
            </slot>
        </div>
    </div>








待解决！！！！！


























</template>

<script setup lang="ts">

import type { DialogFns } from '~/types/other'
const show = ref(false);
provide('dialogFn', <DialogFns>{ close, open })
function close() {
    show.value = false


}
function open() {
    show.value = true
}
</script>
<style scoped lang='scss'>
.dialog {
    min-height: 100vh;
    min-height: 100svh;
    min-width: 99vw;
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 99999;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>