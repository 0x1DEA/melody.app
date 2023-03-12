<template>
  <WindowControls v-if="isApp"/>
  <MenuCollection v-if="isAuthorized"/>
  <LoginForm v-else/>
  <section class="absolute left-60 top-0 z-0" v-if="isAuthorized">
    <img class="h-48 w-auto" :src="`https://melodykit.app/api/v1/playlists/${playlistID}/image`"/>
  </section>
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
    playlistID() {
      return this.$route.params.playlistID;
    },
  },
});
</script>

<script setup>
import LoginForm from "../components/LoginForm.vue";
import MenuCollection from "../components/MenuCollection.vue";
import WindowControls from "../components/WindowControls.vue";
</script>
