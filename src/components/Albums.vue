<script setup lang="ts">
import pic1 from "../assets/image/pic1.jpeg";
import pic2 from "../assets/image/pic2.jpeg";
import pic4 from "../assets/image/pic4.png";
</script>

<template>
  <div class="albums">
    <img :src="pic4" class="fade-in" />
    <img :src="pic2" class="fade-in" />
    <img :src="pic1" class="fade-in" />
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
