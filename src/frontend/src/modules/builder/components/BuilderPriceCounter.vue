<template>
  <div class="content__result">
    <p>Итого: {{ price }} ₽</p>
    <button
      type="button"
      class="button"
      :disabled="isDisabled"
      @click.prevent="submit"
    >
      Готовьте!
    </button>
  </div>
</template>

<script>
export default {
  name: "BuilderPriceCounter",
  data() {
    return {};
  },
  props: {
    price: {
      type: Number,
      required: true,
    },
    isDisabled: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    submit() {
      this.$emit("submit");
    },
  },
};
</script>

<style lang="scss" scoped></style>
