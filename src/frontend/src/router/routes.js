export default [
  {
    path: "/",
    name: "IndexHome",
    component: () => import("../views/Index.vue"),
    children: [
      {
        path: "login",
        name: "Login",
        component: () => import("../views/Login.vue"),
      },
    ],
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/Cart.vue"),
  },
  {
    path: "/orders",
    name: "Orders",
    component: () => import("../views/Orders.vue"),
    meta: { layout: "AppLayoutSidebar" },
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/User.vue"),
    meta: { layout: "AppLayoutSidebar" },
  },
];
