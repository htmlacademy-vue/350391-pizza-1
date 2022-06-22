<template>
  <div class="layout__sidebar sidebar">
    <Logo class="layout__logo" />

    <SidebarLink v-for="link in links" :key="link.pathName" :link="link" />
  </div>
</template>

<script>
import SidebarLink from "@/components/SidebarLink.vue";

export default {
  components: { SidebarLink },
  name: "AppLayoutSidebar",
  data() {
    return {
      links: [
        {
          to: "/orders",
          pathName: "Orders",
          title: "История заказов",
        },
        {
          to: "/user",
          pathName: "User",
          title: "Мои данные",
        },
      ],
    };
  },
};
</script>
