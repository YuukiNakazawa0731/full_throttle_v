<template>
  <header :class="['header', $attrs.class]">
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
    <div class="menuListOuter">
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
  </header>
</template>

<script setup>
import settings from "@/assets/data/settings.json";
</script>
