<template>
  <div
    class="loadingContainar"
    :class="{ noLoad: isNoLoad }"
    v-show="!isFadeOut"
  >
    <div class="loadingTxtOuter">
      <p class="loadingTxt">{{ typedText }}</p>
    </div>
    <span class="centerLine" :class="{ lineThrough: isLineThrough }"></span>
    <div
      class="loadWrapper coverUp"
      :class="{ coverAnime: isCoverAnime }"
    ></div>
    <div
      class="loadWrapper coverDown"
      :class="{ coverAnime: isCoverAnime }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineEmits } from "vue";
import settings from "@/assets/data/settings.json";

const typedText = ref("");
const textToType = settings.loading.loadingText;
const isNoLoad = ref(false);
const isLineThrough = ref(false);
const isCoverAnime = ref(false);
const isFadeOut = ref(false);

const emits = defineEmits(["loading-finished"]);

const typeLoadingText = () => {
  let charIndex = 0;
  const timer = setInterval(() => {
    if (charIndex < textToType.length) {
      typedText.value += textToType.charAt(charIndex);
      charIndex++;
    } else {
      clearInterval(timer);
      isLineThrough.value = true;
      isCoverAnime.value = true;
      setTimeout(() => {
        isFadeOut.value = true;
        emits("loading-finished");
      }, 2100);
    }
  }, 100);
};

onMounted(() => {
  typeLoadingText();
});
</script>

<style scoped>
@import "@/styles/global/Loading.css";
</style>
