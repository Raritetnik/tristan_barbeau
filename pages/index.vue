<template>
  <div>
  <!-- Banniere -->
  <Section class="min-h-0">
    <div class="flex flex-col-reverse md:grid md:grid-cols-2 w-full">
      <div class="flex flex-col justify-center min-h-[500px] items-center w-full relative">
        <span class="flex flex-col gap-6 text-center md:text-left">
          <h1 class="text-4xl">{{ $t('incredProp') }}</h1>
          <h2 class="text-2xl">{{ $t('courtierImmobilier') }}</h2>
          <NuxtLink to="/contact"><Button class="self-end">{{ $t('contactezMoi') }}</Button></NuxtLink>
        </span>
        <!--<NuxtImg
            preload
            alt="Mini image"
            class="block absolute md:w-[200px] aspect-square bottom-0 left-0 object-cover bg-primary"
            format="webp"
            loading="lazy"
            src="assets/images/bailey-anselme-Bkp3gLygyeA-unsplash.webp"
            width="120"
            :placeholder="[250, 250]"
        />-->
      </div>
      <div class="w-full hidden md:block">
        <NuxtImg
            alt="Banniere maison image"
            class="h-[500px] lg:h-[800px] w-full object-cover"
            format="webp"
            width="800"
            height="500"
            :placeholder="[800, 500]"
            src="assets/images/nataliia-kvitovska-2HKJACExHeo-unsplash.webp"
        />
      </div>
    </div>
  </Section>

  <!-- A propos -->
  <Section>
    <div class="w-full mt-10 lg:mt-0">
      <NuxtImg
          alt="Banniere maison image"
          class="h-[500px] lg:h-[800px] w-full object-cover"
          src="assets/images/5.webp"
          format="webp"
          loading="lazy"
          width="800"
          height="500"
          :placeholder="[800, 500]"
      />
    </div>
    <div
        class="w-full flex flex-col justify-center items-center text-white px-4 py-20 md:p-20 min-h-[500px] "
    >
      <div class="flex flex-col gap-3 border-s-2 border-[#C4971C] ps-8 ">
        <h1 class="text-3xl font-semibold uppercase">{{ $t('proposMoi') }}</h1>
        <p class="max-w-[60ch]">
          {{
            $t('accueilAproposMoi')
          }}
        </p>
        <p class="max-w-[60ch]">
          {{
            $t('accueilSuiteProposMoi')
          }}
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
        <NuxtImg
            alt="Tristan image profile"
            loading="lazy"
            class="w-52 aspect-square object-cover border-2 border-black rounded-full"
            src="assets/images/Tristan_Barbeau-_web.webp"
            width="200"
            height="200"
        />
        <h2 class="text-[8rem] leading-none m-0 hidden md:block">+</h2>
      </div>
      <div class="flex gap-4">
        <h2 class="text-[5rem] lg:text-[8rem] decor-text text-white">
          Tristan <br/>
          Barbeau
        </h2>
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
    <div class="w-full p-8 flex justify-center ">
      <NuxtImg
          alt="Banniere maison image"
          loading="lazy"
          class="h-[300px] lg:h-[500px] aspect-square object-cover border-[#C4971C] border-2"
          src="assets/images/house_luxy.webp"
          width="800"
          height="300"
      />
    </div>
  </Section>
  </div>
</template>

<script setup>
import Section from "~/components/elements/Section.vue";
import Button from "~/components/elements/Button.vue";
import bgImage from "~/assets/images/Maison_de_bord.webp";
import ContactForm from "~/components/elements/ContactForm.vue";
const { t, locale } = useI18n();

useSeoMeta({
  title: 'Realtor professionnel: estimation, vente | Tristan Barbeau',
  description: "Les services d'un expert en propriété, Tristant Barbeau, sont accessibles à tous. " +
      "Il répond à toutes les questions relatives à l'achat, la vente, les finances, les hypothèques, etc."
});
</script>


<style>
input[type="text"],
textarea,
input[type="number"],
input[type="tel"],
input[type="email"],
select {
  padding: 10px;
  color: black;
}

:root {
  --form-control-color: white;
  --form-control-disabled: #959495;
  --form-background: white;
}

.formulaire input[type="text"],
.formulaire input[type="tel"],
.formulaire input[type="email"] {
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
  -webkit-appearance: none;
  appearance: none;
  background-color: var(--form-background);
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
</style>