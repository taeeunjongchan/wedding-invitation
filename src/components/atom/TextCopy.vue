<script setup lang="ts">
import icon from "@/assets/image/icon_copy.png";

const props = defineProps<{
  copyText: string;
}>();

async function onClick() {
  try {
    await navigator.clipboard.writeText(props.copyText);
    alert("복사되었습니다.");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
}
</script>
<template>
  <div class="text_copy">
    <div class="text_wrap">
      <slot></slot>
    </div>
    <div class="btn_wrap">
      <button class="btn_copy" @click="onClick">
        <img class="icon_copy" :src="icon" alt="icon" />
        <span>복사</span>
      </button>
    </div>
  </div>
</template>
<style scoped>
.text_copy {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  padding: 1rem;
}
.btn_wrap {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 2px;
}
.btn_copy {
  display: flex;
  color: var(--vt-c-black-mute);
  background-color: var(--vt-c-beige);
  color: #282828c9;
  font-weight: bold;
  padding: 5px 7px;
  border-radius: 7px;
  font-size: 15px;
  min-width: 64px;
}
.icon_copy {
  width: 16px;
  margin-right: 2px;
  margin-top: 1px;
}

.default .btn_copy {
  font-size: 13px;
}
.default .icon_copy {
  margin-top: 0;
}
</style>
