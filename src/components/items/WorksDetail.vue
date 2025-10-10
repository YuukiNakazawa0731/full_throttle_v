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
      <div v-if="images.length">
        <img
          :src="images[currentIdx].src"
          :alt="images[currentIdx].alt"
          class="worksImgBox"
          @error="(e) => (e.target.src = blankPlaceholder)"
        />
      </div>
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
const blankPlaceholder = new URL(
  "../../assets/images/works/blank.png",
  import.meta.url
).href;

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
  top: clamp(4rem, 8vh, 15%);
  margin: 0 auto;
  width: min(90%, 110rem);
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 16 / 9;
  background: #00000040;
  border: 0.1rem solid #ffffff22;
  border-radius: 0.8rem;
  overflow: hidden;
}

.worksImgOuter > div {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.worksImgBox {
  display: block;
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.sliderArrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: clamp(4rem, 6vw, 7.2rem);
  line-height: 1;
  background: none;
  border: none;
  color: #ff9100;
  cursor: pointer;
  z-index: 2;
  user-select: none;
  transition: color 0.3s;
}
.sliderArrow.prev {
  left: 1rem;
}
.sliderArrow.next {
  right: 1rem;
}

.sliderDots {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(48%);
  height: 10%;
  padding: 0.4rem 0.8rem;
  border-radius: 1.2rem;
}

.sliderDots span {
  margin: 0 0.5rem;
  cursor: pointer;
  font-size: 2rem;
  color: #ccc;
}
.sliderDots .active {
  color: #ff9100;
}

.worksTitleOuter {
  position: relative;
  margin: clamp(2rem, 3vh, 4rem) auto 0;
  margin-top: 8%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: min(90%, 110rem);
  gap: 0.8rem;
}

.worksTitle {
  position: relative;
  display: inline-block;
  font-size: clamp(1.8rem, 1.2rem + 1.2vw, 2.6rem);
  color: #fff;
  margin: 0;
  vertical-align: middle;
  padding: 0 0.5em 0.2em;
  text-align: center;
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
  width: clamp(1.6rem, 1.2rem + 0.6vw, 2.4rem);
  height: clamp(1.6rem, 1.2rem + 0.6vw, 2.4rem);
  margin-top: 0.4rem;
  vertical-align: middle;
  display: inline-block;
}

.worksTxtOuter {
  position: relative;
  margin: clamp(1.6rem, 3vh, 3.2rem) auto clamp(3.2rem, 6vh, 6rem);
  text-align: center;
  width: min(90%, 96rem);
}

.worksTxt {
  margin: 2% auto 0;
  line-height: 1.6;
  text-align: center;
  color: #fff;
  font-size: clamp(1.4rem, 1rem + 0.6vw, 1.8rem);
}

.useTools {
  margin: 2% auto 0;
  font-size: clamp(1.2rem, 0.8rem + 0.6vw, 1.6rem);
  color: #ff9100;
}

.modalNav {
  margin: 4% auto 0;
  font-size: clamp(1.2rem, 0.8rem + 0.6vw, 1.6rem);
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

/* === Responsive Breakpoints === */
@media (max-width: 1024px) {
  .worksImgOuter {
    aspect-ratio: 16 / 9;
  }
}

@media (max-width: 768px) {
  .worksImgOuter {
    width: 94%;
  }

  .sliderDots {
    bottom: 0.2rem;
  }

  .worksTxt {
    text-align: center;
  }

  .sliderArrow.prev {
    left: 0.4rem;
  }

  .sliderArrow.next {
    right: 0.4rem;
  }

  .worksTitleOuter {
    margin-top: 15rem;
  }
}

@media (max-width: 480px) {
  .worksImgOuter {
    aspect-ratio: 4 / 3;
  }

  .sliderDots {
    bottom: 0.2rem;
  }

  .worksTitleOuter {
    margin-top: 8rem;
  }

  .worksTxt {
    padding: 5%;
    font-size: 1.4rem;
  }

  .modalNav {
    margin-top: 2.4rem;
  }
}
</style>
