<template>
  <div class="woorksOverLay" v-show="showModal" @click="$emit('close-modal')">
    <!-- 画像スライダー -->
    <div class="worksImgOuter" @click.stop>
      <button
        v-if="total > 1"
        class="sliderArrow prev"
        @click.stop="prev"
        aria-label="前へ"
      >
        ‹
      </button>
      <a
        v-if="images.length"
        :href="images[currentIdx].href || '#'"
        target="_blank"
      >
        <img
          :src="images[currentIdx].src"
          :alt="images[currentIdx].alt"
          class="worksImgBox"
        />
      </a>
      <button
        v-if="total > 1"
        class="sliderArrow next"
        @click.stop="next"
        aria-label="次へ"
      >
        ›
      </button>
      <div v-if="total > 1" class="sliderDots">
        <span
          v-for="(img, idx) in images"
          :key="idx"
          :class="{ active: idx === currentIdx }"
          @click.stop="currentIdx = idx"
          >●</span
        >
      </div>
    </div>
    <div class="worksTitleOuter">
      <a :href="detail.title.href || '#'" class="worksTitle" target="_blank">
        {{ detail.title.text }}
      </a>
      <img
        src="../../assets/images/works/blank.png"
        class="blankImg"
        alt="blank"
      />
    </div>
    <div class="worksTxtOuter">
      <div class="worksTxt" v-html="detail.text"></div>
      <p class="useTools">{{ detail.tools }}</p>
      <p class="modalNav">{{ settings.modal.modalNav }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, defineEmits, watch } from "vue";
import settings from "@/assets/data/settings.json";

const images = computed(() => props.detail.images || []);
const total = computed(() => images.value.length);

const props = defineProps({
  showModal: Boolean,
  detail: Object,
});

const emit = defineEmits(["close-modal"]);

watch(
  () => props.showModal,
  (val) => {
    if (val) currentIdx.value = 0;
  }
);

const currentIdx = ref(0);

function prev() {
  if (total.value === 0) return;
  currentIdx.value = (currentIdx.value - 1 + total.value) % total.value;
}

function next() {
  if (total.value === 0) return;
  currentIdx.value = (currentIdx.value + 1) % total.value;
}
</script>

<style scoped>
.woorksOverLay {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #000000ec;
  cursor: pointer;
  opacity: 0;
  transition: opacity 1.2s cubic-bezier(0.8, 0, 0.2, 1);
  pointer-events: none;
}
.woorksOverLay[style*="display: none"] {
  opacity: 0 !important;
  pointer-events: none !important;
}
.woorksOverLay:not([style*="display: none"]) {
  opacity: 1;
  pointer-events: auto;
}

/* スライダー用スタイル */
.worksImgOuter {
  position: relative;
  top: 15%;
  left: 15%;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.worksImgBox {
  display: block;
  margin: auto;
  width: 1100px;
  height: 500px;
  object-fit: contain;
}

.sliderArrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 10rem;
  background: none;
  border: none;
  color: #ff9100;
  cursor: pointer;
  z-index: 2;
  user-select: none;
}
.sliderArrow.prev {
  left: -5%;
}
.sliderArrow.next {
  right: -5%;
}

.sliderDots {
  position: absolute;
  bottom: -7%;
  left: 50%;
  transform: translateX(-50%);
}
.sliderDots span {
  cursor: pointer;
  font-size: 2rem;
  color: #ccc;
  margin: 0 0.5rem;
}
.sliderDots .active {
  color: #ff9100;
}

.worksTitleOuter {
  position: relative;
  top: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 10px;
}

.worksTitle {
  position: relative;
  display: inline-block;
  font-size: 2.5rem;
  color: #fff;
  margin: 0;
  vertical-align: middle;
  padding: 0 0.5em;
}
.worksTitle:before {
  position: absolute;
  content: "";
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom: 0.2rem solid #ffffff;
}

.blankImg {
  width: 20px;
  height: 20px;
  margin-top: 10px;
  vertical-align: middle;
  display: inline-block;
}

.worksTxtOuter {
  position: relative;
  top: 20%;
  margin: 0 auto;
  text-align: center;
}

.worksTxt {
  margin: 2% auto 0;
  line-height: 1.6;
  text-align: center;
  color: #fff;
}

.useTools {
  margin: 2% auto 0;
  font-size: 1.4rem;
  color: #ff9100;
}

.modalNav {
  margin: 4% auto;
  font-size: 1.4rem;
  color: #fff;
  animation: blink 2s linear infinite;
}
@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
