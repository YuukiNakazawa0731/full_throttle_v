<template>
  <div class="fullThrottleApp" :class="{ fadein: isMainPage }">
    <Header
      :class="{ headerSlidein: isMainPage }"
      @scroll-to-section="scrollToSection"
    />
    <main>
      <returnTopButton
        :show="showReturnToTop"
        v-if="isMainPage"
        @scroll-to-section="scrollToSection"
      />
      <TitlePage :isMainPage="isMainPage" />
      <div
        class="contentsContainer"
        :style="{
          backgroundImage: `url(${woodGrain})`,
          backgroundSize: '100%',
        }"
      >
        <div class="windowShadowL"></div>
        <div class="windowShadowR"></div>
        <!-- 各コンテンツ -->
        <About />
        <Profile />
        <Skill />
        <Works />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Header from "../global/Header.vue";
import TitlePage from "../pages/TitlePage.vue";
import About from "../pages/About.vue";
import Profile from "../pages/Profile.vue";
import Skill from "../pages/Skill.vue";
import Works from "../pages/Works.vue";
import Footer from "../global/Footer.vue";

import returnTopButton from "@/components/items/returnTopButton.vue";
import woodGrain from "@/assets/images/contents/wood_grain.png";

const showReturnToTop = ref(false);
const isMainPage = ref(false);

const handleScroll = () => {
  showReturnToTop.value = window.scrollY > 300;
};

const scrollToSection = (id) => {
  let element = document.getElementById(id);
  if (!element) {
    element = document.querySelector(`.${id}`);
  }
  if (element) {
    const y = element.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

onMounted(() => {
  setTimeout(() => {
    isMainPage.value = true;
  }, 0);

  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.fullThrottleApp {
  opacity: 0;
  transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.fullThrottleApp.fadein {
  opacity: 1;
}
</style>
