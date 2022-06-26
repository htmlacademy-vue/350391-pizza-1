<template>
  <div id="app">
    <AppLayout :user="user" :finalTotalPrice="finalTotalPrice" @logout="logout">
      <router-view
        :finalTotalPrice="finalTotalPrice"
        @login="login"
        @addNewPizza="addNewPizza"
      />
    </AppLayout>
  </div>
</template>

<script>
import misc from "@/static/misc.json";
import pizza from "@/static/pizza.json";
import users from "@/static/users.json";

import { ADDRESS } from "./common/constants";

import {
  normalizePizza,
  normalizeAddons,
  calculateSum,
} from "@/common/helpers";

const resultPizza = normalizePizza(pizza);

console.log(users);
console.log(resultPizza);

export default {
  name: "App",
  data() {
    return {
      user: users[0],
      cart: {
        pizzas: [],
        addons: normalizeAddons(misc),
      },
      orders: [],
      addresses: [ADDRESS],
    };
  },
  computed: {
    cartPizzasPrice() {
      return calculateSum(this.cart.pizzas);
    },
    cartAddonsPrice() {
      return calculateSum(this.cart.addons);
    },
    finalTotalPrice() {
      return this.cartPizzasPrice + this.cartAddonsPrice;
    },
  },
  methods: {
    login() {
      this.user = users[0];
      this.$router.push({ name: "Profile" });
    },
    logout() {
      this.user = null;
      this.$router.push({ name: "Login" });
    },
    addNewPizza(pizza) {
      this.cart.pizzas.push(pizza);
    },
    addNewOrder() {},
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/app";
</style>
