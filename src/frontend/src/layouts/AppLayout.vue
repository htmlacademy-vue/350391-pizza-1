<template>
  <component
    :is="layout"
    :user="user"
    :finalTotalPrice="finalTotalPrice"
    @logout="$emit('logout')"
    @addNewOrder="$emit('addNewOrder', $event)"
  >
    <slot />
  </component>
</template>

<script>
const mainLayout = "AppLayoutMain";

export default {
  name: "AppLayout",
  props: {
    user: {
      type: Object,
      default: null,
    },
    finalTotalPrice: {
      type: Number,
      required: true,
    },
  },
  computed: {
    layout() {
      const layout = this.$route.meta.layout || mainLayout;
      return () => import(`@/layouts/${layout}.vue`);
    },
  },
};
</script>

<style scoped></style>
