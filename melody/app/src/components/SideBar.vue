<template>
  <nav class="absolute flex w-60 min-h-screen top-0">
    <div class="hidden bg-neutral-50 dark:bg-black lg:block w-full px-4 py-2">
      <div class="divide-y divide-neutral-200 dark:divide-neutral-700">
        <div>
          <div class="pb-4">
            <div class="pb-4 flex items-center">
              <button type="button" class="px-2 pb-2">
                <i class="fa-solid fa-ellipsis w-5 h-auto text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50"></i>
              </button>
              <button type="button" @click="back()" class="px-2 pb-2">
                <i class="fa-solid fa-chevron-left w-2.5 h-auto text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50"></i>
              </button>
              <button type="button" @click="forward()" class="px-2 pb-2">
                <i class="fa-solid fa-chevron-right w-2.5 h-auto text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50"></i>
              </button>
            </div>
            <a :class="['flex items-center px-2 pb-4 gap-x-4', isHome ? 'text-melody-blue' : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50']" href="/">
              <i class="fa-solid fa-rotate w-5 h-auto"></i>
              <span class="text-md">Home</span>
            </a>
            <a :class="['flex items-center px-2 pb-4 gap-x-4', isSearch ? 'text-melody-blue' : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50']" href="/search">
              <i class="fa-solid fa-magnifying-glass w-5 h-auto"></i>
              <span class="text-md">Search</span>
            </a>
            <a :class="['flex items-center px-2 pb-4 gap-x-4', isLibrary ? 'text-melody-blue' : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50']" href="/library">
              <i class="fa-solid fa-book w-5 h-auto"></i>
              <span class="text-md">Library</span>
            </a>
          </div>
          <div class="pb-4">
            <a class="flex items-center px-2 pb-4 gap-x-4 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50" href="/create_playlist">
              <i class="fa-solid fa-square-plus w-5 h-auto"></i>
              <span class="text-md">Create Playlist</span>
            </a>
            <a class="flex items-center px-2 pb-4 gap-x-4 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50" href="/liked_tracks">
              <i class="fa-solid fa-heart w-5 h-auto"></i>
              <span class="text-md">Liked Tracks</span>
            </a>
          </div>
        </div>
        <div v-if="userPlaylists && userPlaylists.length" class="pt-4">
          <a v-for="userPlaylist in userPlaylists" v-bind:key="userPlaylist" class="px-2 pb-4 text-md text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50" :href="`/playlists/${userPlaylist.id}`">
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
  props: {
    isHome: {type: Boolean, default: false},
    isSearch: {type: Boolean, default: false},
    isLibrary: {type: Boolean, default: false},
  },
  computed: {
    userPlaylists() {
      return this.$store.getters.stateUserPlaylists;
    }
  },
  methods: {
    back() {
      this.$router.back();
    },
    forward() {
      this.$router.forward();
    },
  },
});
</script>
