<template>
  <div
    class="returnTopIcon"
    :class="{ returnFadein: props.show, returnFedeout: !props.show }"
    @click="$emit('scroll-to-section', 'titleContainer')"
  >
    <img
      src="../../assets/images/contents/top_circle.png"
      class="outerCircleImg"
      alt="outerCircle"
    />
    <div class="returnBikeOuter">
      <img
        src="../../assets/images/contents/bike_body.png"
        class="returnBikeBody"
        alt="bikeBody"
      />
      <img
        src="../../assets/images/contents/tire_f.png"
        class="tireF"
        alt="tireF"
      />
      <img
        src="../../assets/images/contents/tire_r.png"
        class="tireR"
        alt="tireR"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  show: Boolean,
});
</script>

<style scoped>
.returnTopIcon {
  position: fixed;
  bottom: 2%;
  left: 1%;
  z-index: 100;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 17rem;
  width: 17rem;
  border-radius: 50%;
  background: initial;
  cursor: pointer;
  transition: 1s ease-in-out;
}
.returnFadein {
  opacity: 1;
  left: 1%;
}
.returnFedeout {
  opacity: 0;
  left: -20%;
}

.outerCircleImg {
  width: 100%;
  animation: circleRoll ease-in-out 7s infinite;
}
/*回転*/
@keyframes circleRoll {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.returnBikeBody {
  position: absolute;
  top: 28%;
  left: 16%;
  width: 70%;
  animation: bikeVive 0.3s linear infinite;
}
/*振動*/
@keyframes bikeVive {
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(1%);
  }
}

/*バイク発進*/
.returnBikeBody.bikeDash {
  transition: 0.1s ease;
  transform: rotate(45deg);
}

.tireF {
  position: absolute;
  top: 47%;
  left: 20%;
  width: 18%;
  animation: tireRoll 1s linear infinite;
}

.tireR {
  position: absolute;
  top: 44%;
  left: 60%;
  width: 20%;
  animation: tireRoll 1s linear infinite;
}
/*ホイール回転*/
@keyframes tireRoll {
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.tireF:hover,
.tireR:hover,
.returnTopIcon:hover .tireF,
.returnTopIcon:hover .tireR {
  animation: tireRoll 0.2s linear infinite;
}

@media (max-width: 780px) {
  .returnTopIcon {
    height: 14rem;
    width: 14rem;
  }
}

@media (max-width: 480px) {
  .returnTopIcon {
    height: 8rem;
    width: 8rem;
  }
}
</style>
