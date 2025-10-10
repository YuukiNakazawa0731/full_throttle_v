<template>
  <div
    id="skillContainer"
    class="contentsOuter"
    :style="{ backgroundImage: `url(${contentsBack})` }"
  >
    <PostIt>{{ settings.skill.title }}</PostIt>

    <div class="skillList">
      <div
        v-for="(item, idx) in skillItems"
        :key="item.id"
        :id="`skillItem${item.id}`"
        class="skillItem"
        :style="{
          opacity: 1,
          transition: 'opacity 0.8s',
          transitionDelay: idx * 0.3 + 's',
        }"
      >
        <img
          :src="getImgUrl(item.img)"
          class="skillImg"
          :alt="item.alt"
          @error="(e) => (e.target.src = getImgUrl('other.png'))"
        />
        <div class="skillCont">
          <p class="skillLabel" v-html="item.label"></p>
          <p class="skillTxt" v-html="item.text"></p>
        </div>
      </div>
    </div>

    <div class="licenseCont">
      <div class="licenseInner">
        <div class="licenseHead">{{ settings.skill.licenseHead }}</div>
        <div
          class="licenseTxt"
          v-html="settings.skill.licenseTxt.replace(/\n/g, '<br>')"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import PostIt from "../../items/PostIt.vue";
import contentsBack from "@/assets/images/contents/contents_back.png";
import skillsData from "@/assets/data/skills.json";
import settings from "@/assets/data/settings.json";

const skillItems = ref([]);

function getImgUrl(img) {
  return new URL(`../../../assets/images/skill/${img}`, import.meta.url).href;
}

onMounted(async () => {
  skillItems.value = skillsData;
  await nextTick();
  // skillItem順番に表示する
  document.querySelectorAll(".skillItem").forEach((el) => {
    el.style.opacity = 0;
  });
  setTimeout(() => {
    document.querySelectorAll(".skillItem").forEach((el, idx) => {
      setTimeout(() => {
        el.style.opacity = 1;
      }, idx * 50);
    });
  }, 100);
});
</script>
