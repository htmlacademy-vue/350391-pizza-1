<template>
  <div class="header__cart">
    <router-link to="/cart">{{ finalTotalPrice }} ₽</router-link>
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
