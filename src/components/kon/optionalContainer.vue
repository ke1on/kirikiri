<template>
    <div :class='className'>
        <div :class="className2">
            <slot name="f">
                <div :class="className3" v-if="directionBool">
                    <p :class="`${item.selected == true ? 'bg-[var(--textColorBlue)] b' : ''} 
                    flex justify-between items-center p-2 cursor-pointer rounded-lg hover:bg-[var(--textColorBlue)]  a`"
                        v-for="(item, index) in dataDefault" @click="select(index)">
                        <span class="truncate w-[6rem]">{{ item.name }}</span>
                        <span class="text-[var(--textColor3)]   small" v-if="item.num">{{ item.num }}</span>
                    </p>
                </div>
                <div class="flex cursor-pointer w-full gap-2 mb-2" v-if="!directionBool">
                    <p v-for="(item, index) in dataDefault" @click="select(index)"
                        :class="`${item.selected == true ? 'bg-[var(--textColorBlue)] text-[var(--textColorWhite)] ' : ''} 
                         flex-grow text-center p-2  rounded-lg hover:bg-[var(--textColorBlue)] hover:text-[var(--textColorWhite)]`">
                        {{ item.name }}
                    </p>
                </div>
            </slot>
        </div>
        <div class=" max-h-80  overflow-y-auto">
            <slot name="c" :dataList="dataList">
                <kon-videoItem2 :dataList="dataList"></kon-videoItem2>

            </slot>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    direction: {
        type: String,
        default: 'x'
    },
    data: {
        type: Array,
        default: [
            { name: '视频', dataList: [] },
            { name: '直播', dataList: [] },
            { name: '专栏', dataList: [] }]
    }
})
const directionBool = computed(() => {
    return props.direction.toLocaleUpperCase() === 'X'
})
const dataDefault = computed(() => {
    //创建一个新数组，添加选中属性
    let newArr = props.data.map(i => {
        i.selected = false
        return i
    })
    newArr[0].selected = true
    return newArr
})
const className = computed(() => {
    let a = props.direction.toLocaleUpperCase() === 'X' ? 'optionalContainer min-h-100 bg-white rounded-lg flex' : 'optionalContainer min-h-100 bg-white rounded-lg flex flex-col'

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
const select = (index) => {
    dataDefault.value.forEach((item, index) => {
        item.selected = false
    })
    dataDefault.value[index].selected = true
    console.log(dataDefault.value)
}
const selected = computed(() => {
    let a = 0
    dataDefault.value.forEach((item, index) => {
        if (item.selected == true) {
            a = index
        }
    })
    return a
})
const dataList = computed(() => dataDefault.value[selected.value].dataList) 
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

.b {
    span {
        color: var(--textColorWhite) !important;
    }
}

.more {
    text-align: center;
    color: var(--textColor2) !important;
}
</style>