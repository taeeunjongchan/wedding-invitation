<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from "vue";
import LayerImage from "./LayerImage.vue";
import LoadingGif from "@/assets/image/load-loading.gif";

const showLayerImage = ref(false), pickedImage = ref("");
const showLayer = (index: number) => {
  showLayerImage.value = true;
  pickedImage.value = pictureOf(index, "");
}
const closeLayer = () => showLayerImage.value = false;
const pictureOf = (index: number, prefix: string) => {
  return new URL(`/src/assets/image/albums/${prefix}${index}.png`, import.meta.url).href;
};

</script>

<template>
  <div class="albums">
    <div class="picture" v-for="index in 20" :key="`pic_${index}`">
      <img v-lazy="{src: pictureOf(index, 'resize_'), loading: LoadingGif}" @click="showLayer(index)"/>
    </div>
  </div>
  <LayerImage v-if="showLayerImage" :image="pickedImage" @wheel.prevent @touchmove.prevent @scroll.prevent @close="closeLayer"/>
</template>

<style scoped>
.albums {
  width: 100%;
  padding: 1rem;
  margin-bottom: 20px;
}
.albums .picture {
  margin-right: 4px;
  margin-bottom: 4px;
  width: calc(50% - 4px);
  min-height: 250px;
  height: auto;
  border-radius: 3px;
  transition: 0.7s all;
  display: flex;
  flex-direction: column;
  justify-content: center;
  float: left;
}

@media (min-width: 580px) {
  .albums img {
    object-fit: contain;
  }
}

img[lazy=loading] {
  width: 30px;
  height: 30px;
  margin: 0 auto;
}
</style>
