<template>
    <div class='dropdown'>
        <slot></slot>
    </div>
</template>

<script setup>
const props = defineProps({
    t: { type: String, default: '0rem' },
    b: { type: String, default: '0rem' },
    l: { type: String, default: '0rem' },
    r: { type: String, default: '0rem' },
    w: { type: String, default: '10rem' },
    h: { type: String, default: '20rem' },
})
</script>
<style scoped lang='scss'>
.dropdown {
    top: v-bind(t);
    left: v-bind(l);
    right: v-bind(r);
    bottom: v-bind(b); 
    background-color: white;
    position: absolute;
    width: v-bind(w);
    height: v-bind(h);
}
</style>