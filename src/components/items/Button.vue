<template>
  <button class="localBtn">
    <slot>Btn</slot>
  </button>
</template>

<style scoped>
.localBtn {
  position: relative;
  z-index: 5;
  font-size: 2.2rem;
  font-weight: 700;
  font-family: "Raleway", "sans-serif";
  line-height: 1.15;
  padding: 2% 0 1%;
  min-width: clamp(18rem, 22vw, 20rem);
  color: #081fec;
  text-shadow: 0.1rem 0.1rem 0.25rem #ffffff;
  border: 0.4rem solid #0040ff;
  border-radius: 1.2rem;
  box-shadow: 1.6rem 1.6rem 1.3rem #0e0d0d;
  background: linear-gradient(135deg, #ff9900, #ff7a00 45%, #ff8800);
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.4s ease,
    background-position 0.6s ease;
  background-size: 160% 160%;
  background-position: 0 0;
}
.localBtn:hover {
  transform: translateY(-0.3rem) scale(1.04);
  box-shadow: 1.2rem 1.2rem 1rem #0e0d0d;
  background-position: 100% 100%;
}
.localBtn:active {
  transform: translateY(0) scale(0.98);
  box-shadow: 0.6rem 0.6rem 0.4rem #0a0a0a;
}

@media (max-width: 768px) {
  .localBtn {
    min-width: clamp(16rem, 46vw, 20rem);
    right: 8%;
    font-size: clamp(2rem, 1.4rem + 1.4vw, 2.8rem);
    padding: clamp(0.8rem, 1.2vh, 1.2rem) clamp(1.4rem, 6vw, 2.4rem)
      clamp(0rem, 8vw, 4rem);
  }
}

@media (max-width: 480px) {
  .localBtn {
    min-width: clamp(14rem, 68vw, 14rem);
    right: 8%;
    font-size: clamp(1.8rem, 4.4vw, 2.4rem);
    padding: clamp(0.8rem, 1.2vh, 1.2rem) clamp(1.4rem, 6vw, 2.4rem)
      clamp(0rem, 8vw, 4rem);
  }
}

@media (prefers-reduced-motion: reduce) {
  .localBtn,
  .localBtn:hover,
  .localBtn:active {
    transition: none;
    transform: none;
  }
}
</style>
