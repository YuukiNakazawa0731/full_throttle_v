<template>
  <div
    id="worksContainer"
    class="contentsOuter"
    :style="{ backgroundImage: `url(${contentsBack})` }"
  >
    <PostIt>{{ settings.works.title }}</PostIt>

    <div class="worksList">
      <div class="worksItem" v-for="(item, idx) in works" :key="idx">
        <a
          href="javascript:void(0)"
          class="worksLink"
          @click.prevent="openDetail(idx)"
        >
          <img
            v-if="item.detail.images && item.detail.images.length"
            :src="item.detail.images[0].src"
            class="worksImg"
            :alt="item.detail.images[0].alt"
            :class="{
              'works-popup': hoverIdx === idx,
              'works-popdown': hoverIdx !== idx && lastHoverIdx === idx,
            }"
            @mouseenter="hoverIdx = idx"
            @mouseleave="hoverIdx = null"
            @animationend="onAnimationEnd(idx)"
          />
          <img v-else :src="noImage" class="worksImg" alt="no image" />
        </a>
        <a href="javascript:void(0)" class="worksTitleLink">
          <p class="worksHeading">{{ item.heading }}</p>
          <p class="worksTitleChild">{{ item.child }}</p>
        </a>
      </div>
    </div>
    <WorksDetail
      v-if="showModal"
      :showModal="showModal"
      :detail="selectedWork"
      @close-modal="closeDetail"
    />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import PostIt from "../../items/PostIt.vue";
import contentsBack from "@/assets/images/contents/contents_back.png";
import worksData from "@/assets/data/works.json";
import WorksDetail from "../../items/WorksDetail.vue";
import settings from "@/assets/data/settings.json";

const hoverIdx = ref(null);
const lastHoverIdx = ref(null);
const showModal = ref(false);
const selectedWork = ref(null);

const noImage = new URL(
  "../../../assets/images/works/noimage.png",
  import.meta.url
).href;

watch(hoverIdx, (newVal, oldVal) => {
  if (oldVal !== null) lastHoverIdx.value = oldVal;
});

const works = ref(
  worksData.map((item) => {
    const detail = item.detail || {};
    const images = (detail.images || []).map((imgObj) => ({
      ...imgObj,
      src: new URL(
        `../../../assets/images/works/${imgObj.src}`,
        import.meta.url
      ).href,
    }));
    const title = detail.title
      ? {
          ...detail.title,
          blankImg: detail.title.blankImg
            ? new URL(
                `../../../assets/images/${detail.title.blankImg}`,
                import.meta.url
              ).href
            : "",
        }
      : {};
    return {
      ...item,
      detail: {
        ...detail,
        images,
        title,
      },
    };
  })
);

function onAnimationEnd(idx) {
  if (lastHoverIdx.value === idx) lastHoverIdx.value = null;
}

function openDetail(idx) {
  selectedWork.value = works.value[idx].detail;
  showModal.value = true;
}

function closeDetail() {
  showModal.value = false;
  selectedWork.value = null;
}
</script>
