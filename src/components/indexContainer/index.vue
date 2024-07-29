<template>
    <div class='indexContainer grid grid-cols-5 gap-4 relative'>
        <kon-carousel class="col-span-2 row-span-2"></kon-carousel>
        <kon-videoItem :preview="preview"
        v-for="i in 11"></kon-videoItem>
        <label for="k" class="absolute flex items-center gap-1 -right-16  text-[12px] select-none cursor-pointer">
            开启<br/>预览
            <input id="k" type="checkbox" v-model="preview" />
        </label>
        <div
            class="hover:bg-[rgba(0,0,0,.0625)] flex flex-col absolute items-center gap-1 -right-12 top-20 p-2  text-[12px] rounded-lg border select-none cursor-pointer">
            <span>换</span>
            <span>一</span>
            <span>换</span>
        </div>
    </div>
</template>

<script setup>
    const preview=ref(false)
    watch(preview,(n)=>{
        console.log(n)
    })
    
</script>
<style scoped lang='scss'>

</style>