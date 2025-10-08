<template>
  <button class="localBtn">
    <slot>Btn</slot>
  </button>
</template>

<style scoped>
.localBtn {
  position: relative;
  z-index: 5;
  padding: 0.3% 3.5%;
  font-size: 2.6rem;
  color: rgb(8, 31, 236);
  font-weight: bold;
  font-family: "Raleway", "sans-serif";
  text-shadow: 0.1rem 0.1rem 0.2rem #ffffff;
  border: 0.5rem solid #0000ff;
  border-radius: 0.8rem;
  box-shadow: 1.6rem 1.6rem 1.3rem #0e0d0d;
  background-color: #ff8800;
  cursor: pointer;
  transition: 0.5s ease-in-out;
}
.localBtn:hover {
  margin-top: 0.5%;
  box-shadow: 0.8rem 0.8rem 0.5rem #0e0d0d;
}
</style>
