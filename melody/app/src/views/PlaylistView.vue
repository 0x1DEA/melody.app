<template>
  <AppLayout title="Playlist">
    <img :src="`https://melodykit.app/api/v1/playlists/${playlistID}/image`" class="w-10 h-10"/>
  </AppLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AppLayout from "@/components/AppLayout.vue";

export default defineComponent({
  name: "PlaylistView",
  computed: {
    playlistID() {
      return this.$route.params.playlistID;
    },
  },
  components: {AppLayout},
});
</script>
