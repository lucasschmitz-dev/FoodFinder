<template>
  <div class="sidenav">
    <p>Menu</p>
    <router-link to="/entdecken">Entdecken</router-link>
    <router-link to="/meine-rezepte">Meine Rezepte</router-link>
    <router-link to="/was-ist-möglich">Was ist möglich?</router-link>
    <router-link to="/mein-geschmack">Mein Geschmack</router-link>
  </div>
  <div class="topnav center">
    <h1><a class="center" href="/">FoodFinder</a></h1>
    <router-link to="/entdecken">Entdecken</router-link>
    <router-link to="/rezept-finden">Rezept finden</router-link>
    <button>Filter</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBar",
  props: {},
});
</script>

<style scoped>
.center {
  padding-left: 5px;
}
</style>
