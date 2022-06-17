<template>
  <div
    :draggable="isDraggable"
    @dragstart.self="onDrag"
    @dragover.prevent
    @dragenter.prevent
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "AppDrag",
  props: {
    transferData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onDrag({ dataTransfer }) {
      dataTransfer.effectAllowed = "move";
      dataTransfer.dropEffect = "move";
      dataTransfer.setData("payload", JSON.stringify(this.transferData));
    },
    onDragCheck() {
      if (this.transferData) {
        this.$emit("dropEnd", {
          value: this.transferData.value,
        });
      }
    },
  },
  computed: {
    isDraggable() {
      return this.transferData.counter < 3;
    },
  },
};
</script>
