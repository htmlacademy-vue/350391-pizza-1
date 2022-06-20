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

      const addedIngredient = dataTransfer.getData("payload");
      if (addedIngredient) {
        const addedIngredient = JSON.parse(dataTransfer.getData("payload"));
        this.$emit("drop", addedIngredient);
      }
    },
  },
};
</script>
