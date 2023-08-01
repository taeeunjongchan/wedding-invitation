<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from "vue";
import LayerImage from "./LayerImage.vue";

const showLayerImage = ref(false), pickedImage = ref("");
const showLayer = (index: number) => {
  showLayerImage.value = true;
  pickedImage.value = pictureOf(index);
}
const closeLayer = () => showLayerImage.value = false;
const pictureOf = (index: number) => {
  return new URL(`/src/assets/image/albums/${index}.png`, import.meta.url).href;
};

</script>

<template>
  <div class="albums">
    <img v-for="index in 20" :key="`pic_${index}`" :src="pictureOf(index)" @click="showLayer(index)"/>
  </div>
  <LayerImage v-if="showLayerImage" :image="pickedImage" @wheel.prevent @touchmove.prevent @scroll.prevent @close="closeLayer"/>
</template>

<style scoped>
.albums {
  width: 100%;
  padding: 1rem;
}
.albums img {
  margin-right: 4px;
  width: calc(50% - 4px);
  height: auto;
  border-radius: 3px;
  transition: 0.7s all;
}

@media (min-width: 580px) {
  .albums img {
    object-fit: contain;
  }
}
</style>
