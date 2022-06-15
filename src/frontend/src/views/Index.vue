<template>
  <div id="app">
    <AppLayout />
    <main class="content">
      <form action="#" method="post">
        <div class="content__wrapper">
          <h1 class="title title--big">Конструктор пиццы</h1>

          <BuilderDoughSelector :TypeOfDough="TypeOfDough" />

          <BuilderSizeSelector :sizes="sizes" />

          <BuilderIngredientsSelector
            :ingredients="ingredients"
            :checkedIngredients="checkedIngredients"
            :sauces="sauces"
          />

          <BuilderPizzaView
            @incrementCounter="incrementCounter"
            @nameChange="nameChange"
            :pizzaName="pizzaName"
            :currentDough="currentDough"
            :currentSauce="currentSauce"
            :currentIngredients="currentIngredients"
            :checkIngredients="checkIngredients"
          />
<!--          -->
<!--          :totalPrice="totalPrice"-->
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
    };
  },

  computed: {
    currentIngredients() {
      this.ingredients.forEach((ingredient) => {
        ingredient.counter = 0;
      });
      return this.ingredients;
    },
    checkIngredients() {
      return this.ingredients.filter((ingredient) => ingredient.counter);
    },
  },

  watch: {},

  methods: {
    nameChange(name) {
      this.pizzaName = name;
    },
    incrementCounter(ingredient) {
      console.log(ingredient);
      const i = this.ingredients.findIndex(item => {
        return item.value === ingredient.value;
      });
      if(i) {this.ingredients[i].counter++;}
    },
  },
};
</script>

<style lang="scss" scoped></style>
