<template>
    <svg t="1721030606109" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="1322" width="200" height="200">
        <path
            d="M396.501333 712.832a42.666667 42.666667 0 0 1 0-60.330667L537.002667 512 396.501333 371.498667a42.666667 42.666667 0 0 1 60.330667-60.330667l170.666667 170.666667a42.666667 42.666667 0 0 1 0 60.330666l-170.666667 170.666667a42.666667 42.666667 0 0 1-60.330667 0z"
            p-id="1323" :fill="fillColor"></path>
    </svg>
</template>

<script setup>
const props = defineProps({
    fillColor: { type: String, default: 'white' },
})
</script>
<style scoped lang='scss'></style>