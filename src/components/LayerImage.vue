<script setup lang="ts">
import LoadingGif from "@/assets/image/load-loading.gif";

defineProps<{
  image: string;
}>();
</script>

<template>
  <div class="layer_image_view" @click="$emit('close')">
    <button class="btn_close"></button>
    <div class="layer_content">
        <img class="layer_image" v-lazy="{src:image,loading: LoadingGif}"/>
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
    left:0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.layer_content {
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.layer_image {
    width: auto;
    height: 100%;
    margin: 0 auto;
}

.btn_close {
    background: url("../assets/image/icon_close.png") no-repeat center center / cover;
    position: fixed;
    top: 20px;
    right: 20px;
    width: 24px;
    height: 24px;
}

@media (min-width: 580px) {
    .layer_content {
        height: calc(100% - 100px);
    }
}

img[lazy=loading] {
  width: 100px;
  height: 100px;
  margin: 0 auto;
}

</style>
