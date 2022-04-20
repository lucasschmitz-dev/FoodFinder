<template>
  <div class="main">
    <div class="container">
      <a href="rezepte.html">
        <div class="card">
          <img
            src="../assets/images/nudeln-in-paprikasauce.jpg"
            alt="Nudeln in Paprikasauce"
          />
          <div>
            <h4>Nudeln in Paprikasauce</h4>
            <p>4.5 Sterne</p>
          </div>
        </div>
      </a>

      <a href="rezepte.html">
        <div class="card">
          <img src="../assets/images/pizza.jpg" alt="Pizza" />
          <div>
            <h4>Pizza</h4>
            <p>4.7 Sterne</p>
          </div>
        </div>
      </a>

      <a href="rezepte.html">
        <div class="card"></div>
      </a>

      <a href="rezepte.html">
        <div class="card"></div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EntdeckenView",
  components: {},
});
</script>

<style>
@import "../styles/main-styles.css";
</style>
