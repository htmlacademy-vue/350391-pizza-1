<template>
  <div class="content__ingredients">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите ингридиенты</h2>

      <div class="sheet__content ingredients">
        <div class="ingredients__sauce">
          <p>Основной соус:</p>

          <label
            :key="sauce.id"
            v-for="sauce in sauces"
            class="radio ingredients__input"
          >
            <input
              type="radio"
              name="sauce"
              :value="`${sauce.value}`"
              @change="selectedSauce(sauce)"
              checked
            />
            <span>{{ sauce.name }}</span>
          </label>
        </div>

        <div class="ingredients__filling">
          <p>Начинка:</p>

          <ul class="ingredients__list">
            <li
              class="ingredients__item"
              v-for="ingredient in ingredients"
              :key="ingredient.id"
            >
              <AppDrag :transfer-data="ingredient">
                <span :class="`filling filling--${ingredient.value}`">
                  {{ ingredient.name }}
                </span>
              </AppDrag>

              <div class="counter counter--orange ingredients__counter">
                <button
                  type="button"
                  class="counter__button counter__button--minus"
                  :class="`${minusDisabled(ingredient)}`"
                  @click="changeCounter(ingredient, false)"
                >
                  <span class="visually-hidden">Меньше</span>
                </button>
                <input
                  type="text"
                  name="counter"
                  class="counter__input"
                  :value="`${ingredient.counter}`"
                />
                <button
                  type="button"
                  class="counter__button counter__button--plus"
                  :class="`${plusDisabled(ingredient)}`"
                  @click="changeCounter(ingredient, true)"
                >
                  <span class="visually-hidden">Больше</span>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppDrag from "@/components/AppDrag";
import { INIT_PIZZA } from "@/common/constants";

export default {
  name: "BuilderIngredientsSelector.vue",
  components: { AppDrag },
  data() {
    return {};
  },
  props: {
    ingredients: {
      type: Array,
      required: true,
    },
    currentIngredients: {
      type: Array,
      required: true,
    },
    sauces: {
      type: Array,
      required: true,
    },
  },
  computed: {},
  methods: {
    selectedSauce(sauce) {
      this.$emit("selectedSauce", sauce.id);
    },
    changeCounter(ingredient, increase) {
      this.$emit("changeCounter", ingredient, increase);
    },
    minusDisabled(ingredient) {
      return ingredient.counter === INIT_PIZZA.min
        ? "counter__button--disabled"
        : "";
    },
    plusDisabled(ingredient) {
      return ingredient.counter === INIT_PIZZA.max
        ? "counter__button--disabled"
        : "";
    },
  },
};
</script>

<style scoped></style>
