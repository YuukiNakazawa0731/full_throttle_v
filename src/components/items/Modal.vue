<template>
  <div class="overLay" v-show="showModal" @click="$emit('close-modal')">
    <div class="infoContainer" @click.stop>
      <div
        class="infoTxt"
        v-html="settings.modal.infoTxt.replace(/\n/g, '<br>')"
      ></div>
      <img
        src="../../assets/images/contents/ojigi_neko.png"
        class="neko"
        alt="neko"
      />
    </div>
    <nav class="modalNav">{{ settings.modal.modalNav }}</nav>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import settings from "@/assets/data/settings.json";

defineProps({
  showModal: Boolean,
});

defineEmits(["close-modal"]);
</script>

<style scoped>
.overLay {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #000000cc;
  cursor: pointer;
}

.infoContainer {
  position: relative;
  margin: clamp(4rem, 8vh, 12rem) auto clamp(3.2rem, 6vh, 8rem);
  padding: clamp(2rem, 4vh, 4rem) clamp(1.6rem, 4vw, 4.8rem)
    clamp(3.2rem, 6vh, 4.8rem);
  width: min(64ch, 70%);
  max-width: 860px;
  text-align: left;
  border: 0.3rem outset #ff8800;
  border-radius: 0.8rem;
  background-color: #ffffff;
  box-shadow: 0 1.2rem 2.4rem -0.4rem #00000070;
  cursor: default;
}

.infoTxt {
  font-size: clamp(1.5rem, 1.1rem + 0.9vw, 2.2rem);
  color: #373737;
  line-height: clamp(2.2rem, 1.4rem + 1.2vw, 3.2rem);
  letter-spacing: clamp(0.1rem, 0.05rem + 0.4vw, 0.3rem);
  margin-bottom: clamp(1.6rem, 3vh, 3.2rem);
}

.neko {
  position: absolute;
  bottom: clamp(1.2rem, 2vh, 2.4rem);
  right: clamp(1.2rem, 4vw, 3.2rem);
  width: clamp(4.8rem, 12%, 9rem);
  max-width: 30%;
  pointer-events: none;
}

/*モーダルクローズ案内*/
.modalNav {
  position: absolute;
  bottom: clamp(1.6rem, 4vh, 6rem);
  left: 0;
  width: 100%;
  text-align: center;
  color: #ffffff;
  font-size: clamp(1.2rem, 0.8rem + 0.6vw, 1.6rem);
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

/* === Breakpoints === */
@media (max-width: 900px) {
  .infoContainer {
    width: min(72ch, 78%);
    margin-top: 30%;
  }
  
  .neko {
    width: clamp(5.2rem, 16%, 8rem);
  }
}
@media (max-width: 680px) {
  .infoContainer {
    width: min(50ch, 88%);
        margin-top: 30%;
    text-align: left;
  }

  .neko {
    position: static;
    display: block;
    margin: 2rem auto 0;
    width: clamp(6rem, 40%, 14rem);
  }
}
@media (max-width: 480px) {
  .infoContainer {
    width: 92%;
    padding: clamp(1.6rem, 3vh, 2.4rem) clamp(1.2rem, 4vw, 2.4rem) 3.2rem;
  }

  .infoTxt {
    font-size: clamp(1.5rem, 1.2rem + 1.4vw, 1.9rem);
    line-height: 1.55;
  }

  .modalNav {
    font-size: clamp(1.1rem, 1rem + 0.8vw, 1.4rem);
  }
}
</style>
