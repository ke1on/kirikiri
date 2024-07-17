<template>
    <div class='item2  text-[var(--baseColor)]'>
        <div class="cursor-pointer">
            <img src="~/assets/img/bigVipAD.avif" alt="广告">
        </div>
        <div class="grid grid-cols-8">
            <div class="col-span-6 flex flex-col">
                <p class="title ">大会员特权</p>
                <div class="grid grid-cols-2 grid-rows-2 gap-y-2 flex-grow">
                    <div v-for="(item, index) in list" class="flex items-center justify-start gap-x-1 cursor-pointer">
                        <svgAll :name="item.icon" size="1.5rem"></svgAll>
                        <p class="text-nowrap hover:text-[var(--textColorPink2)]">{{ item.label }}</p>
                    </div>
                </div>
            </div>
             <img src="~/assets/img/wx.png"  class="col-span-2 bg-gray-100 p-2 rounded-lg">
        </div>
        <div class="bg-[var(--bgPink)] rounded-lg flex p-4 justify-between">
            <div class="text-[var(--textColorPink)]">
                <p>联合会员限量秒杀</p>
                <p>大会员买一年送一年，限量2233份</p>
            </div>
            <button class="bg-[var(--textColorPink2)] hover:bg-[var(--textColorPink)] text-white px-8 py-2 rounded-lg cursor-pointer">
                立即参与
            </button>
        </div>
    </div>
</template>

<script setup>
const list = ref([
    { icon: 'bigVipContent1', label: '大会员特权' },
    { icon: 'bigVipContent1', label: '会员免费看' },
    { icon: 'bigVipContent1', label: '4K超清画质' },
    { icon: 'bigVipContent1', label: '会员专属装扮' },
])
</script>
<style scoped lang='scss'>
.title{
    font-size: 1rem !important;
    font-weight:bold;
   
}
</style>