<template>
  <div data-tauri-drag-region class="flex justify-end select-none">
    <div @click="minimize()" class="px-4 py-1 bg-white dark:bg-black hover:bg-neutral-200 dark:hover:bg-neutral-800">
      <i class="fa-solid fa-minus"></i>
    </div>
    <div @click="restore()" class="px-4 py-1 bg-white dark:bg-black hover:bg-neutral-200 dark:hover:bg-neutral-800">
      <i class="fa-solid fa-window-restore"></i>
    </div>
    <div @click="close()" class="px-4 py-1 bg-white dark:bg-black hover:bg-red-600">
      <i class="fa-solid fa-xmark"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WindowControls"
});
</script>

<script setup lang="ts">
import { appWindow } from "@tauri-apps/api/window";

async function minimize() {
  await appWindow.minimize();
}

async function restore() {
  await appWindow.toggleMaximize();
}

async function close() {
  await appWindow.close();
}
</script>
