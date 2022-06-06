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
              <AppDrop @drop="$emit('drop', $event)">
                <AppDrag :transfer-data="ingredient" @drop="dropText">
                  <span :class="`filling filling--${ingredient.value}`">{{
                    ingredient.name
                  }}</span>
                </AppDrag>
              </AppDrop>

              <div class="counter counter--orange ingredients__counter">
                <button
                  type="button"
                  class="counter__button counter__button--disabled counter__button--minus"
                >
                  <span class="visually-hidden">Меньше</span>
                </button>
                <input
                  type="text"
                  name="counter"
                  class="counter__input"
                  value="0"
                />
                <button
                  type="button"
                  class="counter__button counter__button--plus"
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
import AppDrop from "@/components/AppDrop";
export default {
  name: "BuilderIngredientsSelector.vue",
  components: { AppDrop },
  props: {
    ingredients: {
      type: Array,
      required: true,
    },
    sauces: {
      type: Array,
      required: true,
    },
  },
  methods: {
    dropText() {
      console.log("йо");
    },
  },
};
</script>

<style scoped></style>
