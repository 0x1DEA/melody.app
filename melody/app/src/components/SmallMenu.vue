<template>
  <Menu v-if="isLoaded()" as="div" :class="['relative w-fit text-left']">
    <MenuButton class="inline-flex w-full items-center justify-center rounded-full bg-neutral-200 dark:bg-black text-neutral-900 dark:text-neutral-50 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none gap-x-2 pr-4">
      <img class="h-10 w-auto rounded-full" :src="`https://melodykit.app/api/v1/users/${self.id}/image`"/>
      <span>{{ self.name }}</span>
    </MenuButton>
    <MenuItems class="absolute py-1 px-1 mt-2 w-52 divide-y divide-neutral-100 dark:divide-neutral-700 rounded-md bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 focus:outline-none right-2">
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
          <button type="button" @click="logout()" :class="[active ? 'bg-neutral-100 dark:bg-neutral-700' : '', 'block rounded-sm px-4 py-2 w-full text-left']">Log out</button>
        </MenuItem>
      </div>
    </MenuItems>
  </Menu>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { useSelfStore } from "@/store/modules/self";

export default defineComponent({
  name: "SmallMenu",
  computed: {
    self() {
      const store = useSelfStore();

      return store.stateSelf;
    }
  },
  methods: {
    async logout() {
      const store = useSelfStore();

      await store.logout();
    }
  },
});
</script>

<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { isLoaded } from "@/utils";
</script>
