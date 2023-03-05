<template>
  <router-view/>
</template>

<script>
import { defineComponent } from "vue";

const TOKEN = "token";

const SET_TOKEN = "setToken";
const GET_ME = "getMe";
const GET_ME_PLAYLISTS = "getMePlaylists";

export default defineComponent({
  name: "App",
  created() {
    let token = this.$cookies.get(TOKEN);

    if (!this.$store.getters.isAuthorized && token) {
      this.$store.commit(SET_TOKEN, token);
    }

    this.fetchData();
  },
  methods: {
    fetchData() {
      if (this.$store.getters.isAuthorized) {
        this.$store.dispatch(GET_ME);
        this.$store.dispatch(GET_ME_PLAYLISTS);
      }
    }
  }
});
</script>
