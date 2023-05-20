<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  title: String,
});
</script>

<template>
  <div class="location_text">
    <p class="title">{{ props.title }}</p>
    <slot></slot>
  </div>
</template>

<style scoped>
.location_text {
  padding: 1rem;
  background-color: var(--vt-c-white-soft);
  margin: 5px 0;
  font-size: 14px;
  color: var(--vt-c-black-mute);
}
.title {
  font-family: "Nanum Myeongjo", serif;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 13px;
  color: var(--vt-c-black-soft);
}
</style>
