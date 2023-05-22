<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  wide?: boolean;
}>();
</script>

<template>
  <div :class="['item', 'fade-in', { wide }]">
    <div class="header">
      <p class="title">{{ title }}</p>
      <p class="description">{{ description }}</p>
    </div>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  padding: 3rem 1rem;
  opacity: 0.1;
  transition: 0.4s all;
}

.item.wide {
  padding: 3rem 0;
}

.header {
  font-family: "Nanum Myeongjo", serif;
  text-align: center;
  margin-bottom: 1rem;
}
.header .title {
  font-size: 13px;
  color: var(--vt-c-beige-dark);
  line-height: 25px;
}
.header .description {
  color: var(--vt-c-black-soft);
}
</style>
