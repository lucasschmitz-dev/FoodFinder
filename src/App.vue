<template>
  <Nav-Bar></Nav-Bar>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";

import NavBar from "@/components/NavBar.vue";

export default defineComponent({
  components: {
    NavBar,
  },
});
</script>
