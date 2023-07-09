<template>
  <AppLayout title="Settings">
  </AppLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AppLayout from "@/components/AppLayout.vue";

export default defineComponent({
  name: "SettingsView",
  components: {AppLayout},
});
</script>
