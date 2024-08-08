<template>
    <div class='searchPage flex flex-col items-center'>
        <indexHeader :header2="true" :header3="true" />
        <div class="w-[30%] my-4 ">
            <IndexHeader-center v-model="searchText"></IndexHeader-center>
        </div>
        <div class="w-[100%] mr-auto my-4 px-20">
            <kon-optionalContainer direction="y" :data='containerData'>
                <template #c="c">
                    <div class="grid grid-cols-6 gap-4 my-8">
                        <kon-videoItem v-for="(item, index) in c.dataList" :videoData="item.video"></kon-videoItem>
                    </div>
                </template>
            </kon-optionalContainer>
        </div>

    </div>
</template>

<script setup lang="ts">
const containerData = ref([
    {
        name: '综合', dataList: [
            {
                "video": {
                    "id": "1606149371",
                    "mid": "11336264",
                    "bvid": "BV1Dm421G7Gq",
                    "cid": "1611189347",
                    "uri": "https://www.bilibili.com/video/BV1Dm421G7Gq",
                    "pic": "http://i1.hdslb.com/bfs/archive/85a7ece247cea760232f3a2a2833d3de412e6aa9.jpg",
                    "pic_4_3": "http://i0.hdslb.com/bfs/archive/85a7ece247cea760232f3a2a2833d3de412e6aa9.jpg",
                    "title": "小米车品2.0，不能细品！【值不值得买653期】",
                    "pubdate": "1720749600",
                    "view": "447628",
                    "like": "14383",
                    "danmaku": "2116"
                },
                "owner": {
                    "mid": "11336264",
                    "name": "TESTV官方频道",
                    "face": "https://i2.hdslb.com/bfs/face/34ccaf9461c67482e3164675c0036e94df18b7a7.jpg"
                }
            },
            {
                "video": {
                    "id": "1705951984",
                    "mid": "34264408",
                    "bvid": "BV1PT421Y7ma",
                    "cid": "1596499307",
                    "uri": "https://www.bilibili.com/video/BV1PT421Y7ma",
                    "pic": "http://i2.hdslb.com/bfs/archive/ced4bcd4e7765e1487fbfa097a7c75ab9f06afa1.jpg",
                    "pic_4_3": "http://i0.hdslb.com/bfs/aistory/2024-06-28-1801061705951984_1612_gener.jpg",
                    "title": "诸葛亮的家族和发明去了哪里？",
                    "pubdate": "1719568835",
                    "view": "582931",
                    "like": "18748",
                    "danmaku": "1911"
                },
                "owner": {
                    "mid": "34264408",
                    "name": "御史房",
                    "face": "https://i1.hdslb.com/bfs/face/d0601b3bea107da3a94a39e6f25356e34244b918.jpg"
                }
            },
            {
                "video": {
                    "id": "1006218522",
                    "mid": "1557073149",
                    "bvid": "BV1Xx4y1x7XU",
                    "cid": "1608914250",
                    "uri": "https://www.bilibili.com/video/BV1Xx4y1x7XU",
                    "pic": "http://i0.hdslb.com/bfs/archive/433ba546eff3e29aaf5a0d4c35bf458cf88c1c33.jpg",
                    "pic_4_3": "http://i0.hdslb.com/bfs/aistory/2024-07-08-19313948421006218522_16_12_803_crop.jpg",
                    "title": "韩信用实力征服萧何，从一个看粮的小兵，一跃成为统帅三军的大将",
                    "pubdate": "1720438297",
                    "view": "391299",
                    "like": "8528",
                    "danmaku": "945"
                },
                "owner": {
                    "mid": "1557073149",
                    "name": "二棉裤说剧",
                    "face": "https://i0.hdslb.com/bfs/face/38b1e8a6570eb849bc629110990cc7283ee898ea.jpg"
                }
            }
        ]
    },
    { name: '视频', dataList: [] },
    { name: '番剧', dataList: [] },
    { name: '影视', dataList: [] },
    { name: '直播', dataList: [] },
    { name: '专栏', dataList: [] },
    { name: '用户', dataList: [] },
])
const searchText=ref('123')
</script>
<style scoped lang='scss'></style>