<template>
    <div :class='className'>
        <div :class="className2">
            <slot name="f">
                <div :class="className3">
                    <p class="flex justify-between items-center p-2 cursor-pointer rounded-lg hover:bg-[var(--textColorBlue)]  a"
                        v-for="(item, index) in 3">
                        <span class="truncate w-[6rem]">默认收藏夹</span>
                        <span class="text-[var(--textColor3)]   small">190</span>
                    </p>
                </div>
            </slot>
        </div>
        <div class=" max-h-80  overflow-y-auto">
            <slot name="c">
                <div class="container flex flex-col gap-4 pl-2">
                    <div class="grid grid-cols-12 gap-x-2 grid-rows-3 hover:bg-[rgba(0,0,0,.05)] p-2"
                        v-for="(item, index) in 10">
                        <img class="row-span-3 col-span-5 rounded-md cursor-pointer" referrerpolicy="no-referrer"
                            src="http://i1.hdslb.com/bfs/archive/0664b1eefccdd7ef163a9358c20af90ba45008f4.jpg"
                            alt="视频封面">
                        <p class="col-span-7 row-span-2 line-clamp-2 text-ellipsis h-[2.5rem] biger cursor-pointer">
                            我测你们我测你们金卡手机卡手机号啊回单卡京东卡很大斯柯达撒打算打算 </p>
                        <p class="col-span-7 text-[var(--textColor2)] flex items-center gap-1 cursor-pointer">
                            <svg-up fillColor="var(--textColor2)"></svg-up>
                            <span>fillColor</span>
                        </p>

                    </div>
                </div>

            </slot>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    direction: {
        type: String,
        default: false,
        default: 'x'
    }
})
const className = computed(() => {
    let a = props.direction.toLocaleUpperCase() === 'X' ? 'optionalContainer bg-white rounded-lg flex' : 'optionalContainer bg-white rounded-lg flex flex-col'

    return a;
})
const className2 = computed(() => {
    let a = props.direction.toLocaleUpperCase() === 'X' ? 'flex-shrink-0 border-r-[1px] border-[var(--textColor3)] border-dashed max-h-80  overflow-auto' : 
    'flex-shrink-0 border-b-[1px] border-[var(--textColor3)] border-dashed max-h-80  overflow-auto'

    return a;
})
const className3 = computed(() => {
    let a = props.direction.toLocaleUpperCase() === 'X' ? 'container  flex gap-2 p-2   flex-col' : 'container  flex gap-2 p-2'

    return a;
})
</script>
<style scoped lang='scss'>
.small {
    font-size: .6rem !important;
}

.a {
    &:hover {
        span {
            color: var(--textColorWhite) !important;
        }

    }
}
</style>