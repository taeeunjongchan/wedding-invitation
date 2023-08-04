<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from "vue";
import LayerImage from "./LayerImage.vue";
import LoadingGif from "@/assets/image/load-loading.gif";

const props = defineProps({
  type: String,
});

const showLayerImage = ref(false), pickedImage = ref("");
const showLayer = (index: number) => {
  showLayerImage.value = true;
  pickedImage.value = pictureOf(index, "");
}
const closeLayer = () => showLayerImage.value = false;
const pictureOf = (index: number, prefix: string) => {
  return new URL(`/src/assets/image/albums/${prefix}${index}.png`, import.meta.url).href;
};

const albumCounts = props.type === 'default' ? Array.from({length: 20}, (v, k) => k+1) : [2,3,4,6,8,9,13,15,17,18]
</script>

<template>
  <div class="albums">
    <div class="picture" v-for="index in albumCounts" :key="`pic_${index}`">
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 4px;
  column-gap: 4px;
}
.albums .picture {
  min-height: 250px;
  height: auto;
  border-radius: 3px;
  transition: 0.7s all;
  cursor: pointer;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.albums img {
  object-fit: contain;
  width: 100%;
}

img[lazy=loading] {
  width: 30px;
  height: 30px;
  margin: 0 auto;
}
</style>
