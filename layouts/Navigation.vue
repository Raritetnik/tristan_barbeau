<script setup>

import Menu from "~/layouts/Menu.vue";
import Button from "~/components/elements/Button.vue";
import { useNuxtApp } from '#app';
const nuxtApp = useNuxtApp()
nuxtApp.$fb.enable()

let local = useI18n();
</script>
<template>
  <header class="navBar w-full py-2 z-[2] px-1 md:px-2 lg:px-6 text-white border-b-2 border-primary overflow-hidden">
    <div class="mx-auto flex justify-between max-w-[1920px] items-center py-2 px-2 relative">
      <h2 class="decor-text text-3xl lg:text-4xl inline-flex items-center">
        <!--<NuxtImg alt="R.I" class="h-[70px] w-[70px] aspect-square" height="40" sizes="50px md:70px"
                 src="./assets/images/realtor-96.png" width="30"/>-->
        Tristan Barbeau
      </h2>
      <span class="flex lg:hidden justify-between items-center">
        <span class="inline-block align-middle">
          <button @click="local.setLocale('fr')" v-if="local.locale.value !== 'fr'" class="text-white w-[50px] h-[50px]">FR</button>
          <button @click="local.setLocale('en')" v-else class="text-white w-[50px] h-[50px]">EN</button>
        </span>
      <button :class="{active: !isClosed}" class="bg-transparent px-3 py-3" @click="closeMenu()">
        <svg class="menuBtn" fill="currentColor" height="25" viewBox="0 0 100 80" width="25">
          <rect height="20" width="100" y="0"></rect>
          <rect height="20" width="100" y="30"></rect>
          <rect height="20" width="100" y="60"></rect>
        </svg>
      </button>
      </span>
      <a href="tel:5147065569" class="hidden lg:inline-block bg-white rounded-full py-2 px-6 lg:me-4 border-black border-2 text-black text-lg lg:text-xl">
        (514) 706 5569</a>
    </div>
    <!-- Menu Bar -->
    <Menu v-model:close-menu="closeMenu" v-model:is-closed="isClosed"></Menu>
  </header>
</template>

<script>
let isClosed = ref(true);
var closeMenu = () => {
  isClosed.value = !isClosed.value;
}
</script>

<style>
.menuBtn {
  color: white;
}

.navBar .active {
  border-radius: 20px;
  background-color: var(--color_primary);
}
</style>