<template>
  <AppLayoutDefault
    :user="user"
    :cartTotalSum="finalTotalPrice"
    @login="$emit('login')"
    @logout="$emit('logout')"
  >
    <main class="layout">
      <AppLayoutMainSidebar />
      <slot />
    </main>
  </AppLayoutDefault>
</template>

<script>
import AppLayoutDefault from "@/layouts/AppLayoutDefault";
import AppLayoutMainSidebar from "@/layouts/AppLayoutMainSidebar";

export default {
  name: "AppLayoutMain",
  components: {
    AppLayoutDefault,
    AppLayoutMainSidebar,
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
