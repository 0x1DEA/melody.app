<template>
  <header v-if="isAuthorized">
    <Menu as="div" class="relative inline-block text-left">
      <MenuButton class="inline-flex w-full items-center justify-center rounded-full bg-neutral-200 dark:bg-black text-neutral-900 dark:text-neutral-50 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none gap-x-2 pr-4">
        <img class="h-10 w-auto rounded-full" :src="`https://melodykit.app/static/images/user.${user.id}.png`"/>
        <span>{{ user.name }}</span>
      </MenuButton>
      <MenuItems class="absolute py-1 px-1 mt-2 w-52 divide-y divide-neutral-100 dark:divide-neutral-700 rounded-md bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 focus:outline-none">
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
    <!--
    <nav class="flex min-h-screen">
      <div class="hidden w-64 bg-neutral-50 dark:bg-black lg:block text-xl">
        <a class="flex items-center px-6 py-2 gap-x-4 text-melody-blue" href="/">
          <i class="fa-solid fa-rotate text-3xl"></i>
          <span>Home</span>
        </a>
        <a class="flex items-center px-6 py-2 gap-x-4" href="/search">
          <i class="fa-solid fa-magnifying-glass text-3xl"></i>
          <span>Search</span>
        </a>
        <a class="flex items-center px-6 py-2 gap-x-4" href="/library">
          <i class="fa-solid fa-book text-3xl"></i>
          <span>Library</span>
        </a>
      </div>
    </nav>
    -->
  </header>
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
    }
  },
  computed: {
    isAuthorized() {
      return this.$store.getters.isAuthorized;
    },
    user() {
      return this.$store.getters.stateUser;
    }
  }
});
</script>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
</script>
