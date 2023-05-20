<script setup lang="ts">
import TextCopy from "./atom/TextCopy.vue";
import Accounts from "./atom/Accounts.vue";
</script>

<template>
  <Accounts title="신랑측 계좌번호">
    <TextCopy class="text_copy" copy-text="110445811298">
      <slot>
        <p>아버지 <em>조현기</em></p>
        <p>신한은행 110-445-811-287</p>
      </slot>
    </TextCopy>
    <div class="divider" />
    <TextCopy class="text_copy" copy-text="110445811298">
      <slot>
        <p>신랑 <em>조재국</em></p>
        <p>신한은행 110-445-811-287</p>
      </slot>
    </TextCopy>
  </Accounts>
  <Accounts title="신부측 계좌번호">
    <TextCopy class="text_copy" copy-text="110445811298">
      <slot>
        <p>아버지 <em>반송호</em></p>
        <p>신한은행 110-445-811-287</p>
      </slot>
    </TextCopy>
    <div class="divider" />
    <TextCopy class="text_copy" copy-text="110445811298">
      <slot>
        <p>신부 <em>반가운</em></p>
        <p>신한은행 110-445-811-287</p>
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
