<script setup lang="ts">
import Divider from "./atom/Divder.vue";

const props = defineProps({
  type: String,
});

let openingComment =
  "내가 잠들기 전에<br />마지막으로 이야기 하고 싶은 사람이<br />너여서 사랑해<br /><br />- 영화 '해리가 샐리를 만났을때' 중 -";

let title = "초대합니다.";
let description =
  "함께 이야기 나눌 때 가장 즐거운 사람.<br/>그 사람과 평생 함께하려고 합니다.<br/>7년 전 처음 만난 그 봄처럼 따뜻한 봄날,<br/>새로운 봄을 맞는 저희를 함께 축복해 주세요.";

// if (props.type === "parents-jongchan") {
//   openingComment =
//     "마음을 같이하여 같은 사랑을 가지고<br/>뜻을 합하여 한마음을 품어<br/><br/><small>빌립보서 2장2절</small>";
//   title = "우리 아들, 결혼합니다";
//   description =
//     "언제나 품에 안길 것 같던 우리 아들이<br/>아름다운 연인을 만나 사랑을 하고<br/>이제 평생의 동반자와 새로운 출발을 합니다.<br/><br/>바쁘시더라도 참석하시어<br/>두 젊은이의 앞날을 사랑과 축복으로<br/> 밝혀주시면 감사하겠습니다.";
// }

// if (props.type === "parents-taeeun") {
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
        <p>2024.03.31 오전 11시30분</p>
        <p>더채플앳 논현</p>
      </div>
      <p class="comment" v-html="description"></p>
    </div>
    <div :class="['names', 'fade-in']">
      <p>이영준 · 임형신의 아들 &nbsp;&nbsp;<em>이종찬</em></p>
      <p>김인환 · 이명숙의 &nbsp;&nbsp;딸&nbsp;&nbsp;&nbsp; <em>김태은</em></p>
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
  background-color: #f2eee6
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
