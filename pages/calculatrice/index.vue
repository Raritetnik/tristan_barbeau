<template>
  <Section class="py-[60px]">
    <div class="border-primary border-2 flex flex-col lg:flex-row">
      <figure class=" lg:max-w-[500px] m-16">
        <div class="text-white flex flex-col">
          <Titre>Versement régulier</Titre>
          <span class="flex flex-col w-full"
          ><label for="pretHypot">Montant du prêt hypothécaire:</label>
          <input
              id="pretHypot"
              v-model="pretHypothec"
              class="w-full"
              max="{1000000}"
              min="{10000}"
              name="pretHypot"
              type="number"
          /></span>
          <div class="grid grid-cols-2 gap-6">
        <span class="flex flex-col w-full"
        ><label for="tauxInteret">Taux d'intéret</label>
            <input
                id="tauxInteret"
                v-model="tauxInteret"
                max="{30}"
                min="{0.01}"
                name="tauxInteret"
                step="{0.01}"
                type="number"
            /></span>
            <span class="flex flex-col w-full"
            ><label for="amortissement">Période d'amortissement:</label>
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
                    {{ annee }} ans
                  </option>
                </select>
                <select
                    id="ammortisMois"
                    v-model="ammortisMois"
                    class="text-black"
                    name="ammortisMois"
                >
                  <option v-for="m in mois" :value="m" class="text-black">
                    {{ m }} mois
                  </option>
                </select>
              </span>
            </span>
          </div>
        </div>
        <div class="flex gap-2 items-end">
            <span class="flex flex-col w-full"
            ><label for="freqVersement">Fréquence des versements:</label>
              <select
                  id="freqVersement"
                  v-model="freqVersement"
                  class="text-black"
                  name="freqVersement"
              >
                <option class="text-black" value="mois">Par mois</option>
                <option class="text-black" value="demi-semaine">
                  Par semaine
                </option>
                <option class="text-black" value="bi-semaine">
                  Aux 2 semaine
                </option>
                <option class="text-black" value="semaine">Par semaine</option>
              </select>
            </span>
        </div>
        <Button :onclick="
          (e) => {
            submit(e);
          }
        "
                class="self-center mb-8 mt-4"
                type="button"
        >Calculer
        </Button>
      </figure>
      <div class="m-16">
        <Titre>Aperçu des calculs</Titre>
        <table class="calcApercu w-full">
          <thead>
          <tr class="w-full">
            <th class="w-1/3 bg-primary font-bold text-left">Catégorie</th>

            <td class="w-1/3 bg-primary font-bold">Période d’amortissement</td>
          </tr>
          </thead>
          <tbody>
          <tr class="">
            <td>Nombre de versements</td>
            <td>{{ duree }}</td>
          </tr>
          <tr class="">
            <td>Versement hypothécaire</td>
            <td>{{ CADollar.format(versementMensuel) }}</td>
          </tr>
          <tr class="">
            <td>Remboursement anticipé</td>
            <td>--</td>
          </tr>
          <tr class="">
            <td>Paiement de capital</td>
            <td>{{ CADollar.format(paiementCapital) }}</td>
          </tr>
          <tr class="">
            <td>Paiement de frais d’intérêt</td>
            <td>{{ CADollar.format(paiementFraisInteret) }}</td>
          </tr>
          <tr class="">
            <td>Coût total</td>
            <td>{{ CADollar.format(prixTotale) }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </Section>
</template>
<script lang="ts" setup>
import Section from "~/components/elements/Section.vue";
import Button from "~/components/elements/Button.vue";
import Titre from "~/components/elements/Titre.vue";
import {ref} from "vue";

let termes = [2, 3, 4, 5, 6, 7, 8, 9, 10];
let mois = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let annees = [
  2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

Intl.NumberFormat();
let CADollar = new Intl.NumberFormat("fr-CA", {
  style: "currency",
  currency: "CAD",
});

let versementMensuel: number = ref(0);
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


const submit = (e: any) => {
  duree = ammortisAnnees * 12 + ammortisMois;
  prixTotale.value = versementMensuel.value * duree;
  versementMensuel.value = calculerInteret(pretHypothec, tauxInteret, duree);

  prixTotale.value = versementMensuel.value * duree;
  paiementFraisInteret.value = versementMensuel.value * duree - pretHypothec;

  paiementCapital.value = prixTotale.value - paiementFraisInteret.value;
};

const calculerInteret = (pret: number, taux: number, time: number) => {
  // (1 + taux/100)^duree
  let a = 1 + (taux / 100 / 12);
  let pow = Math.pow(a, -time);

  let upperCalc = (pret * (taux / 100) / 12)
  return upperCalc / (1 - pow);
};
</script>