<template>
    <div class='indexNav'>
        <!-- 左侧 -->
        <div class="left flex justify-between gap-4">
            <div class="flex flex-col items-center">
                <img class="w-[3rem] aspect-square rounded-full"
                    src="http://ke1on.top:5999/%E5%87%89%E5%AE%AB%E6%98%A5%E6%97%A5%E7%9A%84%E5%BF%A7%E9%83%81.jpg">
                <p class="text-sm mt-1">动态</p>
            </div>
            <div class="flex flex-col items-center">
                <div class="w-[3rem] p-4 aspect-square rounded-full bg-red-400 flex justify-center items-center">
                    <svg-fire class="w-full h-full"></svg-fire>
                </div>
                <p class="text-sm mt-1">热门</p>
            </div>
        </div> 
        <ul class="center">
            <li>    
                
            </li>
        </ul> 
        <div></div>
    </div>
</template>

<script setup>
    const centerList=ref([
        {name:'番剧',path:'/'}
    ])
</script>
<style scoped lang='scss'>
.indexNav {
    display: flex;
    height: 8rem;
}
</style>