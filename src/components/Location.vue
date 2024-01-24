<script setup lang="ts">
import KakaoMap from "./atom/KakaoMap.vue";
import NaverMap from "./atom/NaverMap.vue"
import LocationButton from "./atom/LocationButton.vue";
import LocationText from "./atom/LocationText.vue";
import TextCopy from "./atom/TextCopy.vue";
const props = defineProps({
  type: String,
});
</script>

<template>
<!--  <KakaoMap />-->
  <NaverMap />
  <TextCopy :class="['location_copy', type]" copy-text="서울 강남구 논현로 549">
    <slot>
      <p>서울 강남구 논현로 549, 6층(라포레홀)</p>
      <p>더채플앳 논현</p>
    </slot>
  </TextCopy>
  <div :class="['btn_locations', type]">
    <LocationButton type="naver" link="https://naver.me/x50l2R6q"
      ><span class="text">네이버지도</span></LocationButton
    >
    <LocationButton type="kakao" link="https://kko.to/cPAMMZ-msB"
      ><span class="text">카카오맵</span></LocationButton
    >
    <LocationButton type="tmap" link="https://surl.tmobiapi.com/3bcac752"
      ><span class="text">티맵</span></LocationButton
    >
  </div>
  <div :class="['text_locations', type]">
    <LocationText title="지하철">
      <p class="text">언주역(9호선) 7번 출구에서 도보 2분</p>
      <p class="text">삼성역(2호선) 6번 출구에서 도보 10분</p>
    </LocationText>
    <LocationText title="버스">
      <p class="text">차병원(역삼역 방면) 정류장 하차 시 도보 1분</p>
      <p class="text">간선 | 147, 463</p>
      <p class="text">지선 | 3412, 4211</p>
      <p class="text">직행버스 | 3600, 9600</p>
    </LocationText>
    <LocationText title="주차">
      <p class="text">자차 이용 시, 식장에서 발렛으로 주차를 도와드립니다.</p>
      <p class="text">외부 주차장 발렛의 경우, 식장 앞 셔틀을 이용해 주차된 곳까지 모셔드립니다.</p>
      <p class="text">※ 내부 주차장 1시간 30분 무료, 외부 주차장 2시간 30분 무료</p>
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
