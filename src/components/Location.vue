<script setup lang="ts">
import KakaoMap from "./atom/KakaoMap.vue";
import LocationButton from "./atom/LocationButton.vue";
import LocationText from "./atom/LocationText.vue";
import TextCopy from "./atom/TextCopy.vue";
const props = defineProps({
  type: String,
});
</script>

<template>
  <KakaoMap />
  <TextCopy class="location_copy" copy-text="서울특별시 서초구 반포대로 235">
    <slot>
      <p>서울특별시 서초구 반포대로 235, LL층</p>
      <p>아펠가모 반포</p>
    </slot>
  </TextCopy>
  <div class="btn_locations">
    <LocationButton type="naver" link="https://naver.me/xM2E86s2"
      >네이버지도</LocationButton
    >
    <LocationButton type="kakao" link="http://kko.to/hdV-T0HnHP"
      >카카오맵</LocationButton
    >
    <LocationButton type="tmap" link="https://surl.tmobiapi.com/bb86b4c4"
      >티맵</LocationButton
    >
  </div>
  <div class="text_locations">
    <LocationText title="지하철">
      <p>고속터미널역 3·5·7호선 5번 출구</p>
      <p>서래공원 방면 신호등 건넌 후 첫번째 건물</p>
    </LocationText>
    <LocationText title="버스">
      <p>간선 | 405, 740</p>
      <p>지선 | 5413</p>
      <p>서울 지방 조달청역 하차</p>
    </LocationText>
    <LocationText title="주차">
      <p>반포효성빌딩 지하주차장</p>
      <p>이용 시 주차 2시간 제공</p>
    </LocationText>
  </div>
</template>

<style>
.btn_locations {
  display: flex;
  gap: 1px;
  margin: 0 auto;
}
.text_locations {
  margin-top: 1rem;
}
</style>
