<template>
  <div class="content__pizza">
    <label class="input">
      <span class="visually-hidden">Название пиццы</span>
      <input
        type="text"
        name="pizza_name"
        placeholder="Введите название пиццы"
        :value="pizzaName"
        @input="$emit('nameChange', $event.target.value.trim())"
      />
    </label>
    <AppDrop @drop="addedIngredient($event)">
      <div class="content__constructor">
        <div :class="[`${pizzaFoundationClass}`]">
          <div class="pizza__wrapper">
            <div
              v-for="ingredient in checkIngredients"
              :key="ingredient.value"
              class="pizza__filling"
              :class="[`pizza__filling--${ingredient.value}`]"
            ></div>
          </div>
        </div>
      </div>
    </AppDrop>

    <BuilderPriceCounter
      :totalPrice="totalPrice"
      :isDisabled="isSubmitDisabled"
      @submit="$emit('submit', $event)"
    />
  </div>
</template>

<script>
import { MAP_PIZZA } from "@/common/constants";
import BuilderPriceCounter from "@/modules/builder/components/BuilderPriceCounter";
import AppDrop from "@/components/AppDrop";

export default {
  name: "BuilderPizzaView",
  components: { AppDrop, BuilderPriceCounter },
  props: {
    pizzaName: {
      type: String,
      required: true,
    },
    currentDough: {
      type: [Number, String],
      required: true,
    },
    currentSauce: {
      type: [Number, String],
      required: true,
    },
    currentIngredients: {
      type: Array,
      required: true,
    },
    // totalPrice: {
    //   type: Number,
    //   required: true,
    // },
  },
  computed: {
    pizzaFoundationClass() {
      return `pizza pizza--foundation--${MAP_PIZZA.dough[this.currentDough]}-${
        MAP_PIZZA.sauces[this.currentSauce]
      }`;
    },
    // isSubmitDisabled() {
    //   return (
    //     !this.pizzaName || !this.currentIngredients.length || !this.totalPrice
    //   );
    // },
  },

  methods: {
    getPizzaFillingClasses(ingredient) {
      const valueClass = `pizza__filling--${ingredient.value}`;
      const counter = ingredient.counter;
      if (counter === 1) {
        return valueClass;
      }
      const CountModifiers = {
        2: "second",
        3: "third",
      };
      const countClass = `pizza__filling--${CountModifiers[counter]}`;
      return `${valueClass} ${countClass}`;
    },
    addedIngredient(ingredient) {
      this.$emit("incrementCounter", ingredient);
    },
  },
};
</script>

<style scoped></style>
