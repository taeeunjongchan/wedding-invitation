<script setup lang="ts">
defineProps<{
  image: string;
}>();


</script>

<template>
  <div class="layer_image_view" @click="$emit('close')">
    <button class="btn_close"></button>
    <div class="layer_content">
        <img class="layer_image" :src="image"/>
    </div>
  </div>
</template>

<style scoped>
.layer_image_view {
    width: 100vw;
    height: 100vh;
    z-index: 1;
    background-color: rgba(124, 122, 122, 0.7);
    position: fixed;
    top:0;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.layer_content {
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
}

.layer_image {
    width: auto;
    height: 100%;
}

.btn_close {
    background: url("../assets/image/icon_close.png") no-repeat center center / cover;
    position: fixed;
    top: 20px;
    right: 20px;
    width: 24px;
    height: 24px;
}
</style>
