<template>
  <div id="app">
    <AppLayout :price="totalPrice" />
    <main class="content">
      <form action="#" method="post">
        <div class="content__wrapper">
          <h1 class="title title--big">Конструктор пиццы</h1>

          <BuilderDoughSelector
            :TypeOfDough="TypeOfDough"
            :currentDough="currentDough"
            @selectedDough="selectedDough"
          />

          <BuilderSizeSelector :sizes="sizes" @selectedSize="selectedSize" />

          <BuilderIngredientsSelector
            :ingredients="ingredients"
            :currentIngredients="currentIngredients"
            :sauces="sauces"
            @selectedSauce="selectedSauce"
            @changeCounter="changeCounter"
          />

          <BuilderPizzaView
            @incrementCounter="changeCounter"
            @nameChange="nameChange"
            @submit="submit"
            :pizzaName="pizzaName"
            :currentDough="currentDough"
            :currentSauce="currentSauce"
            :currentIngredients="currentIngredients"
            :price="price"
            :totalPrice="totalPrice"
          />
        </div>
      </form>
    </main>
  </div>
</template>

<script>
import misc from "@/static/misc.json";
import pizza from "@/static/pizza.json";
import users from "@/static/users.json";

import { normalizePizza } from "@/common/helpers";
import { INIT_PIZZA } from "@/common/constants";

import AppLayout from "@/layouts/AppLayout";

import BuilderDoughSelector from "@/modules/builder/components/BuilderDoughSelector";
import BuilderIngredientsSelector from "@/modules/builder/components/BuilderIngredientsSelector";
import BuilderSizeSelector from "@/modules/builder/components/BuilderSizeSelector";
import BuilderPizzaView from "@/modules/builder/components/BuilderPizzaView";

const resultPizza = normalizePizza(pizza);

export default {
  name: "MainPage",
  components: {
    AppLayout,
    BuilderDoughSelector,
    BuilderSizeSelector,
    BuilderIngredientsSelector,
    BuilderPizzaView,
  },
  data() {
    return {
      //Current Pizza
      pizzaName: INIT_PIZZA.name,
      currentDough: INIT_PIZZA.dough,
      currentSize: INIT_PIZZA.size,
      currentSauce: INIT_PIZZA.sauce,
      //Test data
      users,
      misc,
      ingredients: resultPizza.ingredients,
      sauces: resultPizza.sauces,
      TypeOfDough: resultPizza.dough,
      sizes: resultPizza.sizes,
      totalPrice: 0,
    };
  },

  computed: {
    currentIngredients() {
      return this.ingredients.filter((ingredient) => ingredient.counter);
    },
    price() {
      const ingredientsPrice = this.ingredients
        .map((ingredient) => ingredient.price * ingredient.counter)
        .reduce((sum, ingredient) => sum + ingredient, 0);
      const multiplier = this.sizes.find(
        (item) => item.id === this.currentSize
      ).multiplier;

      const doughPrice = this.TypeOfDough.find(
        (item) => item.id === this.currentDough
      ).price;
      const saucePrice = this.sauces.find(
        (item) => item.id === this.currentSauce
      ).price;
      return (doughPrice + saucePrice + ingredientsPrice) * multiplier;
    },
  },

  watch: {},

  methods: {
    nameChange(name) {
      this.pizzaName = name;
    },
    selectedDough(typeOfDough) {
      this.currentDough = typeOfDough;
    },
    selectedSauce(sauce) {
      this.currentSauce = sauce;
    },
    selectedSize(size) {
      this.currentSize = size;
    },
    changeCounter(ingredient, increase) {
      const i = this.ingredients.findIndex((item) => {
        return item.value === ingredient.value;
      });

      if (i !== -1) {
        if (increase && this.ingredients[i].counter < INIT_PIZZA.max) {
          this.ingredients[i].counter++;
        } else if (this.ingredients[i].counter > INIT_PIZZA.min && !increase) {
          this.ingredients[i].counter--;
        }
      }
    },
    resetPizza() {
      this.currentDough = INIT_PIZZA.dough;
      this.currentSauce = INIT_PIZZA.sauce;
      this.currentSize = INIT_PIZZA.size;
      this.pizzaName = INIT_PIZZA.name;
      this.ingredients.forEach((ingredient) => {
        ingredient.counter = 0;
      });
    },
    submit() {
      //может есть более правильный вариант, что бы не прописывать в каждом дочернем компоненте emit?
      this.totalPrice = this.price;
      this.resetPizza();
    },
  },
};
</script>

<style lang="scss" scoped></style>
