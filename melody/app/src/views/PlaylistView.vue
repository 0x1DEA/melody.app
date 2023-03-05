<template>
  <WindowControls v-if="isApp"/>
  <MenuCollection v-if="isAuthorized"/>
  <LoginForm v-else/>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PlaylistView",
  computed: {
    isAuthorized() {
      return this.$store.getters.isAuthorized;
    },
    isApp() {
      return Boolean(window.__TAURI_METADATA__);
    },
  }
});
</script>

<script setup>
import LoginForm from "../components/LoginForm.vue";
import MenuCollection from "../components/MenuCollection.vue";
import WindowControls from "../components/WindowControls.vue";
</script>
