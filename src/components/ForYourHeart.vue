<script setup lang="ts">
import TextCopy from "./atom/TextCopy.vue";
import Accounts from "./atom/Accounts.vue";

const props = defineProps({
  type: String,
});
</script>

<template>
  <Accounts v-if="props.type !== 'wedding'">
    <TextCopy class="text_copy" copy-text="110251658678">
      <slot>
        <div :class="['texts', type]">
          <p><em>신랑 아버지 이영준</em></p>
          <p class="account">신한은행 110-251-658678</p>
        </div>
      </slot>
    </TextCopy>
    <div class="divider" />
    <TextCopy :class="['text_copy', type]" copy-text="38801410202001">
      <slot>
        <div :class="['texts', type]">
          <p><em>신랑 어머니 임형신</em></p>
          <p class="account">우리은행 388-014102-02-001</p>
        </div>
      </slot>
    </TextCopy>
    <div class="divider" />
    <TextCopy :class="['text_copy', type]" copy-text="110352902626">
      <slot>
        <div :class="['texts', type]">
          <p>신랑 <em>이종찬</em></p>
          <p class="account">신한은행 110-352-902626</p>
        </div>
      </slot>
    </TextCopy>
  </Accounts>
  <Accounts v-if="props.type !== 'wedding'">
    <TextCopy :class="['text_copy', type]" copy-text="26881004385207">
      <slot>
        <div :class="['texts', type]">
          <p><em>신부 아버지 김인환</em></p>
          <p class="account">하나은행 268-810043-85207</p>
        </div>
      </slot>
    </TextCopy>
    <div class="divider" />
    <TextCopy :class="['text_copy', type]" copy-text="44600288116648">
      <slot>
        <div :class="['texts', type]">
          <p><em>신부 어머니 이명숙</em></p>
          <p class="account">국민은행 446002-88-116648</p>
        </div>
      </slot>
    </TextCopy>
    <div class="divider" />
    <TextCopy :class="['text_copy', type]" copy-text="66550204096934">
      <slot>
        <div :class="['texts', type]">
          <p>신부 <em>김태은</em></p>
          <p class="account">국민은행 665502-04-096934</p>
        </div>
      </slot>
    </TextCopy>
  </Accounts>
  <Accounts v-if="props.type === 'wedding'">
    <TextCopy :class="['text_copy', type]" copy-text="110352902626">
      <slot>
        <div :class="['texts', type]">
          <p>신랑 <em>이종찬</em></p>
          <p class="account">신한은행 110-352-902626</p>
        </div>
      </slot>
    </TextCopy>
    <div class="divider" />
    <TextCopy :class="['text_copy', type]" copy-text="66550204096934">
      <slot>
        <div :class="['texts', type]">
          <p>신부 <em>김태은</em></p>
          <p class="account">국민은행 665502-04-096934</p>
        </div>
      </slot>
    </TextCopy>
  </Accounts>
<!--  <Accounts v-else>-->
<!--    <TextCopy :class="['text_copy', type]" copy-text="110352902626">-->
<!--      <slot>-->
<!--        <div :class="['texts', type]">-->
<!--          <p>신랑 <em>이종찬</em></p>-->
<!--          <p class="account">신한은행 110-352-902626</p>-->
<!--        </div>-->
<!--      </slot>-->
<!--    </TextCopy>-->
<!--    <div class="divider" />-->
<!--    <TextCopy :class="['text_copy', type]" copy-text="66550204096934">-->
<!--      <slot>-->
<!--        <div :class="['texts', type]">-->
<!--          <p>신부 <em>김태은</em></p>-->
<!--          <p class="account">국민은행 665502-04-096934</p>-->
<!--        </div>-->
<!--      </slot>-->
<!--    </TextCopy>-->
<!--  </Accounts>-->
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

.texts {
  font-size: 15px;
  font-family: "Nanum Myeongjo", serif;
}

.texts .account {
  font-size: 15px;
}

.texts.default {
  font-size: 13px !important;
}

.texts.default .account {
  font-size: 13px !important;
}
</style>
