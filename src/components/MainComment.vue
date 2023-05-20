<script setup lang="ts">
import Divider from "./atom/Divder.vue";
</script>

<template>
  <div class="main_comment">
    <Divider />
    <p class="poet">
      두 사람이 꽃과 나무처럼 걸어와서<br />
      서로의 모든 것이 되기 위해<br />
      오랜 기다림 끝에 혼례식을 치르는 날<br />
      세상은 더욱 아름다워라<br /><br />
      이해인, {{ "<사랑의 사람들이여>" }}
    </p>
  </div>
  <div class="invitation">
    <div class="date">
      <p>2023. 07. 01</p>
      <p class="date_comment">새로운 시작에 초대합니다.</p>
    </div>
    <p class="comment">
      우리 두 사람, 단단한 사랑과 믿음으로<br />
      서로 평생의 반려자가 되려합니다. <br />
      큰 축복 가득 전해주시는<br />
      그 따뜻함 마음 앞으로의 날들에 보태어<br />
      아끼고 사랑하며 살겠습니다.
    </p>
    <div class="names">
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
  color: var(--vt-c-black-mute);
  font-weight: 400;
}

.invitation {
  padding: 4rem 2rem;
  background-color: var(--vt-c-beige);
}

.invitation .date {
  font-size: 12px;
  color: var(--vt-c-beige-dark);
}

.invitation .date_comment {
  font-size: 18px;
}

.invitation .comment {
  margin: 3rem 0;
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
