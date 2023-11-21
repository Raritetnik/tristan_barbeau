<template>
  <Section
      :style="{
      backgroundImage: `url(${bgImage})`,
      backgroundPosition: 'center',
      backgroundSize: '100% 100%',
    }"
      class="flex justify-center bg-no-repeat bg-cover"
  >
    <div class="max-w-[80ch] text-black text-center flex flex-col my-20">
      <NuxtImg
          alt="Profile Img"
          class="self-center border-2 border-primary rounded-full translate-y-20"
          src="assets/images/tristan_profil.webp"
          width="250"
      />
      <div class="bg-white px-14 pt-32 pb-24">
        <h2 class="text-3xl pb-5 text-black">Tristan Barbeau</h2>
        <p class="text-black pb-10">
          Salut ! Je m’appelle Tristan Barbeau, et je suis un jeune individu ambitieux désireux de
          laisser une marque dans l’industrie immobilière. J’apporte des perspectives nouvelles
          et un engagement à offrir un service exceptionnel à mes clients.
        </p>
        <p class="text-black">
          Je me suis rapidement intégré dans ce secteur dynamique en raison de ma passion
          pour l’immobilier et mon engagement constant à apprendre. Mon objectif est de
          rendre l’expérience d’achat ou de vente de chaque maison aussi simple et
          enrichissante que possible pour chaque client.
        </p>
      </div>
    </div>
  </Section>

  <!-- Contact -->
  <Section class="py-[60px]">
    <div class="w-full flex flex-col items-center text-white">
      <div class="p-8 flex flex-col gap-4 w-full">
        <ContactForm></ContactForm>
      </div>
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
</template>

<script setup>
import Section from "~/components/elements/Section.vue";
import bgImage from "assets/images/dillon-kydd-XGvwt544g8k-unsplash.webp";
import ContactForm from "~/components/elements/ContactForm.vue";
</script>