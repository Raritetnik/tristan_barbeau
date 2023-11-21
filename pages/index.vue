<template>
  <!-- Banniere -->
  <Section>
    <div class="grid grid-cols-1 lg:grid-cols-2 w-full">
      <div class="flex flex-col justify-center min-h-[500px] items-center w-full relative">
        <span class="flex flex-col gap-6 text-center md:text-left">
          <h1 class="text-4xl">Proprieté incroyable</h1>
          <h2 class="text-2xl">Courtier immobilier résidentiel</h2>
          <NuxtLink to="/contact"><Button class="self-end">Contactez-moi</Button></NuxtLink>
        </span>
        <NuxtImg
            alt="Mini image"
            class="block absolute w-[120px] md:w-[200px] aspect-square bottom-0 left-0 object-cover bg-primary"
            format="webp"
            loading="lazy"
            src="assets/images/bailey-anselme-Bkp3gLygyeA-unsplash.webp"
            width="250"
        />
      </div>
      <div class="w-full">
        <NuxtImg
            alt="Banniere maison image"
            class="h-[500px] lg:h-[800px] w-full object-cover"
            height="500"
            placeholder
            sizes="100vw md:50vw"
            src="assets/images/nataliia-kvitovska-2HKJACExHeo-unsplash.webp"
        />
      </div>
    </div>
  </Section>

  <!-- A propos -->
  <Section>
    <div class="w-full mt-10 lg:mt-0">
      <LazyNuxtImg
          alt="Banniere maison image"
          class="h-[500px] lg:h-[800px] w-full object-cover"
          loading="lazy"
          src="assets/images/5.webp"
          width="1356"
      />
    </div>
    <div
        class="w-full flex flex-col justify-center items-center text-white px-4 py-20 md:p-20 min-h-[500px] "
    >
      <div class="flex flex-col gap-3 border-s-2 border-[#C4971C] ps-8 ">
        <h1 class="text-3xl font-semibold uppercase">À propos de moi</h1>
        <p class="max-w-[60ch]">
          J’aborde mon travail avec une compréhension solide du marché
          local et une priorité accordée à l’assistance personnalisée. Que
          vous soyez un acheteur novice ou un investisseur chevronné, je suis
          là pour vous guider à chaque étape du processus.
        </p>
        <p class="max-w-[60ch]">
          La base de mon approche repose sur une attention particulière aux
          exigences et préférences de mes clients. Cela me permet de
          personnaliser mes offres pour répondre à vos besoins et
          préférences uniques, garantissant une expérience personnalisée.
        </p>
      </div>
    </div>
  </Section>

  <!-- Profile -->
  <Section
      :style="{
      backgroundImage: `url(${bgImage})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }"
  >
    <div class="flex flex-col md:flex-row justify-center w-full h-full items-center py-[120px]">
      <div class="flex flex-col items-center text-white">
        <LazyNuxtImg
            alt="Tristan image profile"
            class="w-52 aspect-square object-cover border-2 border-black rounded-full"
            src="assets/images/Tristan_Barbeau-_web.webp"
            width="1356"
        />
        <h2 class="text-[8rem] leading-none m-0 hidden md:block">+</h2>
      </div>
      <div class="flex gap-4">
        <h2 class="text-[8rem] decor-text text-white">
          Tristan <br/>
          Barbeau
        </h2>
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
import Button from "~/components/elements/Button.vue";
import bgImage from "~/assets/images/Maison_de_bord.webp";
import ContactForm from "~/components/elements/ContactForm.vue";

useSeoMeta({
  title: 'Accueil',
  description: "Les services professionnels proposés par le courtier immobilier Tristan Barbeau. Touts ce qui est associé aux processus d'achat, de vente et de location de biens immobiliers."
})
</script>

<style>
input[type="text"],
textarea,
input[type="number"],
select {
  padding: 10px;
  color: black;
}

:root {
  --form-control-color: white;
  --form-control-disabled: #959495;
  --form-background: white;
}

.formulaire input[type="text"] {
  padding: 5px 10px;
  font-size: 18px;
}

.form-control {
  font-size: 1.3rem;
  line-height: 1.1;
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;
}

input[type="checkbox"] {
  /* Add if not using autoprefixer */
  -webkit-appearance: none;
  /* Remove most all native input styles */
  appearance: none;
  /* For iOS < 15 */
  background-color: var(--form-background);
  /* Not removed via appearance */
  margin: 0;

  font: inherit;
  color: currentColor;
  width: 1em;
  height: 1em;
  border: 0.15em solid currentColor;
  border-radius: 0.15em;
  transform: translateY(-0.075em);

  display: grid;
  place-content: center;
}

input[type="checkbox"]::before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  transform: scale(0);
  transform-origin: bottom left;
  transition: 120ms transform ease-in-out;
  /* Windows High Contrast Mode */
  background-color: CanvasText;
}

input[type="checkbox"]:checked::before {
  transform: scale(1);
}

.calculatrice input[type="text"] {
  min-width: auto;
}

.calcApercu {
  font-size: 18px;
}

.calcApercu tr > * {
  border: 1px solid var(--color_primary);
  padding: 10px 15px;
}

.listeCalc ul {
  list-style: inside;
}

.listeCalc h3:not(:first-child) {
  padding-top: 40px;
}

.listeCalc h3 {
  padding-bottom: 10px;
  font-weight: bold;
  font-size: 18px;
}

#pretHypot:after {
  content: "$";
  color: white;
  background-color: var(--color_primary);
  width: 40px;
  height: 40px;
}
</style>