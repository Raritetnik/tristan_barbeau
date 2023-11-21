<template>
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
          class="h-[500px] aspect-square object-cover border-[#C4971C] border-2"
          src="assets/images/house_luxy.webp"
          width="1356"
      />
    </div>
  </Section>
</template>
<script lang="ts" setup>
import Section from "~/components/elements/Section.vue";
import bgImage from "assets/images/Maison_de_bord.webp";
import ContactForm from "~/components/elements/ContactForm.vue";
</script>

<style scoped>
.messageSent {
  display: none;
}
</style>