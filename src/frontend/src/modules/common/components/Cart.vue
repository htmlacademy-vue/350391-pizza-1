<template>
  <div class="header__cart">
    <a href="cart.html">{{ finalTotalPrice }} ₽</a>
  </div>
</template>

<script>
export default {
  name: "cart",
  props: {
    finalTotalPrice: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped></style>
