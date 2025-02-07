<template>
     
    <div   class='carousel flex flex-col w-full h-full pb-20 relative  overflow-hidden rounded-t-lg'>
        <div class="w-full h-full bg-slate-100"></div>
    </div>
</template>

<script setup lang="ts">
 
</script>
<style scoped lang='scss'>
.dot {
    &::before {
        content: '';
        position: absolute;
        border-radius: 50% 50% 0 0;
        background-color: rgba(255, 255, 255, 1);
        width: 120%;
        height: 60%;
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 100% 100%, 0% 100%);
        animation: next1 .6s 4 ease-in-out;
    }

    &::after {
        content: '';
        position: absolute;
        border-radius: 0 0 50% 50%;
        top: 50%;
        background-color: rgba(255, 255, 255, 1);
        width: 120%;
        height: 60%;
        clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 100%, 100% 0%);
        animation: next2 .6s 4 ease-in-out;
    }
}



@keyframes next1 {
    50% {
        clip-path: polygon(0% 0%, 100% 0%, 100% 40%, 40% 100%, 0% 100%);

    }
}

@keyframes next2 {
    50% {
        clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 40%, 40% 0%);

    }
}
</style>