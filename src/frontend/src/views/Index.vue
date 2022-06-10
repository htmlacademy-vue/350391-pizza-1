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
            :sauces="sauces"
            :currentPizza="currentPizza"
          />

          <BuilderPizzaView
            :currentPizza="currentPizza"
            :ingredientsCounts="ingredientsCounts"
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
import AppLayout from "@/layouts/AppLayout";
import BuilderDoughSelector from "@/modules/builder/components/BuilderDoughSelector";
import BuilderIngredientsSelector from "@/modules/builder/components/BuilderIngredientsSelector";
//import BuilderPriceView from "@/modules/builder/components/BuilderPriceCounter";
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
    //BuilderPriceView,
  },
  data() {
    return {
      //Current pizza
      //Во Vue нельзя динамически добавлять новые корневые реактивные свойства в уже существующий экземпляр.
      // Можно добавить реактивное свойство во вложенные объекты, используя метод Vue.set(object, propertyName, value):
      currentPizza: {},
      ingredientsCounts: new Map(),
      //Test data
      users,
      misc,
      ingredients: resultPizza.ingredients,
      sauces: resultPizza.sauces,
      TypeOfDough: resultPizza.dough,
      sizes: resultPizza.sizes,
    };
  },

  computed: {},

  watch: {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
