<template>
  <div class="counter counter--orange ingredients__counter">
    <button
      type="button"
      class="counter__button counter__button--minus"
      :class="isDisabledMinus"
      @click="$emit('update', counter - 1)"
      :disabled="isDisabledMinus"
    >
      <span class="visually-hidden">Меньше</span>
    </button>
    <input
      type="text"
      name="counter"
      class="counter__input"
      :value="`${counter}`"
      @oninput="$emit('update', $event.target.value)"
    />
    <button
      type="button"
      class="counter__button counter__button--plus"
      :class="isDisabledPlus"
      @click="$emit('update', counter + 1)"
      :disabled="isDisabledPlus"
    >
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>

<script>
import { INIT_PIZZA } from "@/common/constants";
export default {
  name: "IngredientsCounter",
  props: {
    counter: {
      type: Number,
      required: true,
    },
  },
  computed: {
    isDisabledPlus() {
        return this.counter >= INIT_PIZZA.max;
      },
    isDisabledMinus() {
        return this.counter <= INIT_PIZZA.min;
      }
  },
};
</script>

<style scoped></style>
