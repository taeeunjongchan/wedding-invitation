import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      props: {
        type: "default",
      },
    },
    {
      path: "/wedding",
      name: "wedding",
      component: HomeView,
      props: {
        type: "wedding",
      },
    },
  ],
});

export default router;
