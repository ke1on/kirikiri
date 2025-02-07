<!-- 初始化窗口 -->
<template>
    <div class=" box border border-[rgba(0,0,0,0)] hover:border-[rgba(0,0,0,0.1)] hover:rounded-lg">
        <div class="cursor-pointer">
            <div ref="playerBox" class="w-full aspect-video">
                <div class="w-full h-full imgbox rounded-lg overflow-hidden relative cursor-pointer">
                    <div class="rounded-lg bg-slate-100 w-full h-full">
                    </div>

                </div>

            </div>
            <div class="px-1 flex flex-col gap-1">
                <div class="h-[2rem] text-[.9rem] line-clamp-2  mt-2  bg-slate-100 w-full  "> </div>
                <div class="text-sm flex items-center gap-1 text-[var(--textColor2)] bg-slate-100 w-full h-3">

                </div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
</script>
<style scoped lang='scss'>
.mask {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.01));
}

.box {
    position: relative;
    transition: all .3s;

    &::before,
    &::after {
        content: '';
        transition: all .3s;
        position: absolute;
        --h: 0%;
        --w: 0%;
        --bg: rgba(0, 0, 0, 0.1);
        bottom: calc(-1 * var(--h));
        z-index: -1;
        height: var(--h);
        width: calc(var(--w));
        left: calc((100% - var(--w)) / 2);
        border-radius: 0 0 .5rem .5rem;
        background-color: var(--bg);
    }

    
}
</style>