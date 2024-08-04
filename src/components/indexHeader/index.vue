<!-- 组件--头部 -->
<template>
    <div class="header" v-if="!header2">
        <div class="content">
            <IndexHeader-left classname="max-w-[40%]" />
            <IndexHeader-center />
            <IndexHeader-right />
        </div>
    </div>
    <div class="line h-[1px] w-full " ref="header"></div>
    <div class="header header2" v-show="header2 || show2">
        <div class="content">
            <IndexHeader-left classname="max-w-[40%]" />
            <IndexHeader-center />
            <IndexHeader-right />
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    header2: { type: Boolean, default: false }
})
const show2 = ref(false);
const header = ref<null | HTMLElement>(null);
const options = {
    root: null, // 指定视口作为交叉的根
    rootMargin: '0px', // 视口的边界盒
    threshold: 0.5, // 目标元素有10%可见时触发回调
};

function obCallback(entries: IntersectionObserverEntry[]) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // 元素进入视口时执行的代码
            show2.value = false;
        } else {
            show2.value = true;
        }
    });
}

// 开始观察元素
!props.header2 && onMounted(() => {
    const observer = new IntersectionObserver(obCallback, options);
    header.value && observer.observe(header.value);
})
</script>
<style scoped lang="scss">
.header {
    width: 100%;
    min-height: 180px;
    background: url('@/assets/img/header.avif') no-repeat center;
    background-size: cover;
    position: relative;

    * {
        font-size: 0.8rem;
    }

    .content {
        padding: 0 1rem;
        display: flex;
        align-items: center;
        width: 100%;
        height: 5rem;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.01));
    }

}

.header2 {
    min-height: min-content;
    background: none;
    background-color: white;
    --textColorWhite: var(--baseColor);
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 9999;

    .content {
        background: none;
    }

}
</style>