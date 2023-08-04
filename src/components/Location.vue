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
  <TextCopy :class="['location_copy', type]" copy-text="서울특별시 서초구 반포대로 235">
    <slot>
      <p>서울특별시 서초구 반포대로 235, LL층</p>
      <p>아펠가모 반포</p>
    </slot>
  </TextCopy>
  <div :class="['btn_locations', type]">
    <LocationButton type="naver" link="https://naver.me/xM2E86s2"
      ><span class="text">네이버지도</span></LocationButton
    >
    <LocationButton type="kakao" link="http://kko.to/hdV-T0HnHP"
      ><span class="text">카카오맵</span></LocationButton
    >
    <LocationButton type="tmap" link="https://surl.tmobiapi.com/bb86b4c4"
      ><span class="text">티맵</span></LocationButton
    >
  </div>
  <div :class="['text_locations', type]">
    <LocationText title="지하철">
      <p class="text">고속터미널역 3·5·7호선 5번 출구</p>
      <p class="text">서래공원 방면 신호등 건넌 후 첫번째 건물</p>
    </LocationText>
    <LocationText title="버스">
      <p class="text">간선 | 405, 740</p>
      <p class="text">지선 | 5413</p>
      <p class="text">서울 지방 조달청역 하차</p>
    </LocationText>
    <LocationText title="주차">
      <p class="text">반포효성빌딩 지하주차장</p>
      <p class="text">이용 시 주차 2시간 제공</p>
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

.location_copy, .text_locations .text {
  font-family: "Nanum Myeongjo", serif;
  font-size: 16px;
}

.btn_locations .text {
  font-size: 13px;
}

.location_copy.default, .btn_locations.default .text, .text_locations.default .text {
  font-family: "Nanum Myeongjo", serif;
  font-size: 13px;
}
</style>
