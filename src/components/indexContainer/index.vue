<template>  
    <div class='indexContainer'>
        <div>123</div>
        <div>456</div>
        <div>789</div>
    </div>
</template>

<script setup>

</script>
<style scoped lang='scss'>
.indexContainer{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
}
</style>