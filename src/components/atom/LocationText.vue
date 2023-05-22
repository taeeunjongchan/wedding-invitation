<script setup lang="ts">
const props = defineProps({
  title: String,
  emphasis: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div :class="['location_text', { emphasis }]">
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

.location_text.emphasis {
  background-color: var(--vt-c-beige);
}
.title {
  font-family: "Nanum Myeongjo", serif;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 13px;
  color: var(--vt-c-black-soft);
}
</style>
