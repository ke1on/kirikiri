<!-- 头部中间、搜索功能 -->
<template>
    <form :class='centerClassName'>
        <div class="inputBox">
            <input type="text" v-model="inputText" placeholder="搜索" @focus="inputFocus" @blur="inputBlur"
                ref="inputBox" />
            <div @click="searchAction">
                <svg-search />
            </div>
        </div>
        <div class="searchHistory" v-show="showSearch" @click="keepShow = true">
            <div class="title" v-if="searchHistory.length">
                <p>搜索历史</p>
                <p @click="searchHistory = []">清空</p>
            </div>
            <div class="content" :style="{ maxHeight: showMore ? '999px' : '' }" v-if="searchHistory.length"
                ref="contentBox">
                <div class="item" v-for="(i, index) in searchHistory" :key="index" @click="searchClick(index)">
                    <p>{{ i }}</p>
                    <svg-close :fillColor="'#ccc'" @click.stop="delHistory(index)" />
                </div>
            </div>
            <div class="showMore" v-if="searchHistory.length">
                <p class="text-sm text-zinc-400 text-center" @click="showMore = !showMore" v-if="needShowMore">
                    <span v-if="!showMore">
                        展开更多
                        <svg-fold :fillColor="'#ccc'" class="inline w-4 h-4 "></svg-fold>
                    </span>
                    <span v-if="showMore">
                        收起
                        <svg-fold :fillColor="'#ccc'" class="inline w-4 h-4 rotate-180"></svg-fold>
                    </span>

                </p>
            </div>
            <div class="hotspot">
                <div class="title">kirikiri热门</div>
                <div class="hotspotCenten">
                    <div class="item" v-for="(i, index) in 5" :key="index">
                        {{ i }}
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import clientOnly from '~/utils/clientOnly.ts';
const showSearch = ref(false)
const centerClassName = computed(() => showSearch.value ? 'centerFocus center' : 'center')
const keepShow = ref(false)
const inputBox = ref(null)
const inputText = ref('')
const contentBox = ref(null)
const showMore = ref(false)
const needShowMore = ref(false)
/**
 * 定义搜索记录
 */
const getSearchHistory = () => {
    let data = localStorage.getItem('searchHistory');
    if (data) {
        searchHistory.value = JSON.parse(data)
    }
}

const searchHistory = ref([])
/**
 * 搜索框失去焦点
 */
const inputBlur = () => {
    setTimeout(() => {
        if (keepShow.value) {
            inputBox.value.focus();
            keepShow.value = false;
        } else {
            showSearch.value = false
        }
    }, 250);
}
/**
 * 搜索框获取焦点
 */
const inputFocus = () => {
    showSearch.value = true

}

/**
 * 搜索记录点击
 */
const searchClick = (i) => {

    inputText.value = i
    searchAction()
}
/**
 * 删除搜索记录
 */
const delHistory = (index) => {
    keepShow.value = true
    let a = searchHistory.value.filter((i, index2) => index2 != index)
    searchHistory.value = a;
}
/**
 * 添加搜索记录
 */
const addHistory = () => {
    needShowMore.value = needShowMoreFn()
    searchHistory.value.unshift(inputText.value)
}
/**
 * 搜索
 */
const searchAction = () => {
    keepShow.value = true
    addHistory()
    console.log('进行了搜索')
    console.log(needShowMore.value)
}
/**
 * 监听搜索记录
 */
const needShowMoreFn = () => {
    let a
    try {
        a = contentBox.value.scrollHeight > contentBox.value.clientHeight
    } catch (error) {
        a = false;
    }
    return a;
}
watch(searchHistory, (n) => {
    let data = JSON.stringify(n);
    clientOnly(() => { localStorage.setItem('searchHistory', data) });
}, { deep: true })
onMounted(() => {
    clientOnly(getSearchHistory);
    needShowMore.value = needShowMoreFn()
})
</script>
<style scoped lang='scss'>
.center {
    width: 28%;
    padding: .25rem;
    background-color: white; 
    border-radius: .5rem;
    position: relative;
    -webkit-font-smoothing: antialiased;
    height: fit-content;
}

.centerFocus {
    border-radius: .5rem .5rem 0 0;
}

.inputBox {
    $bg: rgba($color: #fff, $alpha: 0.9);
    display: flex;
    align-items: center;

    height: 32px;
    // padding-left: .5rem;

    input {
        flex-grow: 1;
        height: inherit;
        padding: .25rem .5rem;
        background-color: #e3e5e7;
        outline: none;
        border-radius: .5rem;
    }

    &>div {

        background-color: white;
        height: inherit;
        aspect-ratio: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        svg {
            flex-shrink: 0;

        }
    }

}

.searchHistory {
    width: calc(100%);
    left: 0;
    padding: .5rem;
    background-color: #fff;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    position: absolute;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);

    .title {
        display: flex;
        justify-content: space-between;

        p {
            &:first-child {
                font-size: medium;
            }

            &:last-child {
                font-size: small;
            }
        }
    }


    .content,
    .hotspot {
        display: flex;
        flex-wrap: wrap;
        gap: .5rem;

        .item {
            padding: .3rem .5rem;
            border-radius: .3rem;
            $bg: var(--baseColor);
            background-color: darken($color: #fff, $amount: 4);
            position: relative;
            font-size: small;
            cursor: pointer;

            &:hover {
                color: #00AEEC;

                svg {
                    transform: translate(25%, -25%) scale(1);
                }
            }

            svg {
                position: absolute;
                top: 0;
                right: 0;
                transition: .2s ease-in-out;
                transform: translate(25%, -25%) scale(0);
            }
        }

    }

    .content {
        max-height: calc((0.75rem + 0.3rem * 2 + 1rem - .1rem) * 3);
        overflow: hidden;
    }

    .hotspot {
        .title {
            width: 100%;
        }

        .hotspotCenten {
            display: flex;
            flex-direction: column;
            gap: .5rem;
        }
    }
}
</style>