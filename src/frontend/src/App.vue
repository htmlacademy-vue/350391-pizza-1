<template>
  <div id="app">
    <MainPage />
  </div>
</template>

<script>
import MainPage from "@/views/Index.vue";

export default {
  name: "App",
  components: {
    MainPage,
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/app";
</style>
