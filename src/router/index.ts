import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EntdeckenView from "../views/EntdeckenView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/entdecken",
    name: "home",
    component: HomeView,
  },
  {
    path: "/entdecken",
    name: "entdecken",
    component: EntdeckenView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
