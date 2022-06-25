<template>
  <div v-if="!user" key="header-with-no-user" class="header__user">
    <router-link to="/login" class="header__login">
      <span>Войти</span>
    </router-link>
  </div>

  <div v-else key="header-with-user" class="header__user">
    <router-link to="/profile">
      <Avatar :user="user" :width=32 :height=32 />
      <span>{{ user.name }}</span>
    </router-link>
    <a href="#" class="header__logout" @click.prevent="$emit('logout')"
      ><span>Выйти</span></a>
  </div>
</template>

<script>
export default {
  name: "authorization",
  props: {
    user: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style scoped></style>
