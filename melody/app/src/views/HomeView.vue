<template>
  <WindowControls v-if="isApp"></WindowControls>
  <MenuCollection v-if="isAuthorized" :isApp="isApp" :user="user" :userPlaylists="userPlaylists"></MenuCollection>
  <LoginForm v-else></LoginForm>
</template>

<script>
import { defineComponent } from "vue";

const TOKEN = "token";

const SET_TOKEN = "setToken";
const GET_ME = "getMe";
const GET_ME_PLAYLISTS = "getMePlaylists";

export default defineComponent({
  name: "HomeView",
  created() {
    let token = this.$cookies.get(TOKEN);

    if (token) {
      this.$store.commit(SET_TOKEN, token);
    }

    if (this.$store.getters.isAuthorized) {
      this.$store.dispatch(GET_ME);
      this.$store.dispatch(GET_ME_PLAYLISTS);
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
import LoginForm from "../components/LoginForm.vue";
import MenuCollection from "../components/MenuCollection.vue";
import WindowControls from "../components/WindowControls.vue";
</script>
