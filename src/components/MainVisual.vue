<script setup lang="ts">
import img from "../assets/image/main.png";
const props = defineProps({
  type: String,
});
</script>

<template>
  <div :class="['main_visual', props.type]">
    <img :src="img" />
    <div class="titles">
      <div class="subtitle">
        <p>Wedding Invitation</p>
      </div>
      <div class="title">
        <p>KIM EUNMI<br />YOO WONSEON</p>
      </div>
    </div>
    <div class="bottom">
      <small> 2023.09.03 PM 05:00<br /> </small>
      <small>Apelgamo Banpo</small>
    </div>
  </div>
</template>

<style scoped>
.main_visual {
  position: relative;
  font-family: "Nanum Myeongjo", serif;
  text-align: center;
  color: var(--vt-c-white);
  min-height: 500px;
}

.main_visual img {
  width: auto;
  min-height: 500px;
  max-height: 80vh;
  transform: translateX(-50%);
  margin-left: 50%;
}
.titles {
  position: absolute;
  top: 100px;
  left: 30px;
  right: 30px;
  text-align: center;

  font-size: 30px;
  font-weight: bolder;
  line-height: 50px;
  letter-spacing: 3px;
}

.subtitle {
  margin-bottom: 20px;
  font-size: 20px;
}

.bottom {
  position: absolute;
  bottom: 30px;
  font-size: 20px;
  width: 100%;
}

@media (min-width: var(--breakpoint)) {
}
</style>
