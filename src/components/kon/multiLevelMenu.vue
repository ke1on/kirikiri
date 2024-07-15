<template>
    <div class="multiLevelMenu" @mouseover="showMore = true" @mouseleave="showMore = false">
        <!-- <div class="multiLevelMenu" > -->
        <slot name="f">
            <div class="flex items-center w-full justify-between px-4">
                <p class="flex gap-1 items-center">
                    <svgAll :name='titleIcon' size="1.5rem" fillColor="var(--textColor1)" />
                    <p>{{ title }}</p>
                </p>

                <svgAll name='fold' size="1.5rem" fillColor="var(--baseColor)" v-if="needIcon" />
            </div>
        </slot>
        <slot name="c"  v-if="menuList.length">
            <div :class="calssName" v-if="showMore" >
                <div v-for="(i, index) in menuList" class="flex gap-1 items-center px-2 py-1 cursor-pointer ">
                    <svgAll :name='i.icon' fillColor="var(--baseColor)"></svgAll>
                    <span class="flex-shrink-0">{{ i.label }}</span>
                </div> 
            </div>
        </slot>
    </div>
</template>

<script setup>
const showMore = ref(false)
const props = defineProps({
    direction: { default: 'r', type: String },
    menuList: { type: Array, required: true,default:[] },
    needIcon: { type: Boolean, default: true },
    title: { type: String, default: '推荐服务' },
    titleIcon:{type: String, default: 'manuscript'}
})
const calssName = computed(() => {
    let a = props.direction.toString().toLocaleUpperCase()
    return 'multiLevelMenuContainer ' + 'direction' + a
})
</script>
<style scoped lang='scss'>
.multiLevelMenuContainer { 
    position: absolute; 
    z-index: 999;
    background-color: white;
    border-radius: .5rem;
    padding: .5rem;
    display: flex;
    flex-direction: column;
    min-width: 8rem;
    gap: .5rem;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, .3);
}

.directionL {
    right: 100%;
    transform: translateY(-50%);
}

.directionR {
    left: 100%;
    transform: translateY(-50%);

}

.directionT {
    bottom: 100%;
    transform: translateX(-50%);

}

.directionB {
    transform: translateX(-50%);
    top: 100%;
}
</style>