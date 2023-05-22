<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Tab from "./atom/Tab.vue";
import Tabs from "./atom/Tabs.vue";
import TabContent from "./atom/TabContent.vue";
import { Fade } from "@egjs/flicking-plugins";
import { ref } from "vue";

const activeIndex = ref(0);
const flickingContainer = ref(null);

function changeTab(index: number) {
  activeIndex.value = index;
  const flicking: any = flickingContainer.value;
  flicking?.moveTo(index, 500);
}

const titles = ["장소 안내", "식사 안내", "주차 안내"];
const contents = [
  "PJ 호텔 1층에 위치한 소규모 단독홀입니다.<br/>1층  뮤즈홀 전용 출입구 또는 호텔 정문으로 입장 가능합니다. <br/><br/>일찍 도착하신 분은 호텔 2층 카페에서 제공하는 무료 커피를 이용하실 수 있습니다.<br/>",
  "호텔 3층 뷔페 공간을 전용으로 사용하고, 예식 30분 전 3시 30분 부터 식사가 가능합니다.<br/><br/>오픈키친·샐러드 코너·한식코너·양식코너·중식코너·스시·롤코너·디저트코너 등 200여가지의 뷔페 메뉴가 준비되어있으니 부족하지 않게 식사를 즐겨주세요. ",
  "하객 무료주차는 2시간 제공합니다.<br/> 호텔 도보 5분 거리의 ‘을지트윈타워 지하주차장 (B5 ~ B6)’을 이용바랍니다.",
];
const plugins = [new Fade()];

function onChanged({ index }: { index: number }) {
  activeIndex.value = index;
}
</script>

<template>
  <div class="tabs"></div>
  <Tabs>
    <template #button>
      <div class="tab_buttons">
        <Tab
          v-for="(title, index) in titles"
          :key="index"
          :class="['tab_button']"
          :title="title"
          :isActive="index === activeIndex"
          @click="changeTab(index)"
        />
      </div>
    </template>
    <template #content>
      <Flicking-Items
        ref="flickingContainer"
        :plugins="plugins"
        @changed="onChanged"
      >
        <TabContent
          v-for="(content, index) in contents"
          :key="`content_${index}`"
          :img="`info${index + 1}.png`"
          :content="content"
        />
      </Flicking-Items>
    </template>
  </Tabs>
</template>

<style scoped>
.tab_buttons {
  display: flex;
  justify-content: space-between;
  margin: 40px 0 10px;
  border-bottom: 1px solid #ebebeb;
  padding: 0 1rem;
}
</style>
