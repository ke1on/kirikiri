<template>
    <div class='item3 text-[--baseColor] font-bold'>
        <p class="h2">动态</p>
        <div class="lineBox flex gap-2 items-center">
            <div class="flex-grow bg-[--textColor3] h-[1px]"></div>
            <div class=" text-sm text-[--textColor3]">动态</div>
            <div class="flex-grow bg-[--textColor3] h-[1px]"></div>
        </div>
        <!-- 每条动态 -->
        <div class="container flex flex-col gap-y-2 max-h-96 overflow-y-auto scroll-smooth">
            <div class="content  flex gap-2 items-center justify-between " v-for="(item, index) in 5">

                <img src="https://i1.hdslb.com/bfs/face/47cb26c7c0349df60df359457eb9758c04b3d796.jpg"
                    class="avatar  rounded-full w-[3rem] aspect-square mb-[auto]" referrerpolicy="no-referrer" alt="">

                <div style="width: calc(100% - 30% - 4rem);font-weight: 300;">
                    <p class="  w-full truncate text-[var(--textColor1)]">主播名</p>
                    <p class=" w-full truncate font-normal">视频名：从零开始制作bilibili</p>
                    <p class="text-[var(--textColor1)]">1小时前</p>
                </div>
                <img class="w-[30%] rounded-lg mt-4 " referrerpolicy="no-referrer"
                    src="http://i1.hdslb.com/bfs/archive/0664b1eefccdd7ef163a9358c20af90ba45008f4.jpg">
            </div>
            <div class="lineBox flex gap-2 items-center">
            <div class="flex-grow bg-[--textColor3] h-[1px]"></div>
            <div class=" text-sm text-[--textColor3]">已经到底啦~</div>
            <div class="flex-grow bg-[--textColor3] h-[1px]"></div>
        </div>
        </div>
    </div>
</template>

<script setup>

</script>
<style scoped lang='scss'>
.h2 {
    font-size: 1rem !important;
}
</style>