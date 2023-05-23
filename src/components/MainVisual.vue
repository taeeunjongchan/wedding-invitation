<script setup lang="ts">
import img from "../assets/image/main_visual.jpg";
import img2 from "../assets/image/main_2.jpg";
const props = defineProps({
  type: String,
});
</script>

<template>
  <div :class="['main_visual', props.type]">
    <div class="details">
      <img :src="props.type === 'parents-gaun' ? img2 : img" />
    </div>
    <div class="titles">
      <div class="title_left">
        <p>조재국<br />반가운</p>
      </div>
      <div class="title_right">
        <p>결혼합니다</p>
      </div>
    </div>
    <div class="bottom">
      <small>
        We are lucky in having found the perfect partner to spend our life
        with.<br />
      </small>
      <small>2023. 07. 01 PM 04:00</small>
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
  width: 100%;
}
.titles {
  position: absolute;
  top: 70px;
  left: 30px;
  right: 30px;
  display: flex;
  justify-content: space-between;

  font-size: 30px;
  font-weight: bolder;
  line-height: 50px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  letter-spacing: 3px;
}

.parents-gaun .titles {
  top: 30px;
  left: 20px;
  right: 20px;
  font-size: 23px;
  line-height: 40px;
}

.title_left {
  text-align: left;
}
.title_right {
  writing-mode: vertical-lr;
}

.bottom {
  position: absolute;
  bottom: 30px;
  font-size: 10px;
  width: 100%;
}

@media (min-width: var(--breakpoint)) {
}
</style>
