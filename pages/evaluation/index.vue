<template>
  <Section class="">
    <div class=" py-8 w-full flex flex-col items-center text-white justify-center">
      <div class="p-8 flex flex-col gap-4">
        <Titre>Vous voulez plus d'information?</Titre>
        <figure :class="{ messageSent: !isSent}" class="flex flex-col justify-center text-center">
          <h2 class="text-xl">Merci de m'avoir soumettre la demande d'évaluation !</h2>
          <p>Je vous rappele dès que possible !</p>
        </figure>
        <figure :class="{ messageSent: isSent}" class="formulaire flex flex-col w-full gap-5">
          <span class="flex flex-col ">
            <label for="telephone"
            >Adresse de votre propriété:<br/>
              <input id="telephone" v-model="adresse" class="w-full" name="telephone" type="text"
              /></label>
          </span>
          <span class="flex flex-col ">
            <label for="nom"
            >Votre nom complet:<br/>
              <input id="nom" v-model="nom" class="w-full" name="nom" type="text"
              /></label>
          </span>
          <span class="flex flex-col ">
            <label for="telephone"
            >Téléphone:<br/>
              <input id="telephone" v-model="phone" class="w-full" name="telephone" type="text"
              /></label>
          </span>
          <span class="flex flex-col ">
            <label for="courriel"
            >Courriel: <br/>
              <input id="courriel" v-model="email" class="w-full" name="courriel" type="text"
              /></label>
          </span>
          <Button class="self-start" @click="(e) => {sendMessage(e)}">Envoyer message</Button>
        </figure>
      </div>
    </div>
    <NuxtImg alt="Maison avec voiture" class="p-0 m-0 max-h-[700px] object-cover w-full"
             src="assets/images/jane-palash-KnXDtTbcZ8g-unsplash.webp"
             width="1356"/>
  </Section>
</template>
<script lang="ts" setup>
import Section from "~/components/elements/Section.vue";
import Titre from "~/components/elements/Titre.vue";
import Button from "~/components/elements/Button.vue";

let nom = "";
let email = '';
let phone = "";
let adresse = "";


let isSent = ref(false);
const sendMessage = (e: any) => {
  const form = document.querySelector('.formulaire');
  isSent.value = !isSent.value;

  /*fetch("http://localhost:3020/mailEvaluation", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      name: nom,
      phone: phone,
      adresse: adresse,
    })
  }).then(res => res.json())
      .then(res => console.log(res));*/
}
</script>

<style scoped>
.messageSent {
  display: none;
}
</style>