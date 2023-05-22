<script setup lang="ts">
const props = defineProps({
  title: String,
});
</script>
<template>
  <div class="accounts">
    <p class="title">{{ props.title }}</p>
    <slot></slot>
  </div>
</template>
<style scoped>
.accounts {
  margin: 40px 0.5rem;
}

.accounts .title {
  font-weight: bold;
}
</style>
