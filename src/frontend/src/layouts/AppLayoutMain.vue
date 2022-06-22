<template>
  <AppLayoutDefault
    :user="user"
    :finalTotalPrice="finalTotalPrice"
    @login="$emit('login')"
    @logout="$emit('logout')"
  >
    <main class="layout">
      <AppLayoutSidebar />
      <slot />
    </main>
  </AppLayoutDefault>
</template>

<script>
import AppLayoutDefault from "@/layouts/AppLayoutDefault";
import AppLayoutSidebar from "@/layouts/AppLayoutSidebar";

export default {
  name: "AppLayoutMain",
  components: {
    AppLayoutDefault,
    AppLayoutSidebar,
  },
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
};
</script>
