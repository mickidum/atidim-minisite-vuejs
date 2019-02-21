<template>
  <div :class="['spinner-container', end]">
    <div class="inner">
      <img src="@/assets/logo2.png" alt="logo" />
    </div>
  </div>
</template>

<script>
export default {
  name: "preloader",
  props: ["end"]
};
</script>

<style lang="scss" scoped>
.spinner-container {
  z-index: 1000;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.9);
  align-items: center;
  justify-content: center;
  .inner {
    animation: logo-pulse 1500ms ease-in-out infinite 0.5s;
  }
  &.fin {
    img {
      animation: logo-animation 2000ms ease-out infinite 2s;
    }
  }
}

@keyframes logo-animation {
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(50);
    opacity: 0;
  }
}
@keyframes logo-pulse {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
}
</style>
