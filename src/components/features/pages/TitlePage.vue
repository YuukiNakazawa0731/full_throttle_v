<template>
  <div id="titleContainer">
    <img
      :src="titleBack"
      class="titleLogo"
      alt="titleBack"
      :class="{ titleLogoFadein: props.isMainPage }"
    />
    <Button
      style="
        grid-column: 5;
        grid-row: 5;
        height: 30%;
        width: 55%;
        transition: 0.2s ease;
      "
      @click="showModal = true"
    >
      {{ settings.title.clickMe }}
    </Button>
    <Modal
      v-if="showModal"
      :showModal="showModal"
      @close-modal="showModal = false"
    />
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import Button from "@/components/items/Button.vue";
import Modal from "../../items/Modal.vue";
import settings from "@/assets/data/settings.json";
import titleBack from "@/assets/images/title/title.png";

const showModal = ref(false);
const props = defineProps({
  isMainPage: Boolean,
});
</script>
