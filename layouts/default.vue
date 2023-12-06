<template>
  <div>
  <Navigation class="overflow-x-hidden"></Navigation>

  <!-- Content Section -->
  <slot></slot>

  <span class="fixed bottom-0 right-20 flex items-top justify-between gap-4 text-xl bg-black border-primary border-x-2 border-t-2 rounded-t-3xl">
    <button @click="local.setLocale('fr')" :class="{active: local.locale.value == 'fr'}" class="text-white px-6 pt-2 rounded-t-2xl">FR</button>
    <button @click="local.setLocale('en')" :class="{active: local.locale.value == 'en'}" class="text-white px-6 py-2 rounded-t-2xl">EN</button>
  </span>
  <Footer></Footer>
  </div>
</template>

<script lang="ts" setup>
import Navigation from "~/layouts/Navigation.vue";
import Footer from "~/layouts/Footer.vue";
const local = useI18n();
</script>
<style scoped>
.active {
  background-color: var(--color_primary);
}
</style>