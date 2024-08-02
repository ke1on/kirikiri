<template>
    <div class='dialog' v-show="show" @click.stop="close">

        <div class="dialog-content" @click.stop="() => false">
            <slot name="default">
                <kon-form />
            </slot>
        </div>



    </div>
</template>

<script setup>
import clientOnly from '~/utils/clientOnly';

const show = ref(false);
const props = defineProps({
    name: {
        type: String,
        default: 'dialog',
    }
})
//将close方法暴露给全局
clientOnly(() => {
    window.kon_dialogs || (window.kon_dialogs = [])
    window.kon_dialogs.push({
        name: props.name,
        open,
        close,
    })
})

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
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999999;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>