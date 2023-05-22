<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
defineProps<{
  title: string;
  isActive: Boolean;
}>();
</script>

<template>
  <div :class="['tab_button', { active: isActive }]">
    <button>{{ title }}</button>
  </div>
</template>

<style scoped>
button {
  font-family: "Nanum Myeongjo", serif;
  font-size: 16px;
  color: rgba(51, 51, 51, 0.8);
  padding-bottom: 10px;
}

.active button {
  color: #333;
  font-weight: bold;
  border-bottom: 2px solid #333;
}
</style>
