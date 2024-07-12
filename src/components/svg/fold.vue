<template>
    <svg class="fold-icon fold" viewBox="0 0 12 12">
        <path fill-rule="evenodd" clip-rule="evenodd" :fill="fillColor" d="M5.46967 9.17678C5.76256 9.46967 6.23744 9.46967 6.53033 9.17678L10.7286 4.97855
              C10.9238 4.78329 10.9238 4.46671 10.7286 4.27145C10.5333 4.07618 10.2167 4.07618 10.0214 4.27145L6 8.29289
              L1.97855 4.27145C1.78329 4.07618 1.46671 4.07618 1.27145 4.27145
              C1.07618 4.46671 1.07618 4.78329 1.27145 4.97855L5.46967 9.17678Z"></path>
    </svg>

</template>

<script setup>
const props = defineProps({
    fillColor: { type: String, default: 'white' },
})
</script>
<style scoped lang='scss'></style>