<template>
  <header class="flex justify-between z-40">
    <SideBar :isHome="isHome" :isSearch="isSearch" :isLibrary="isLibrary"></SideBar>
    <SmallMenu></SmallMenu>
  </header>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuCollection",
  props: {
    isHome: {type: Boolean, default: false},
    isSearch: {type: Boolean, default: false},
    isLibrary: {type: Boolean, default: false},
  },
});
</script>

<script setup>
import SideBar from "./SideBar.vue";
import SmallMenu from "./SmallMenu.vue";
</script>
