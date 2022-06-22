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

import {
  normalizePizza,
  normalizeAddons,
  calculateSum,
} from "@/common/helpers";

const resultPizza = normalizePizza(pizza);
console.log(users);

console.log(resultPizza);

const mockAddress = {
  id: 1,
  name: "Дом",
  street: "Невский пр.",
  house: "22",
  apartment: "46",
  comment: "Позвоните, пожалуйста, от проходной",
};

export default {
  name: "App",
  data() {
    return {
      user: null,
      cart: {
        pizzas: [],
        addons: normalizeAddons(misc),
      },
      orders: [],
      addresses: [mockAddress],
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
      this.$router.push({ name: "MainPage" });
    },
    logout() {
      this.user = null;
      this.$router.push({ name: "SignIn" });
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
