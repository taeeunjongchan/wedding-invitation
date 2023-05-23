<script setup lang="ts">
import Divider from "./atom/Divder.vue";

const props = defineProps({
  type: String,
});

let openingComment =
  "두 사람이 꽃과 나무처럼 걸어와서<br />서로의 모든 것이 되기 위해<br />오랜 기다림 끝에 혼례식을 치르는 날<br />세상은 더욱 아름다워라<br /><br />이해인, <사랑의 사람들이여>";
let title = "초대합니다.";
let description =
  "우리 두 사람, 단단한 사랑과 믿음으로<br />서로 평생의 반려자가 되려합니다. <br />큰 축복 가득 전해주시는<br />그 따뜻한 마음 앞으로의 날들에 보태어<br />아끼고 사랑하며 살겠습니다.";

if (props.type === "parents-jaekuk") {
  openingComment =
    "마음을 같이하여 같은 사랑을 가지고<br/>뜻을 합하여 한마음을 품어<br/><br/><small>빌립보서 2장2절</small>";
  title = "우리 아들, 결혼합니다";
  description =
    "언제나 품에 안길 것 같던 우리 아들이<br/>아름다운 연인을 만나 사랑을 하고<br/>이제 평생의 동반자와 새로운 출발을 합니다.<br/><br/>바쁘시더라도 참석하시어<br/>두 젊은이의 앞날을 사랑과 축복으로<br/> 밝혀주시면 감사하겠습니다.";
}

if (props.type === "parents-gaun") {
  title = "우리 딸, 결혼합니다.";
  description =
    "언제나 품에 안길 것 같던 우리 딸이<br/>듬직한 연인을 만나 사랑을 하고<br/>이제 평생의 동반자와 새로운 출발을 합니다.<br/><br/>바쁘시더라도 참석하시어<br/>두 젊은이의 앞날을 사랑과 축복으로<br/> 밝혀주시면 감사하겠습니다.";
}
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
        <p>2023. 07. 01 오후 4시</p>
        <p>PJ호텔 뮤즈홀</p>
      </div>
      <p class="comment" v-html="description"></p>
    </div>
    <div :class="['names', 'fade-in']">
      <p>조현기 · 강희경의 아들 &nbsp;<em>재국</em></p>
      <p>반송호 · 김미순의 &nbsp;&nbsp;딸&nbsp;&nbsp;&nbsp; <em>가운</em></p>
    </div>
  </div>
</template>

<style scoped>
.main_comment,
.invitation {
  padding: 2rem;
  position: relative;
  font-family: "Nanum Myeongjo", serif;
  text-align: center;
  line-height: 2rem;
  color: var(--vt-c-black-soft);
  font-weight: 400;
  text-align: left;
}

.invitation {
  padding: 4rem 2rem;
  background-color: var(--vt-c-beige);
}

.main_comment.default,
.invitation.default {
  text-align: center;
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
  font-family: "Noto Sans KR", sans-serif;
  color: var(--vt-c-beige-dark);
  font-weight: 500;
  line-height: 25px;
}

.names em {
  font-style: normal;
  font-size: 18px;
  color: var(--vt-c-black-mute);
}
</style>
