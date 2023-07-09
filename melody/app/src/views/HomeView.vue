<template>
  <AppLayout title="Home">
  </AppLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AppLayout from "@/components/AppLayout.vue";

export default defineComponent({
  name: "HomeView",
  components: {AppLayout},
});
</script>
