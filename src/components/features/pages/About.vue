<template>
  <div
    id="aboutContainer"
    class="contentsOuter"
    :style="{ backgroundImage: `url(${contentsBack})` }"
  >
    <PostIt>{{ settings.about.title }}</PostIt>

    <div class="aboutPhotoOuter">
      <img :src="gFace" class="aboutPhoto" alt="ganpura" />
    </div>
    <p class="aboutName">{{ settings.about.aboutName }}</p>
    <p class="nameRuby">{{ settings.about.nameRuby }}</p>
    <div class="aboutTxt" v-html="settings.about.aboutTxt.replace(/\n/g, '<br>')">
    </div>
  </div>
</template>

<script setup>
import PostIt from "../../items/PostIt.vue";
import gFace from "@/assets/images/about/gface.jpg";
import settings from "@/assets/data/settings.json";
import contentsBack from "@/assets/images/contents/contents_back.png";
</script>
