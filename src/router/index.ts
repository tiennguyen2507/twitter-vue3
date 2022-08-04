import { dataSidebar as routes } from "./route.config";
import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "root",
      path: "/",
      redirect: "/home",
      component:import('@/components/layout/Layout.vue'),
      children: routes,
    },
    {
      name: "login",
      path: "/login",
      component: import('@/components/auth/Login.vue')
    },
  ],
});
