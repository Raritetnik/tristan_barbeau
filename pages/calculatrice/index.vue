<template>
  <div>
  <Section class="py-[60px]">
    <div class="border-primary border-2 flex flex-col lg:flex-row">
      <figure class=" lg:max-w-[500px] mx-2 my-12 md:m-16">
        <div class="text-white flex flex-col">
          <Titre>{{ $t('pretHypoTitle')}}</Titre>
          <span class="flex flex-col w-full"
          ><label for="pretHypot">{{ $t('amountPretHypo') }}:</label>
          <input
              id="pretHypot"
              v-model="pretHypothec"
              class="w-full text-black"
              max="{1000000}"
              min="{10000}"
              name="pretHypot"
              type="number"
          /></span>
          <div class="grid grid-cols-2 gap-6">
        <span class="flex flex-col w-full self-end"
        ><label for="tauxInteret">{{ $t('tauxIntéret') }}:</label>
            <input
                id="tauxInteret"
                v-model="tauxInteret"
                class="text-black"
                max="{30}"
                min="{0.01}"
                name="tauxInteret"
                step="{0.01}"
                type="number"
            /></span>
            <span class="flex flex-col w-full self-end"
            ><label for="amortissement">{{ $t('periodeAmortissement') }}:</label>
              <span class="grid grid-cols-2 w-full gap-2">
                <select
                    id="ammortisAnnees"
                    v-model="ammortisAnnees"
                    class="text-black"
                    name="ammortisAnnees"
                >
                  <option
                      v-for="annee in annees"
                      :value="annee"
                      class="text-black"
                  >
                    {{ annee }} {{ $t('ans') }}
                  </option>
                </select>
                <select
                    id="ammortisMois"
                    v-model="ammortisMois"
                    class="text-black"
                    name="ammortisMois"
                >
                  <option v-for="m in mois" :value="m" class="text-black">
                    {{ m }} {{ $t('mois') }}
                  </option>
                </select>
              </span>
            </span>
          </div>
        </div>
        <div class="flex gap-2 items-end">
            <span class="flex flex-col w-full"
            ><label for="freqVersement">{{ $t('frequenceVersements' )}}:</label>
              <select
                  id="freqVersement"
                  v-model="freqVersement"
                  class="text-black"
                  name="freqVersement"
              >
                <option class="text-black" value="mois">{{ $t('parMois') }}</option>
                <option class="text-black" value="2mois">{{ $t('parDemiMois') }}</option>
                <option class="text-black" value="bi-semaine">{{ $t('par2Semaine') }}</option>
                <option class="text-black" value="semaine">{{ $t('parSemaine') }}</option>
              </select>
            </span>
        </div>
        <Button @click="
          (e) => {
            submit(e);
          }
        "
                class="self-center mb-8 mt-4"
                type="button"
        >Calculer
        </Button>
      </figure>
      <div class="mx-2 mb-12 md:m-16">
        <Titre>{{ $t('apercuCalculs') }}</Titre>
        <table class="calcApercu max-w-full">
          <thead>
          <tr class="w-full">
            <th class="text-sm lg:text-lg bg-primary font-[600] text-left">{{ $t('category') }}</th>
            <td class="text-sm lg:text-lg bg-primary font-[600] break-words">{{ $t('amortissement') }}</td>
          </tr>
          </thead>
          <tbody class="text-sm">
          <tr class="">
            <td>{{ $t('nombreVersements') }}</td>
            <td>{{ duree }}</td>
          </tr>
          <tr class="">
            <td>{{ $t('versementHypothecaire') }}</td>
            <td>{{ CADollar.format(versementMensuel) }}</td>
          </tr>
          <tr class="">
            <td>{{ $t('capitalPayment') }}</td>
            <td>{{ CADollar.format(paiementCapital) }}</td>
          </tr>
          <tr class="">
            <td>{{ $t('paiementInteret') }}</td>
            <td>{{ CADollar.format(paiementFraisInteret) }}</td>
          </tr>
          <tr class="">
            <td>{{ $t('coutTotal') }}</td>
            <td>{{ CADollar.format(prixTotale) }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </Section>
    <div class="max-w-[1200px] flex justify-center px-4 md:px-2 pb-8 mx-auto">
      <h3 id="importantCalcul" class="text-center text-sm" >{{ $t('cautionTextCal') }}</h3>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Section from "~/components/elements/Section.vue";
import Button from "~/components/elements/Button.vue";
import Titre from "~/components/elements/Titre.vue";
import {ref} from "vue";
const { t, locale  } = useI18n();



useSeoMeta({
  title: "Obtenez une calcul approximative sur votre prêt hypothécaire | Tristan Barbeau",
  description: "Les services professionnels proposés par le courtier immobilier Tristan Barbeau. " +
      "Touts ce qui est associé aux processus d'achat, de vente et de location de biens immobiliers."
});


let mois = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let annees = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

Intl.NumberFormat();
let CADollar = new Intl.NumberFormat("fr-CA", {
  style: "currency",
  currency: "CAD",
});

let versementMensuel = ref(0);
let pretHypothec: number = 250000;
let tauxInteret: number = 5;

// Periode d'ammortissement
let ammortisAnnees: number = 25;
let ammortisMois: number = 0;
let duree: number = 0;

// Chaque mois / semaine / 2 semaine / demi-mois
let freqVersement: string = "mois";



// ----------- Les calculs -------------------
let prixTotale = ref(0);
let paiementCapital = ref(0);
let paiementFraisInteret = ref(0);
let dureePaiement = ref(12);

const submit = (e: any) => {
  dureePaiement.value =
      (freqVersement == '2mois') ? 6 :
          (freqVersement == 'semaine') ? 54 :
              (freqVersement == 'bi-semaine') ? 27 : 12;

  duree = ammortisAnnees * dureePaiement.value + ammortisMois;
  prixTotale.value = versementMensuel.value * duree;
  versementMensuel.value = calculerInteret(pretHypothec, tauxInteret, duree);

  prixTotale.value = versementMensuel.value * duree;
  paiementFraisInteret.value = versementMensuel.value * duree - pretHypothec;

  paiementCapital.value = prixTotale.value - paiementFraisInteret.value;
};

const calculerInteret = (pret: number, taux: number, time: number) => {
  // (1 + taux/100)^duree
  let a = 1 + (taux / 100 / dureePaiement.value);
  let pow = Math.pow(a, -time);

  let upperCalc = (pret * (taux / 100) / dureePaiement.value)
  return upperCalc / (1 - pow);
};
</script>

<style scope>
.calcApercu td {
  border: 1px var(--color_primary) solid;
  padding: 10px 15px;
}
</style>