<script setup lang="ts">
const props = defineProps({
  type: String,
  link: String,
});

function getImageUrl() {
  // This path must be correct for your file
  return new URL(
    `/src/assets/image/icon_map_${props.type}.png`,
    import.meta.url
  ).toString();
}
</script>

<template>
  <a :href="props.link" class="btn_location" onclick="onClick()">
    <img class="logo" :src="getImageUrl()" />
    <span><slot></slot></span>
  </a>
</template>

<style scoped>
.logo {
  width: 16px;
  margin-right: 4px;
}
.btn_location {
  display: flex;
  font-size: 12px;
  line-height: 16px;
  flex-grow: 1;
  flex-basis: min-content;
  justify-content: center;
  background-color: var(--vt-c-beige-soft);
  padding: 10px;
  color: var(--vt-c-black-soft);
}
</style>
