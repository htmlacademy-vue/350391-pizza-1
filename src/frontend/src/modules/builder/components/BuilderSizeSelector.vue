<template>
  <div class="content__diameter">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите размер</h2>

      <div class="sheet__content diameter">
        <label
          :key="size.id"
          v-for="size in sizes"
          :class="`diameter__input diameter__input--${size.value}`"
        >
          <input
            type="radio"
            name="diameter"
            :value="`${size.value}`"
            class="visually-hidden"
          />
          <span>{{ size.name }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BuilderSizeSelector.vue",
  props: {
    sizes: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
