import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import LibraryView from "@/views/LibraryView.vue";
import PlaylistView from "@/views/PlaylistView.vue";
import SearchView from "@/views/SearchView.vue";
import SettingsView from "@/views/SettingsView.vue";

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
    path: "/settings",
    name: "settings",
    component: SettingsView,
  },
  {
    path: "/playlists/:playlistID",
    name: "playlist",
    component: PlaylistView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
