<template>
  <div data-tauri-drag-region v-if="isApp" class="flex justify-end select-none">
    <div @click="control(MINIMIZE)" class="px-4 py-1 rounded-bl-xl bg-white dark:bg-black hover:bg-neutral-200 dark:hover:bg-neutral-800">
      <i class="fa-solid fa-minus"></i>
    </div>
    <div @click="control(RESTORE)" class="px-4 py-1 bg-white dark:bg-black hover:bg-neutral-200 dark:hover:bg-neutral-800">
      <i class="fa-solid fa-window-restore"></i>
    </div>
    <div @click="control(CLOSE)" class="px-4 py-1 bg-white dark:bg-black hover:bg-red-600">
      <i class="fa-solid fa-xmark"></i>
    </div>
  </div>

  <header v-if="isAuthorized" class="flex justify-between z-50">
    <nav class="absolute flex w-64 min-h-screen top-0">
      <div class="hidden bg-neutral-50 dark:bg-black lg:block px-4 py-2">
        <div class="divide-y divide-neutral-200 dark:divide-neutral-700">
          <div>
            <div class="pb-4">
              <button type="button" class="px-2 pb-2">
                <i class="fa-solid fa-ellipsis w-5 h-auto"></i>
              </button>
              <a class="flex items-center px-2 pb-4 gap-x-4 text-melody-blue" href="/">
                <i class="fa-solid fa-rotate w-5 h-auto"></i>
                <span class="text-xl">Home</span>
              </a>
              <a class="flex items-center px-2 pb-4 gap-x-4" href="/search">
                <i class="fa-solid fa-magnifying-glass w-5 h-auto"></i>
                <span class="text-xl">Search</span>
              </a>
              <a class="flex items-center px-2 pb-4 gap-x-4" href="/library">
                <i class="fa-solid fa-book w-5 h-auto"></i>
                <span class="text-xl">Library</span>
              </a>
            </div>
            <div class="pb-4">
              <a class="flex items-center px-2 pb-4 gap-x-4" href="/create_playlist">
                <img class="w-5 h-auto" src="https://melodykit.app/static/images/create_playlist.svg"/>
                <span class="text-xl">Create Playlist</span>
              </a>
              <a class="flex items-center px-2 pb-4 gap-x-4" href="/liked_tracks">
                <img class="w-5 h-auto" src="https://melodykit.app/static/images/liked_tracks.svg"/>
                <span class="text-xl">Liked Tracks</span>
              </a>
            </div>
          </div>
          <div v-if="userPlaylists" class="pt-4">
            <a v-for="userPlaylist in userPlaylists" v-bind:key="userPlaylist" class="px-2 pb-4 hover:text-melody-blue" :href="`/playlists/${userPlaylist.id}`">
              {{ userPlaylist.name }}
            </a>
          </div>
        </div>
      </div>
    </nav>
    <Menu as="div" :class="['absolute inline-block text-left top-4', isApp ? 'right-40' : 'right-4']">
      <MenuButton class="inline-flex w-full items-center justify-center rounded-full bg-neutral-200 dark:bg-black text-neutral-900 dark:text-neutral-50 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none gap-x-2 pr-4">
        <img class="h-10 w-auto rounded-full" :src="`https://melodykit.app/static/images/user.${user.id}.png`"/>
        <span>{{ user.name }}</span>
      </MenuButton>
      <MenuItems class="absolute py-1 px-1 mt-2 w-52 divide-y divide-neutral-100 dark:divide-neutral-700 rounded-md bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 focus:outline-none right-0">
        <div>
          <MenuItem v-slot="{ active }">
            <a href="/me" :class="[active ? 'bg-neutral-100 dark:bg-neutral-700' : '', 'block rounded-sm px-4 py-2']">Profile</a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a href="/settings" :class="[active ? 'bg-neutral-100 dark:bg-neutral-700' : '', 'block rounded-sm px-4 py-2']">Settings</a>
          </MenuItem>
        </div>
        <div>
          <MenuItem v-slot="{ active }">
            <a href="https://melodykit.app/logout" :class="[active ? 'bg-neutral-100 dark:bg-neutral-700' : '', 'block rounded-sm px-4 py-2']">Log out</a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  </header>
  <section v-else>
  </section>
</template>

<script>
import { defineComponent } from "vue";

const TOKEN = "token";

export default defineComponent({
  name: "HomeView",
  created() {
    let token = this.$cookies.get(TOKEN);

    if (token) {
      this.$store.commit("setToken", token);
    }

    if (this.$store.getters.isAuthorized) {
      this.$store.dispatch("getMe");
      this.$store.dispatch("getMePlaylists");
    }
  },
  computed: {
    isAuthorized() {
      return this.$store.getters.isAuthorized;
    },
    user() {
      return this.$store.getters.stateUser;
    },
    userPlaylists() {
      return this.$store.getters.stateUserPlaylists;
    },
    isApp() {
      return Boolean(window.__TAURI_METADATA__);
    }
  }
});
</script>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";

import {appWindow} from "@tauri-apps/api/window";

const MINIMIZE = 0;
const RESTORE = 1;
const CLOSE = 2;

async function control(mode) {
  switch (mode) {
    case MINIMIZE:
      await appWindow.minimize();
      break;

    case RESTORE:
      await appWindow.toggleMaximize();
      break;

    case CLOSE:
      await appWindow.close();
      break;
  }
}
</script>
