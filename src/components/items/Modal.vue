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
  top: 20%;
  left: 25%;
  padding: 10% 0;
  width: 50%;
  text-align: center;
  border: 0.3rem outset #ff8800;
  border-radius: 0.5rem;
  background-color: #ffffff;
}

.infoTxt {
  font-size: 2.2rem;
  color: #373737;
  line-height: 3.2rem;
  letter-spacing: 0.3rem;
  margin-bottom: 5%;
}

.neko {
  position: absolute;
  top: 65%;
  left: 80%;
  width: 10%;
}

/*モーダルクローズ案内*/
.modalNav {
  position: absolute;
  bottom: 15%;
  width: 100%;
  text-align: center;
  color: #ffffff;
}
</style>
