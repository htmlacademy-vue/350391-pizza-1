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
              <IngredientsCounter
                :counter="ingredient.counter"
                @update="changeCounter($event, ingredient.value)"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IngredientsCounter from "./IngredientsCounter";

export default {
  name: "BuilderIngredientsSelector.vue",
  data() {
    return {};
  },
  components: {
    IngredientsCounter,
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
    changeCounter(counter, value) {
      this.$emit("changeCounter", counter, value);
    },
  },
};
</script>

<style scoped></style>
