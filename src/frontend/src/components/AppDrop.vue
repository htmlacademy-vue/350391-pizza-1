<template>
  <div @drop.stop="onDrop" @dragover.prevent @dragenter.prevent>
    <slot />
  </div>
</template>

<script>
export default {
  name: "AppDrop",
  methods: {
    onDrop({ dataTransfer }) {
      console.log("есть");
      if (!dataTransfer) {
        return;
      }
      const addedIngredient = dataTransfer.getData("text");
      if (addedIngredient) {
        const addedIngredient = JSON.parse(addedIngredient);
        console.log(addedIngredient);
        // Пытаюсь получить в родительском компоненту какой ингридиент перетащили
        // Пока
        this.$emit("drop", addedIngredient);
      }
    },
  },
};
</script>
