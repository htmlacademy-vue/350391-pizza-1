<template>
  <div className="app-layout">
    <AppLayoutHeader :user="user" :price="price" @logout="$emit('logout')" />
    <slot />
  </div>
</template>

<script>
import AppLayoutHeader from "@/layouts/AppLayoutHeader";

export default {
  name: "AppLayoutDefault",
  components: {
    AppLayoutHeader,
  },
  props: {
    user: {
      type: Object,
      default: null,
    },
    price: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped></style>
