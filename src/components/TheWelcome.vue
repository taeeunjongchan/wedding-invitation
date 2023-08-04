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
  <MainVisual :type="props.type" />

  <MainComment :type="props.type" />

  <CardItem
    v-if="type === 'default'"
    element-ref="card0"
    title="Gallery"
    description="제주도 촬영"
    :wide="true"
  >
    <Albums :type="props.type" />
    <iframe width="560" height="315" src="https://www.youtube.com/embed/NFadV6-FVjM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </CardItem>

  <!-- <CardItem element-ref="card1" title="Information" description="예식 안내"
    ><Information />
  </CardItem> -->

  <CardItem element-ref="card3" title="Location" description="오시는 길">
    <Location :type="props.type" />
  </CardItem>

  <CardItem
    element-ref="card2"
    title="For Your Heart"
    description="마음 전하실 곳"
  >
    <ForYourHeart :type="props.type" />
  </CardItem>

  <CardItem
    v-if="type !== 'default'"
    element-ref="card0"
    title="Gallery"
    description="제주도 촬영"
    :wide="true"
    :style="{paddingBottom: 0}"
  >
    <Albums :type="props.type" />
    <iframe width="560" height="315" src="https://www.youtube.com/embed/NFadV6-FVjM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </CardItem>

  <Footer />
</template>
<style scoped>
iframe {
    display: block;       
    border: none;        
    height: 90vh;        
    width: 100vw;
    padding-top: 20px;
}

@media (min-width: 580px) {
  iframe {
    height: 100vh;        
    width: 100%;
  }
}

</style>
