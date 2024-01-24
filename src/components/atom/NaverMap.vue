<template>
  <div id="map"></div>
</template>

<script>

// https://jisoo-log.tistory.com/12

export default {
  mounted() {
    if (window.naver && window.naver.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      script.onload = () => naver.maps.load(this.initMap);
      script.src =
        "//openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=u3wsaz21at";
      document.head.appendChild(script);
      setTimeout(() => {
        this.initMap();
      }, 1000);
    }
  },
  methods: {
    initMap() {
      var mapContainer = document.getElementById("map"), // 지도를 표시할 div
        mapOption = {
          center: new naver.maps.LatLng(37.50395700109418, 127.03513809962388), // 지도의 중심좌표
          zoom: 16, //지도의 초기 줌 레벨
          minZoom: 8, //지도의 최소 줌 레벨
          zoomControl: true, //줌 컨트롤의 표시 여부
          zoomControlOptions: { //줌 컨트롤의 옵션
            position: naver.maps.Position.TOP_RIGHT
          }
        };

      // 지도를 생성합니다
      var map = new naver.maps.Map(mapContainer, mapOption);


      // 마커를 생성합니다
      var marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(37.5050847, 127.0343736),
        map: map
      });

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map);
      map.setCenter(mapOption.center);
    },
  },
};
</script>

<style scoped>
#map {
  width: 100%;
  min-height: 500px;
  max-height: 500px;
  margin: 0 auto;
}

#map::after {
  content: "";
  display: block;
  padding-bottom: 100%;
}
</style>
