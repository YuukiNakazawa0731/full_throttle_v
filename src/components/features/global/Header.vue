<template>
  <header :class="['header', $attrs.class, { 'is-open': isOpen }]">
    <div class="headerInner">
      <div class="headerLogoOuter">
        <a
          href="#titleContainer"
          class="headLogo"
          @click.prevent="$emit('scroll-to-section', 'titleContainer')"
        >
          <img
            src="/src/assets/images/title/title.png"
            class="headLogoImg"
            alt="headLogo"
          />
        </a>
      </div>
      <!-- ハンバーガーボタン -->
      <button
        class="navToggle"
        :aria-expanded="isOpen.toString()"
        aria-controls="mainNav"
        aria-label="メニュー"
        @click="toggleNav"
      >
        <span class="navToggleBar" />
        <span class="navToggleBar" />
        <span class="navToggleBar" />
      </button>
      <div
        id="mainNav"
        class="menuListOuter"
        :class="{ 'menu-open': isOpen }"
        @click="closeAfterNavigate"
      >
        <a
          href="#titleContainer"
          class="menuItem"
          @click.prevent="$emit('scroll-to-section', 'titleContainer')"
          >{{ settings.header.top }}</a
        >
        <a
          href="#aboutContainer"
          class="menuItem"
          @click.prevent="$emit('scroll-to-section', 'aboutContainer')"
          >{{ settings.header.about }}</a
        >
        <a
          href="#profileContainer"
          class="menuItem"
          @click.prevent="$emit('scroll-to-section', 'profileContainer')"
          >{{ settings.header.profile }}</a
        >
        <a
          href="#skillContainer"
          class="menuItem"
          @click.prevent="$emit('scroll-to-section', 'skillContainer')"
          >{{ settings.header.skill }}</a
        >
        <a
          href="#worksContainer"
          class="menuItem"
          @click.prevent="$emit('scroll-to-section', 'worksContainer')"
          >{{ settings.header.works }}</a
        >
      </div>
    </div>
  </header>
</template>

<script setup>
import settings from "@/assets/data/settings.json";
import { ref, onMounted, onBeforeUnmount } from "vue";

const isOpen = ref(false);
const toggleNav = () => {
  isOpen.value = !isOpen.value;
};
const closeAfterNavigate = (e) => {
  if (e.target && e.target.classList.contains("menuItem")) {
    isOpen.value = false;
  }
};

// Escapeキーで閉じる
const onKey = (e) => {
  if (e.key === "Escape") isOpen.value = false;
};
onMounted(() => window.addEventListener("keyup", onKey));
onBeforeUnmount(() => window.removeEventListener("keyup", onKey));
</script>
