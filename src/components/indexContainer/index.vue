<template>
    <div class='indexContainer grid grid-cols-5 gap-4'>
        <kon-carousel class="col-span-2 row-span-2"></kon-carousel>
        <kon-videoItem v-for="i in 21"></kon-videoItem>
    </div>
</template>

<script setup>

</script>
<style scoped lang='scss'>
.indexContainer {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
}


</style>