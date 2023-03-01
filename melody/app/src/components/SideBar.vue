<template>
  <nav class="absolute flex w-64 min-h-screen top-0">
    <div class="hidden bg-neutral-50 dark:bg-black lg:block px-4 py-2">
      <div class="divide-y divide-neutral-200 dark:divide-neutral-700">
        <div>
          <div class="pb-4">
            <button type="button" class="px-2 pb-2">
              <i class="fa-solid fa-ellipsis w-5 h-auto"></i>
            </button>
            <a class="flex items-center px-2 pb-4 gap-x-4 text-melody-blue" href="/">
              <i class="fa-solid fa-rotate w-5 h-auto"></i>
              <span class="text-xl">Home</span>
            </a>
            <a class="flex items-center px-2 pb-4 gap-x-4" href="/search">
              <i class="fa-solid fa-magnifying-glass w-5 h-auto"></i>
              <span class="text-xl">Search</span>
            </a>
            <a class="flex items-center px-2 pb-4 gap-x-4" href="/library">
              <i class="fa-solid fa-book w-5 h-auto"></i>
              <span class="text-xl">Library</span>
            </a>
          </div>
          <div class="pb-4">
            <a class="flex items-center px-2 pb-4 gap-x-4" href="/create_playlist">
              <img class="w-5 h-auto" src="https://melodykit.app/static/images/create_playlist.svg"/>
              <span class="text-xl">Create Playlist</span>
            </a>
            <a class="flex items-center px-2 pb-4 gap-x-4" href="/liked_tracks">
              <img class="w-5 h-auto" src="https://melodykit.app/static/images/liked_tracks.svg"/>
              <span class="text-xl">Liked Tracks</span>
            </a>
          </div>
        </div>
        <div v-if="userPlaylists && userPlaylists.length" class="pt-4">
          <a v-for="userPlaylist in userPlaylists" v-bind:key="userPlaylist" class="px-2 pb-4 hover:text-melody-blue" :href="`/playlists/${userPlaylist.id}`">
            {{ userPlaylist.name }}
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SideBar",
  props: ["userPlaylists"],
});
</script>
