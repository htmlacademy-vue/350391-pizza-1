<template>
  <div class="app-layout">
    <AppLayoutHeader
      :user="user"
      :finalTotalPrice="finalTotalPrice"
      @logout="$emit('logout')"
    />
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
    finalTotalPrice: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style></style>
