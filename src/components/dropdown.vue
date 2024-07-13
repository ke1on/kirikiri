<template>

    <div class="dropdown-container">
        <slot name="f"></slot>
        <div class="p" >
            <slot name="c"></slot>
        </div>
    </div>


</template>

<script setup>
const props = defineProps({
    t: { type: String, default: 'calc(100% + 1rem)' },
    b: { type: String, default: '-1' },
    l: { type: String, default: 'calc(var(--width) / -2)' },
    r: { type: String, default: '-1' },
    w: { type: String, default: '0' },
    h: { type: String, default: '0' },
})

</script>
<style scoped lang='scss'>
.p {
    top: v-bind(t);
    left: v-bind(l);
    right: v-bind(r);
    bottom: v-bind(b);
    background-color: white;
    position: absolute;
    width: v-bind(w);
    height: v-bind(h);
    transform: translateX(-50%);
    width: fit-content;
    height: fit-content;
}
.dropdown-container{
    position: relative;
    width: fit-content;
    height: fit-content;
}
</style>