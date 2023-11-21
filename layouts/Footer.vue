<template>
  <footer class="text-white border-t-2 border-primary py-10">
    <div class="mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1920px] py-6 lg:px-8">
      <div>
        <h2 class="decor-text text-5xl inline-flex border-primary border-s-2 px-6">
          <LazyNuxtImg alt="Realtor icon" class="w-30 h-30 aspect-auto hidden md:block" height="100"
                       src="assets/images/realtor-96.png"
                       width="100"/>
          Tristan<br/>Barbeau
        </h2>
      </div>
      <div class="border-s-2 border-primary px-6">
        <h2 class="text-2xl pb-3 uppercase">Contact</h2>
        <p>3611 autoroute Laval Ouest</p>
        <p>Laval, H7P 5P6, QC</p>
        <p>(450) 978-2582</p>
      </div>
      <div class="flex flex-col border-s-2 border-primary px-6">
        <h2 class="text-2xl pb-3 uppercase">Liens</h2>
        <a href="">Accueil</a>
        <a href="">À propos</a>
        <a href="">Évaluez votre maison</a>
        <a href="">Contact</a>
      </div>
      <div class="border-s-2 border-primary flex flex-col gap-4 px-6">
        <NuxtImg alt="Propio Direct" height="120" src="assets/images/duproprio_logo-clr.png" width="100px"/>
        <div class="flex gap-2">
          <NuxtLink to="#">
            <NuxtImg alt="FB" height="30" src="assets/images/facebook_w.png" width="30"/>
          </NuxtLink>
          <NuxtLink to="#">
            <NuxtImg alt="Instag" height="30" src="assets/images/instagram_w.png" width="30"/>
          </NuxtLink>
          <NuxtLink to="#">
            <NuxtImg alt="LinkIn" height="30" src="assets/images/linkedin_w.png" width="30"/>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="mx-auto max-w-[1920px] flex justify-between border-t-2 border-primary pt-6 px-4 lg:px-8">
      <h3>Tristan Barbeau</h3>
      <h3>©2023 All rights reserved</h3>
    </div>
  </footer>
</template>
<script lang="ts" setup>
</script>