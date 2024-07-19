<template>
    <div>
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
        <svg-user :style="`height: ${size}; width:${size};`" :fillColor="fillColor" v-if="name == 'user'" />
        <svg-manuscript :style="`height: ${size}; width:${size};`" :fillColor="fillColor" v-if="name == 'manuscript'" />
        <svg-document :style="`height: ${size}; width:${size};`" :fillColor="fillColor" v-if="name == 'document'" />
        <svg-flag :style="`height: ${size}; width:${size};`" :fillColor="fillColor" v-if="name == 'flag'" />
        <svg-chat :style="`height: ${size}; width:${size};`" :fillColor="fillColor" v-if="name == 'chat'" />
        <svg-camera :style="`height: ${size}; width:${size};`" :fillColor="fillColor" v-if="name == 'camera'" />
        <svg-smile :style="`height: ${size}; width:${size};`" :fillColor="fillColor" v-if="name == 'smile'" />
        <svg-music :style="`height: ${size}; width:${size};`" :fillColor="fillColor" v-if="name == 'music'" />
        <svg-logout :style="`height: ${size}; width:${size};`" :fillColor="fillColor" v-if="name == 'logout'" />
        <svg-bigVipContent1 :style="`height: ${size}; width:${size};`" :fillColor="fillColor" v-if="name == 'bigVipContent1'" />
        <svg-bigVipContent2 :style="`height: ${size}; width:${size};`" :fillColor="fillColor" v-if="name == 'bigVipContent2'" />
        <svg-bigVipContent3 :style="`height: ${size}; width:${size};`" :fillColor="fillColor" v-if="name == 'bigVipContent3'" />
        <svg-bigVipContent4 :style="`height: ${size}; width:${size};`" :fillColor="fillColor" v-if="name == 'bigVipContent4'" />
        <svg-up :style="`height: ${size}; width:${size};`" :fillColor="fillColor" v-if="name == 'up'" />
        <svg-videoTV :style="`height: ${size}; width:${size};`" :fillColor="fillColor" v-if="name == 'videoTV'" />
        <svg-danmu :style="`height: ${size}; width:${size};`" :fillColor="fillColor" v-if="name == 'danmu'" />
    </div>
</template>

<script setup>
const props = defineProps({
    fillColor: { type: String,  },
    name: { type: String, default: 'bigVip' },
    size: { type: String, default: '1rem' },
})
provide('name',props.name);
</script>
<style scoped lang='scss'></style>