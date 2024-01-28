import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
    {
      path: "/parent-groom",
      name: "parent-groom",
      component: HomeView,
      props: {
        type: "parent-groom",
      },
    },
    {
      path: "/parent-bride",
      name: "parent-bride",
      component: HomeView,
      props: {
        type: "parent-bride",
      },
    },
  ],
});

export default router;
