<script setup lang="ts">
import CardItem from "./CardItem.vue";
import Information from "./Informations.vue";
import MainVisual from "./MainVisual.vue";
import MainComment from "./MainComment.vue";
import Location from "./Location.vue";
import Footer from "./Footer.vue";
import ForYourHeart from "./ForYourHeart.vue";
import { onMounted, onUnmounted } from "vue";
import { isElemVisible } from "../utils/common";
import { defineAsyncComponent } from "vue";

const Albums = defineAsyncComponent(() => import("./Albums.vue"));

const props = defineProps({
  type: String,
});

var fadeInElements: any[] = [];

onMounted(() => {
  fadeInElements = Array.from(document.getElementsByClassName("fade-in"));
  document.addEventListener("scroll", handleScroll);
  handleScroll();
});

onUnmounted(() => {
  document.removeEventListener("scroll", handleScroll);
});

function handleScroll() {
  for (var i = 0; i < fadeInElements.length; i++) {
    var elem = fadeInElements[i];
    if (isElemVisible(elem, window.innerHeight)) {
      elem.style.opacity = 1;
      fadeInElements.splice(i, 1); // only allow it to run once
    } else {
      elem.style.opacity = 0.1;
    }
  }
}
</script>

<template>
  <MainVisual />

  <MainComment :type="props.type" />

  <CardItem
    element-ref="card0"
    title="Gallery"
    description="기쁜 우리 젊은 날"
    :wide="true"
  >
    <Albums />
  </CardItem>

  <CardItem element-ref="card1" title="Information" description="예식 안내"
    ><Information />
  </CardItem>

  <CardItem
    element-ref="card2"
    title="For Your Heart"
    description="마음 전하실 곳"
  >
    <ForYourHeart />
  </CardItem>

  <CardItem element-ref="card3" title="Location" description="오시는 길">
    <Location :type="props.type" />
  </CardItem>

  <Footer />
</template>
<style scoped></style>
