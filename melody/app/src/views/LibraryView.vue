<template>
  <AppLayout title="Library">
  </AppLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AppLayout from "@/components/AppLayout.vue";

export default defineComponent({
  name: "LibraryView",
  components: {AppLayout},
});
</script>
