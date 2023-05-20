<script setup lang="ts">
import pic1 from "../assets/image/pic1.jpeg";
import pic2 from "../assets/image/pic2.jpeg";
import pic3 from "../assets/image/pic3.png";
import pic4 from "../assets/image/pic4.png";
import pic5 from "../assets/image/pic5.png";
</script>

<template>
  <div class="albums">
    <img :src="pic4" />
    <img :src="pic2" />
    <img :src="pic1" />
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
}

@media (min-width: 580px) {
  .albums img {
    object-fit: contain;
  }
}
</style>
