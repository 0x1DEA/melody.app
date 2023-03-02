import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import LibraryView from "../views/LibraryView.vue";
import LogoutView from "../views/LogoutView.vue";
import SearchView from "../views/SearchView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/search",
    name: "search",
    component: SearchView,
  },
  {
    path: "/library",
    name: "library",
    component: LibraryView,
  },
  {
    path: "/logout",
    name: "logout",
    component: LogoutView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
