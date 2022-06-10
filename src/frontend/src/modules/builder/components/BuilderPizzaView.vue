<template>
  <div class="content__pizza">
    <label class="input">
      <span class="visually-hidden">Название пиццы</span>
      <input
        type="text"
        name="pizza_name"
        placeholder="Введите название пиццы"
      />
    </label>
    <AppDrop @drop="addIngredient($event)">
      <div class="content__constructor">
        <div class="pizza pizza--foundation--big-tomato">
          <div class="pizza__wrapper">
            <div v-if="notEmptyIngredients">
              <div
                v-for="ingredient in ingredients"
                :key="ingredient"
                class="pizza__filling"
                :class="[`pizza__filling--${ingredient}`]"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </AppDrop>

    <div class="content__result">
      <p>Итого: 0 ₽</p>
      <button type="button" class="button button--disabled" disabled>
        Готовьте!
      </button>
    </div>
  </div>
</template>

<script>
import AppDrop from "@/components/AppDrop";
import Vue from "vue";
//import AppDrag from "@/components/AppDrag";
//import users from "@/static/users.json";
//import misc from "@/static/misc.json";

export default {
  name: "BuilderPizzaView.vue",
  components: { AppDrop },
  props: {
    currentPizza: {
      type: Object,
      required: true,
    },
    ingredientsCounts: {
      type: Map,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    notEmptyIngredients: function () {
      return this.ingredientsCounts.size;
    },
    ingredients: function () {
      this.ingredientsCounts.keys();
      return Array.from(this.ingredientsCounts.keys());
    },
  },
  methods: {
    addIngredient(ingredient) {
      //Считаем;
      ingredient = JSON.parse(ingredient);
      let counter = this.ingredientsCounts.get(ingredient.value);
      counter = (counter === undefined) ? 1 : counter++;
      Vue.set(this.ingredientsCounts,ingredient.value, counter);
      console.log(this.ingredientsCounts);
    },
  },
};
</script>

<style scoped></style>
