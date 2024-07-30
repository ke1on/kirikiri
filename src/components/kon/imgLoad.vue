<template>
    <div>
        <img ref="image" class="w-full h-full object-fill"  
            :src="pic"
            referrerpolicy="no-referrer" crossOrigin="anonymous" /> 
    </div>
</template>

<script setup>
// 该组件创建意义在于获取图片的平均色值
import { ref, onMounted } from 'vue';
const props = defineProps({
    pic: {
        type: String,
        default: '//i0.hdslb.com/bfs/banner/aba39df71f60f6b55d0a246ca5ee76a62248c2e5.png@976w_550h_1c_!web-home-carousel-cover'
    }
}); 
const image = ref(null);
const averageColor = ref('');

const getAverageColor = () => {
    const img = image.value;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    ctx.drawImage(img, 0, 0);

    try {
        const imageData = ctx.getImageData(0, 0, img.naturalWidth, img.naturalHeight).data;
        let r = 0, g = 0, b = 0;
        for (let i = 0; i < imageData.length; i += 4) {
            r += imageData[i];
            g += imageData[i + 1];
            b += imageData[i + 2];
        }
        r = Math.floor(r / (imageData.length / 4));
        g = Math.floor(g / (imageData.length / 4));
        b = Math.floor(b / (imageData.length / 4));

        averageColor.value = `rgb(${r}, ${g}, ${b})`;
    } catch (error) {
        console.error('Error getting image data:', error);
        averageColor.value = 'Error';
    }
};

onMounted(() => {
    if (image.value.complete) {
        getAverageColor();
    } else {
        image.value.addEventListener('load', getAverageColor);
    }

});
defineExpose({ averageColor });

</script>

<style scoped>
/* 这里可以添加样式 */
</style>