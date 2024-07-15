<template>
    <div class="multiLevelMenu" @mouseover="showMore = true" @mouseleave="showMore = false">
        <!-- <div class="multiLevelMenu" > -->
        <slot name="f">

        </slot>
        <div :class="calssName" v-if="showMore">
            <slot name="c">
            </slot>
        </div>

    </div>
</template>

<script setup>
const showMore = ref(false)
const props=defineProps({
    direction:{
        default:'r',
        type:String
    }
})
const calssName=computed(()=>{
    let a=props.direction.toString().toLocaleUpperCase()
    return 'multiLevelMenuContainer '+'direction'+a
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
.directionL{
    right: 100%; 
    transform: translateY(-50%);
}
.directionR{ 
    left:100%;
    transform: translateY(-50%);

}
.directionT{
    bottom: 90%; 
    transform: translateX(-50%);

}
.directionB{
    transform: translateX(-50%);
    top: 90%; 
}
</style>