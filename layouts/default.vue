<template>
  <Navigation></Navigation>

  <!-- Content Section -->
  <slot></slot>


  <Footer></Footer>
</template>
<script lang="ts" setup>
import Navigation from "~/layouts/Navigation.vue";
import Footer from "~/layouts/Footer.vue";
</script>