<template>
  <div class="header__cart">
    <a href="cart.html">{{ price }} ₽</a>
  </div>
</template>

<script>
export default {
  name: "cart",
  props: {
    price: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped></style>
