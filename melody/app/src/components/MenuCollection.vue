<template>
  <header class="flex justify-between z-40">
    <SideBar :userPlaylists="userPlaylists"></SideBar>
    <SmallMenu :isApp="isApp" :user="user"></SmallMenu>
  </header>
</template>

<script>
import { defineComponent } from "vue";

defineComponent({
  name: "MenuCollection",
  props: ["isApp", "user", "userPlaylists"],
});
</script>

<script setup>
import SideBar from "./SideBar.vue";
import SmallMenu from "./SmallMenu.vue";
</script>
