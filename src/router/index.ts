import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EntdeckenView from "../views/EntdeckenView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
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
  history: createWebHashHistory(),
  routes,
});

export default router;
