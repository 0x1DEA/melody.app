<template>
  <header v-if="isAuthorized">
    <Menu as="div" class="relative inline-block text-left">
      <MenuButton class="inline-flex w-full justify-center rounded-full bg-neutral-200 dark:bg-black text-neutral-900 dark:text-neutral-50 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none gap-x-4">
        <img class="h-10 w-auto rounded-full" :src="user.image"/>
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
              <a href="/logout" :class="[active ? 'bg-neutral-100 dark:bg-neutral-700' : '', 'block rounded-sm px-4 py-2']">Log out</a>
            </MenuItem>
          </div>
        </MenuItems>
    </Menu>
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

    this.$store.dispatch("getMe");
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
