<template>
  <div class="postitOuter postit-outer">
    <div class="postIt">
      <slot>Postit</slot>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";

function postit_fadeIn() {
  document.querySelectorAll(".postitOuter").forEach((el) => {
    const from_position = el.getBoundingClientRect().top + window.scrollY - 5;
    const scroll = window.scrollY;
    const windowHeight = window.innerHeight;
    if (scroll >= from_position - windowHeight) {
      el.classList.add("postitFadein");
    }
  });
}

function onScroll() {
  postit_fadeIn();
}

onMounted(() => {
  window.addEventListener("scroll", onScroll);
  postit_fadeIn();
});
onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<style scoped>
.postitOuter {
  opacity: 0;
  position: relative;
  transform: rotate(-12deg) scale(0.9) translateY(-40px);
  z-index: 10;
  left: 0;
  width: 0%;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0.2s;
}
/* 付箋貼り付けアニメーション */
.postitFadein {
  opacity: 1;
  width: 40%;
  transform: rotate(-12deg) scale(1.03) translateY(0);
}

.postIt {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 9rem;
  width: 70%;
  font-size: 5rem;
  font-family: "Rock Salt", "cursive";
  box-shadow: 1rem 0rem 0.7rem #14131375;
  background: linear-gradient(
    to right,
    #ff8800 0%,
    #ffcf67 0.5%,
    #ffcf67 13%,
    #ffb71c 16%
  );
  color: #404040;
  transition: 0.3s;
}
</style>
