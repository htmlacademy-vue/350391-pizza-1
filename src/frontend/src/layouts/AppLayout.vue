<template>
  <header class="header">
    <div class="header__logo">
      <a href="index.html" class="logo">
        <img
          src="@/assets/img/logo.svg"
          alt="V!U!E! Pizza logo"
          width="90"
          height="40"
        />
      </a>
    </div>
    <Cart :price="price" />

    <Authorization />
  </header>
</template>

<script>
import Cart from "@/modules/common/components/Cart";
import Authorization from "@/modules/common/components/Authorization";
export default {
  name: "AppLayout",
  components: {
    Cart,
    Authorization,
  },
  props: {
    price: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped></style>
