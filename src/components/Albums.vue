<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
// import pic1 from "../assets/image/pic1.jpg";
// import pic2 from "../assets/image/pic2.jpg";
// import pic4 from "../assets/image/pic4.png";

const props = defineProps({
  type: String,
});
</script>

<template>
  <div class="albums">
    <!-- <img :src="pic4" />
    <img :src="pic2" />
    <img :src="pic1" /> -->
  </div>
</template>

<style scoped>
.albums {
  width: 100%;
  padding: 1rem;
}
.albums img {
  width: 100%;
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
