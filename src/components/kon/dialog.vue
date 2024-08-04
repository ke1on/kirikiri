<template>
    <div class="title">
        <slot name="title" :open="open">
        </slot>
    </div>
    <div class='dialog' v-show="show" @click.stop="close" ref="dialog">
        <div class="dialog-content" @click.stop="() => false">
            <slot name="default">
                <kon-form />
            </slot>
        </div>



    </div>
</template>

<script setup lang="ts">

import type { DialogFns } from '~/types/other'
const show = ref(false);
provide('dialogFn', <DialogFns>{ close, open })
const dialog = ref<HTMLElement | null>(null)
function close() { 
        show.value = false
        //删除dom
        let dialog = document.querySelectorAll('.dialog')
        console.log(dialog)
         dialog?.forEach(item => {
            item.remove()
        })

}
function open() {
    //删除dom
    dialog.value?.remove()
    //在body上添加
    document.body.appendChild(dialog.value!)
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
    top: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>