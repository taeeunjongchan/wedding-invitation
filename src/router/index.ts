import { createRouter, createWebHashHistory } from "vue-router";
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
      path: "/parents-jaekuk",
      name: "parents-jaekuk",
      component: HomeView,
      props: {
        type: "parents-jaekuk",
      },
    },
    {
      path: "/parents-gaun",
      name: "parents-gaun",
      component: HomeView,
      props: {
        type: "parents-gaun",
      },
    },
  ],
});

export default router;
