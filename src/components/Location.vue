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
  <TextCopy class="location_copy" copy-text="서울 중구 마른내로 71 호텔피제이">
    <slot>
      <p>서울 중구 마른내로 71 호텔피제이</p>
      <p>1층 뮤즈홀</p>
    </slot>
  </TextCopy>
  <div class="btn_locations">
    <LocationButton type="naver" link="https://naver.me/xXrn9Zw0"
      >네이버지도</LocationButton
    >
    <LocationButton type="kakao" link="http://kko.to/s73IZ7sa6t"
      >카카오맵</LocationButton
    >
    <LocationButton type="tmap" link="https://surl.tmobiapi.com/e27e79ed"
      >티맵</LocationButton
    >
  </div>
  <div class="text_locations">
    <LocationText
      v-if="props.type === 'parents-gaun'"
      title="부산 출발 하객 버스"
      emphasis
    >
      <p>
        *인원 체크를 위해, 하객버스 탑승을 원하시는 분은 사전에 꼭 연락 주시길
        바랍니다.
      </p>
      <br />
      <p>탑승 장소 | 부산 북구 상학로 36 이편한세상 금정산APT 정문 GATE 1</p>
      <p>출발 시간 | 2023년 7월 1일 오전 9시 30분</p>
      <p>탑승 대표 | 반동욱 010-5668-9441</p>
    </LocationText>
    <LocationText
      v-if="props.type === 'parents-jaekuk'"
      title="교회 출발 하객 버스"
      emphasis
    >
      <p>탑승 장소 | 풍동교회</p>
      <p>탑승 시간 | 2023년 7월 1일 오후 2시</p>
    </LocationText>
    <LocationText title="자가용">
      <p>
        하객 무료주차는 2시간 제공합니다. <br />호텔 도보 5분 거리의
        ‘을지트윈타워 지하주차장 (B5 ~ B6)’을 이용바랍니다.
      </p>
    </LocationText>
    <LocationText title="지하철">
      <p>충무로역 | 8번 출구에서 도보로 5분 소요</p>
      <p>을지로4가역 | 10번 출구에서 도보로 5분 소요</p>
    </LocationText>
    <LocationText title="버스">
      <p>을지로4가 방면 | 100, 105, 152, 202, 261, 604, 7011</p>
      <p>퇴계로 방면 | 104, 140, 604, 7011</p>
    </LocationText>
    <LocationText title="셔틀버스">
      <p>예식 1시간 전부터 10~15분 간격으로 왕복 운행</p>
      <br />
      <p>충무로역 | 8번 출구에서 앞 탑승</p>
      <p>을지로4가역 | 9번 출구로 나온 후 GS25시(편의점) 골목에서 탑승</p>
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
