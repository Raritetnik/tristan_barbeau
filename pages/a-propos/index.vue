<template>
  <div>
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
          height="250"
      />
      <div class="bg-white px-14 pt-32 pb-24">
        <h2 class="text-3xl pb-5 text-black">Tristan Barbeau</h2>
        <p class="text-black pb-10">
          {{ $t('aboutPageText1') }}
        </p>
        <p class="text-black">
          {{ $t('aboutPageText2') }}
        </p>
      </div>
    </div>
  </Section>

  <!-- Contact -->
  <Section class="py-[60px]">
    <div class="w-full flex flex-col items-center text-white">
      <div class="flex flex-col gap-4 w-full">
        <ContactForm></ContactForm>
      </div>
    </div>
    <div class="w-full p-8 flex justify-center">
      <LazyNuxtImg
          alt="Banniere maison image"
          class="h-[300px] lg:h-[500px] aspect-square object-cover border-[#C4971C] border-2"
          src="assets/images/house_luxy.webp"
          width="1356"
      />
    </div>
  </Section>
  </div>
</template>

<script setup>
import Section from "~/components/elements/Section.vue";
import bgImage from "assets/images/dillon-kydd-XGvwt544g8k-unsplash.webp";
import ContactForm from "~/components/elements/ContactForm.vue";

useSeoMeta({
  title: "Votre realtor, qui suis-je ? | Tristan Barbeau",
  description: "Les services professionnels proposés par le courtier immobilier Tristan Barbeau. " +
      "Touts ce qui est associé aux processus d'achat, de vente et de location de biens immobiliers."
});


</script>