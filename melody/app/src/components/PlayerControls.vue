<template>
  <footer class="absolute flex bottom-0 w-screen h-28 z-50">
    <div class="hidden lg:flex items-center justify-center w-full h-full bg-neutral-200 dark:bg-neutral-800 gap-x-8">
      <div class="relative">
        <button type="button" @click="toggleShuffle()" :class="[isShuffle ? 'text-melody-blue' : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50']">
          <i class="fa-solid fa-shuffle h-6 w-auto"></i>
        </button>
        <span v-if="isShuffle" class="text-melody-blue">
          <i class="fa-solid fa-circle h-2 w-auto px-2 absolute block"></i>
        </span>
      </div>
      <button type="button">
        <i class="fa-solid fa-backward h-6 w-auto text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-50"></i>
      </button>
      <button type="button" @click="togglePlaying()" class="text-neutral-900 dark:text-neutral-50">
        <span v-if="isPlaying"><i class="fa-solid fa-circle-pause h-10 w-auto"></i></span>
        <span v-else><i class="fa-solid fa-circle-play h-10 w-auto"></i></span>
      </button>
      <button type="button">
        <i class="fa-solid fa-forward h-6 w-auto text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-50"></i>
      </button>
      <div class="relative">
        <button type="button" @click="toggleRepeat()" :class="[isRepeatAny ? 'text-melody-blue' : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50']">
          <i class="fa-solid fa-repeat h-6 w-auto"></i>
        </button>
        <span v-if="isRepeatAny" class="text-melody-blue">
          <i class="fa-solid fa-circle h-2 w-auto px-2 absolute block"></i>
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from "vue";

const NO_REPEAT = 0;
const REPEAT = 1;
const REPEAT_ONE = 2;
const REPEAT_CYCLE = 3;

export default defineComponent({
  name: "PlayerControls",
  data() {
    return {
      shuffle: false,
      playing: false,
      repeat: NO_REPEAT,
    }
  },
  computed: {
    isShuffle() {
      return this.shuffle;
    },
    isPlaying() {
      return this.playing;
    },
    isRepeat() {
      return this.repeat == REPEAT;
    },
    isRepeatOne() {
      return this.repeat == REPEAT_ONE;
    },
    isRepeatAny() {
      return this.isRepeat || this.isRepeatOne;
    }
  },
  methods: {
    toggleShuffle() {
      this.shuffle = !this.shuffle;
    },
    togglePlaying() {
      this.playing = !this.playing;
    },
    toggleRepeat() {
      this.repeat = (this.repeat + 1) % REPEAT_CYCLE;
    }
  }
});
</script>
