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
          <div
            class="pizza__wrapper"
            >
            <div
              v-for="ingredient in currentPizza.ingredients"
              :key="ingredient"
              class="pizza__filling"
              :class="[
                `pizza__filling--${ingredient}`
              ]"
            ></div>
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
//import users from "@/static/users.json";
//import misc from "@/static/misc.json";

const currentPizza = {};
currentPizza.ingredients = [];

export default {
  name: "BuilderPizzaView.vue",
  components: { AppDrop },
  data() {
    return {
      currentPizza,
    }
  },
  methods: {
    addIngredient(ingredient) {
      ingredient = JSON.parse(ingredient);
      currentPizza.ingredients.push(ingredient.value);
    },
  },
};
</script>

<style scoped></style>
