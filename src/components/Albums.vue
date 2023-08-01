<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from "vue";
import LayerImage from "./LayerImage.vue";

const numberOf = (text: string) => Number(text.replace("/src/assets/image/albums/", "").replace(".jpg",""));
const showLayerImage = ref(false), pickedImage = ref("");
const showLayer = (picture: string) => {
  showLayerImage.value = true;
  pickedImage.value = picture
}
const closeLayer = () => showLayerImage.value = false;
const pictures =  Object.keys(import.meta.glob("@/assets/image/albums/*")).sort((a, b) => {
        return numberOf(a) - numberOf(b);
    }).map(picture => new URL(picture, import.meta.url));
</script>

<template>
  <div class="albums">
    <img v-for="(picture, index) in pictures" :key="`pic_${index}`" :src="picture" @click="showLayer(picture.toString())"/>
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
