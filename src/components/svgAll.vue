<template>
    <svg-bigVip :style="`height: ${size}; width:${size};`" :fillColor="fillColor" v-if="name == 'bigVip'" />
    <svg-bilibili_tv :style="`height: ${size}; width:${size};`" :fillColor="fillColor" v-if="name == 'bilibili'" />
    <svg-close :style="`height: ${size}; width:${size};`" :fillColor="fillColor" v-if="name == 'close'" />
    <svg-collect :style="`height: ${size}; width:${size};`" :fillColor="fillColor" v-if="name == 'collect'" />
    <svg-download :style="`height: ${size}; width:${size};`" :fillColor="fillColor" v-if="name == 'download'" />
    <svg-fire :style="`height: ${size}; width:${size};`" :fillColor="fillColor" v-if="name == 'fire'" />
    <svg-fold :style="`height: ${size}; width:${size};`" :fillColor="fillColor" v-if="name == 'fold'" />
    <svg-history :style="`height: ${size}; width:${size};`" :fillColor="fillColor" v-if="name == 'history'" />
    <svg-invent :style="`height: ${size}; width:${size};`" :fillColor="fillColor" v-if="name == 'invent'" />
    <svg-lv6 :style="`height: ${size}; width:${size};`" :fillColor="fillColor" v-if="name == 'lv6'" />
    <svg-message :style="`height: ${size}; width:${size};`" :fillColor="fillColor" v-if="name == 'message'" />
    <svg-news :style="`height: ${size}; width:${size};`" :fillColor="fillColor" v-if="name == 'news'" />
    <svg-search :style="`height: ${size}; width:${size};`" :fillColor="fillColor" v-if="name == 'search'" />
</template>

<script setup>
const props = defineProps({
    fillColor: { type: String, default: 'white' },
    name: { type: String, default: 'bigVip' },
    size: { type: String, default: '1rem' }
})
</script>
<style scoped lang='scss'></style>