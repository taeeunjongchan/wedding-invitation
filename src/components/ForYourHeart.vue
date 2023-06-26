<script setup lang="ts">
import TextCopy from "./atom/TextCopy.vue";
import Accounts from "./atom/Accounts.vue";
</script>

<template>
  <Accounts>
    <TextCopy v-if="false" class="text_copy" copy-text="1002449222601">
      <slot>
        <p>아버지 <em>조현기</em></p>
        <p>우리은행 1002-449-222601</p>
      </slot>
    </TextCopy>
    <div v-if="false" class="divider" />
    <TextCopy v-if="false" class="text_copy" copy-text="110385135659">
      <slot>
        <p>어머니 <em>강희경</em></p>
        <p>신한은행 110-385-135-659</p>
      </slot>
    </TextCopy>
    <div v-if="false" class="divider" />
    <TextCopy class="text_copy" copy-text="61302302101011">
      <slot>
        <p>신랑 <em>유원선</em></p>
        <p>기업은행 613-023021-01011</p>
      </slot>
    </TextCopy>
    <div class="divider" />
    <TextCopy class="text_copy" copy-text="110510162323">
      <slot>
        <p>신부 <em>김은미</em></p>
        <p>신한은행 110-510-162323</p>
      </slot>
    </TextCopy>
  </Accounts>
</template>

<style scoped>
.divider {
  width: 100%;
  height: 1px;
  background-color: #ebebeb;
  margin-top: 10px;
}

.text_copy {
  font-size: 13px;
  padding: 10px 5px 0;
}
.text_copy em {
  font-weight: 500;
  font-style: normal;
}
</style>
