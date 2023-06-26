<script setup lang="ts">
import TextCopy from "./atom/TextCopy.vue";
import Accounts from "./atom/Accounts.vue";

const props = defineProps({
  type: String,
});
</script>

<template>
  <Accounts v-if="props.type === 'parents-wonseon'">
    <TextCopy class="text_copy" copy-text="20307016012001">
      <slot>
        <p><em>유선배</em></p>
        <p>우리은행 203-070160-12001</p>
      </slot>
    </TextCopy>
    <div class="divider" />
    <TextCopy class="text_copy" copy-text="16701389775">
      <slot>
        <p><em>최영희</em></p>
        <p>농협은행 167-01-389775</p>
      </slot>
    </TextCopy>
  </Accounts>
  <Accounts v-else-if="props.type === 'parents-eunmi'">
    <TextCopy class="text_copy" copy-text="26881004385207">
      <slot>
        <p><em>김인환</em></p>
        <p>하나은행 268-810043-85207</p>
      </slot>
    </TextCopy>
    <div class="divider" />
    <TextCopy class="text_copy" copy-text="44600288116648">
      <slot>
        <p><em>이명숙</em></p>
        <p>국민은행 446002-88-116648</p>
      </slot>
    </TextCopy>
  </Accounts>
  <Accounts v-else>
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
