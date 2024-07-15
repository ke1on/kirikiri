<template>
    <div class="multiLevelMenu" @mouseover="showMore = true" @mouseleave="showMore = false">
        <!-- <div class="multiLevelMenu" > -->
        <slot name="f">

        </slot>
        <slot name="c">
            <div :class="calssName" v-if="showMore">
                <div v-for="(i, index) in menuList" class="flex gap-1 items-center px-2 py-1 cursor-pointer ">
                    <svg-bigVip fillColor="var(--baseColor)" class="flex-shrink-0"></svg-bigVip>
                    <span class="flex-shrink-0">{{ i.label }}</span>
                </div>

            </div>
        </slot>
    </div>
</template>

<script setup>
const showMore = ref(false)
const props = defineProps({
    direction: {
        default: 'r',
        type: String
    }
    ,
    menuList: {
        type: Array,
    }
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
    bottom: 90%;
    transform: translateX(-50%);

}

.directionB {
    transform: translateX(-50%);
    top: 90%;
}
</style>