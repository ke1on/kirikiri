<template>
    <div>
        <div class="rounded-lg overflow-hidden relative cursor-pointer">
            <img src="http://i2.hdslb.com/bfs/archive/caca6b7b9b77171065204cb8be68ae30e7656a4e.jpg"
                referrerpolicy="no-referrer" alt="" class="rounded-lg" />
            <div
                class="mask absolute bottom-0 left-0 text-[var(--textColorWhite)] text-sm p-[2%] flex justify-between w-full">
                <div class="flex gap-2">
                    <div class="flex items-center gap-1">
                        <svgAll name="videoTV" />
                        <span>2.6万</span>
                    </div>
                    <div class="flex items-center gap-1">
                        <svgAll name="danmu" />
                        <span>2.6万</span>
                    </div>
                </div>
                <div>04:52</div>
            </div>
        </div>
        <div class="h-[3rem] line-clamp-2 my-1">【熟肉】补充每日短视频能量你你你你你你你你你那那那那那那那那那那那那那那那那那-xQc</div>
        <div class="text-sm flex items-center gap-1 text-[var(--textColor2)]">
            <svg-up></svg-up>
            <span>苏苏的职场日记</span>
            <span class="font-bold">·</span>
            <span>昨天</span>
        </div>
    </div>
</template>

<script setup>

</script>
<style scoped lang='scss'>
.mask {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.01));
}
</style>