<template>
  <Loading v-if="isLoading" @loading-finished="onLoadingFinished" />
  <MainPage v-else />
</template>

<script setup>
import { ref, onMounted } from "vue";
import Loading from "@/components/features/global/Loading.vue";
import MainPage from "@/components/features/global/MainPage.vue";

const isLoading = ref(true);

function onLoadingFinished() {
  isLoading.value = false;
}

onMounted(() => {
  // 2回目以降はloadingをスキップ
  if (sessionStorage.getItem("access")) {
    isLoading.value = false;
  } else {
    sessionStorage.setItem("access", "true");
    isLoading.value = true;
  }
});
</script>
