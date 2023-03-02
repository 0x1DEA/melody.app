<template>
  <section>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "LogoutView",
  async created() {
    await this.logout();
    this.$router.push("/");
  },
  methods: {
    ...mapActions(["logout"]),
  },
});
</script>
