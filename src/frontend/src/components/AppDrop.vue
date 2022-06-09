<template>
  <div @drop.stop="onDrop" @dragover.prevent @dragenter.prevent>
    <slot />
  </div>
</template>

<script>
export default {
  name: "AppDrop",
  methods: {
    //Бросили на место
    onDrop({ dataTransfer }) {
      if (!dataTransfer) {
        return;
      }
      console.log(dataTransfer);
      const addedIngredient = dataTransfer.getData("payload");
      if (addedIngredient) {
        //const addedIngredient = JSON.parse(addedIngredient);
        console.log(addedIngredient);
        // Пытаюсь получить в родительском компоненту какой ингридиент перетащили
        // Пока
        this.$emit("drop", addedIngredient);
      }
    },
  },
};
</script>
