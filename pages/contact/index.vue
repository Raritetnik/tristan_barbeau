<template>
  <div>
  <Section
      :style="{
      backgroundImage: `url(${bgImage})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }"
  >
  </Section>
  <!-- Contact -->
  <Section class="py-[60px]">
    <div class="w-full flex flex-col items-center text-white">
      <ContactForm></ContactForm>
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
<script lang="ts" setup>
import Section from "~/components/elements/Section.vue";
import bgImage from "assets/images/Maison_de_bord.webp";
import ContactForm from "~/components/elements/ContactForm.vue";
useSeoMeta({
  title: "Contacter moi, votre realtor | Tristan Barbeau",
  description: "Les services professionnels proposés par le courtier immobilier Tristan Barbeau. " +
      "Touts ce qui est associé aux processus d'achat, de vente et de location de biens immobiliers."
});

</script>

<style scoped>
.messageSent {
  display: none;
}
</style>