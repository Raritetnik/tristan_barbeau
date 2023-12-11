<template>
  <footer class="text-white border-t-2 border-primary py-10 px-2">
    <div class="mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1920px] py-6 lg:px-8">
      <div>
        <h2 class="decor-text text-4xl lg:text-5xl inline-flex border-primary border-s-2 px-6">
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
        <p>(514) 706 5569</p>
      </div>
      <div class="flex flex-col border-s-2 border-primary px-6">
        <h2 class="text-2xl pb-3 uppercase">{{ $t('links') }}</h2>
        <NuxtLink :to="t('accueil.link')" class="hover:text-primary">{{ $t('accueil.title') }}</NuxtLink>
        <NuxtLink :to="t('propriete.link')" class="hover:text-primary">{{ $t('propriete.title') }}</NuxtLink>
        <NuxtLink :to="t('evaluer.link')" class="hover:text-primary">{{ $t('evaluer.title') }}</NuxtLink>
        <NuxtLink :to="t('contact.link')" class="hover:text-primary">{{ $t('contact.title') }}</NuxtLink>
        <NuxtLink :to="t('calculatrice.link')" class="hover:text-primary">{{ $t('calculatrice.title') }}</NuxtLink>
      </div>
      <div class="border-s-2 border-primary flex flex-col gap-4 px-6">
        <div class="inline-flex flex-col justify-center items-center max-w-max">
          <NuxtImg alt="Propio Direct" height="120" src="assets/images/duproprio_logo-clr.png" class="mb-2" width="100px"/>
          <div class="flex gap-2">
            <NuxtLink to="#">
              <NuxtImg alt="FB" height="35" src="assets/images/facebook_w.png" width="35"/>
            </NuxtLink>
            <NuxtLink to="#">
              <NuxtImg alt="Instag" height="35" src="assets/images/instagram_w.png" width="35"/>
            </NuxtLink>
            <NuxtLink to="#">
              <NuxtImg alt="LinkIn" height="35" src="assets/images/linkedin_w.png" width="35"/>
            </NuxtLink>
          </div>
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
const { t, locale  } = useI18n();
</script>