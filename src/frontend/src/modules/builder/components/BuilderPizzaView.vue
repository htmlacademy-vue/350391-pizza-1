<template>
  <div class="content__pizza">
    <label class="input">
      <span class="visually-hidden">{{ pizzaName }}</span>
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
              v-for="ingredient in currentIngredients"
              :key="ingredient.value"
              class="pizza__filling"
              :class="[`${getPizzaFillingClasses(ingredient)}`]"
            ></div>
          </div>
        </div>
      </div>
    </AppDrop>

    <BuilderPriceCounter
      @submit="submit"
      :price="price"
      :isDisabled="isSubmitDisabled"
    />
  </div>
</template>

<script>
import { MAP_PIZZA } from "@/common/constants";
import BuilderPriceCounter from "@/modules/builder/components/BuilderPriceCounter";

export default {
  name: "BuilderPizzaView",
  components: { BuilderPriceCounter },
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
    price: {
      type: Number,
      required: true,
    },
  },
  computed: {
    pizzaFoundationClass() {
      return `pizza pizza--foundation--${MAP_PIZZA.dough[this.currentDough]}-${
        MAP_PIZZA.sauces[this.currentSauce]
      }`;
    },
    isSubmitDisabled() {
      return !this.pizzaName || !this.currentIngredients.length || !this.price;
    },
  },

  methods: {
    getPizzaFillingClasses(ingredient) {
      const valueClass = `pizza__filling--${ingredient.value}`;
      const counter = ingredient.counter;
      if (counter === 1) {
        return valueClass;
      } else if (counter > 0) {
        //TODO constants
        const CounterModifiers = {
          2: "second",
          3: "third",
        };
        const counterClass = `pizza__filling--${CounterModifiers[counter]}`;
        return `${valueClass} ${counterClass}`;
      }
    },
    addedIngredient(ingredient) {
      this.$emit("incrementCounter", ingredient.counter + 1, ingredient.value );
    },
    submit() {
      this.$emit("submit");
    },
  },
};
</script>

<style scoped></style>
