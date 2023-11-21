<script lang="ts" setup>
import Section from "~/components/elements/Section.vue";
import Button from "~/components/elements/Button.vue";

const props = defineProps({
  error: Object
})

const handleError = () => clearError({redirect: '/'})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator/>
    <Section class="min-h-[600px] py-20">
      <div class="flex flex-col justify-center text-left gap-6 w-full p-8">
        <h1 class="text-7xl">Page introuvable!</h1>
        <h2 class="text-xl">Erreur: {{ error.statusCode }}</h2>
        <Button class="self-start" @click="handleError">Retourner sur la page accueil</Button>
      </div>
      <div class="w-full p-8 flex justify-center">
        <LazyNuxtImg
            alt="Banniere maison image"
            class="h-[500px] aspect-square object-cover border-[#C4971C] border-2"
            src="assets/images/house_luxy.webp"
            width="1356"
        />
      </div>
    </Section>
  </NuxtLayout>
</template>