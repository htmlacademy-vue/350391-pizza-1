<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>

      <div class="sheet__content dough">
        <label
          v-for="dough in TypeOfDough"
          :class="`dough__input dough__input--${dough.class}`"
          :key="dough.id"
        >
          <input
            type="radio"
            name="dough"
            :value="`${dough.value}`"
            class="visually-hidden"
            @change="selectedDough(dough)"
          />
          <b>{{ dough.name }}</b>
          <span>{{ dough.description }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BuilderDoughSelector.vue",
  props: {
    TypeOfDough: {
      type: Array,
      required: true,
    },
    currentDough: {
      type: Number,
      required: true,
    },
  },
  methods: {
    selectedDough(dough) {
      this.$emit("selectedDough", dough.id);
    },
  },
};
</script>

<style scoped></style>
