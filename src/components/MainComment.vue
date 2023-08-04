<script setup lang="ts">
import Divider from "./atom/Divder.vue";

const props = defineProps({
  type: String,
});

let openingComment =
  "깊어져요, 우리,<br/>시간과 함께 낡아지지 말고.<br/>우리의 사랑도 그렇게 될 수 있도록 기억하기로 해요.<br/>오랜 시간을 함께한다는 것의 가치를. 그 힘을.<br /><br />정현주, <그래도 사랑>";
let title = "초대합니다.";
let description =
  "다가오는 9월,<br/>다른 공간, 다른 시간을 걷던 두 사람이<br/>서로를 마주한 이후<br/>같은 공간, 같은 시간을 꿈꾸며 걷게 되었습니다.<br/>부디 귀한 발걸음 하시어<br/>앞날을 축복해 주시면 더없이 감사하겠습니다.";

// if (props.type === "parents-wonseon") {
//   openingComment =
//     "마음을 같이하여 같은 사랑을 가지고<br/>뜻을 합하여 한마음을 품어<br/><br/><small>빌립보서 2장2절</small>";
//   title = "우리 아들, 결혼합니다";
//   description =
//     "언제나 품에 안길 것 같던 우리 아들이<br/>아름다운 연인을 만나 사랑을 하고<br/>이제 평생의 동반자와 새로운 출발을 합니다.<br/><br/>바쁘시더라도 참석하시어<br/>두 젊은이의 앞날을 사랑과 축복으로<br/> 밝혀주시면 감사하겠습니다.";
// }

// if (props.type === "parents-eunmi") {
//   title = "우리 딸, 결혼합니다.";
//   description =
//     "언제나 품에 안길 것 같던 우리 딸이<br/>듬직한 연인을 만나 사랑을 하고<br/>이제 평생의 동반자와 새로운 출발을 합니다.<br/><br/>바쁘시더라도 참석하시어<br/>두 젊은이의 앞날을 사랑과 축복으로<br/> 밝혀주시면 감사하겠습니다.";
// }
</script>

<template>
  <div :class="['main_comment', type]">
    <Divider />
    <p :class="['poet', 'fade-in']" v-html="openingComment"></p>
  </div>
  <div :class="['invitation', type]">
    <div class="fade-in">
      <div class="date">
        <p class="date_comment" v-html="title"></p>
        <p>2023.09.03 오후 5시</p>
        <p>아펠가모 반포</p>
      </div>
      <p class="comment" v-html="description"></p>
    </div>
    <div :class="['names', 'fade-in']">
      <p>유선배 · 최영희의 아들 &nbsp;&nbsp;<em>유원선</em></p>
      <p>김인환 · 이명숙의 &nbsp;&nbsp;딸&nbsp;&nbsp;&nbsp; <em>김은미</em></p>
    </div>
  </div>
</template>

<style scoped>
.main_comment,
.invitation {
  padding: 1.5rem 1rem;
  position: relative;
  font-family: "Nanum Myeongjo", serif;
  text-align: center;
  line-height: 2rem;
  color: var(--vt-c-black-soft);
  font-weight: 400;
  text-align: center;
  letter-spacing: -0.5px;
}

.invitation {
  padding: 4rem 2rem;
  background-color: var(--vt-c-beige);
}

.invitation .date {
  font-size: 14px;
  color: var(--vt-c-beige-dark);
}

.invitation .date_comment {
  font-size: 18px;
}

.invitation .comment {
  margin: 2rem 0 3rem;
}

.names p {
  font-family: "Nanum Myeongjo", serif;
  color: var(--vt-c-beige-dark);
  font-weight: 500;
  line-height: 25px;
}

.names em {
  font-style: normal;
  font-size: 15px;
  color: var(--vt-c-black-mute);
}
</style>
