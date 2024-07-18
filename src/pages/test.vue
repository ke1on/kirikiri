<template>
    <div class='aaa'>
        <svgAll fillColor="var(--textColor1)">

        </svgAll>
        <div ref="l">asdsad</div>
    </div>
</template>

<script setup>
const abc = ref(null)
const l =ref(null)
onMounted(() => {
    console.log(l.value)
    console.log(abc.value);
})
</script>
<style scoped lang='scss'></style>