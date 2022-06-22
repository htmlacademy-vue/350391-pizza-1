<template>
  <header class="header">
    <div class="header__logo">
      <Logo class="layout__logo" />
    </div>
    <Cart :finalTotalPrice="finalTotalPrice" />

    <Authorization :user="user" />
  </header>
</template>

<script>
import Cart from "@/modules/common/components/Cart";
import Authorization from "@/modules/common/components/Authorization";

export default {
  name: "AppLayoutHeader",
  components: {
    Cart,
    Authorization,
  },
  props: {
    finalTotalPrice: {
      type: Number,
      required: true,
    },
    user: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style scoped></style>
