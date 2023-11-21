<template>
  <div class="p-8 flex flex-col gap-4 w-full">
    <Titre>Contactez-moi</Titre>
    <figure :class="{ messageSent: !isSent}" class="flex flex-col justify-center text-center">
      <h2 class="text-xl">Merci de m'avoir contacter !</h2>
      <p>Je vous rappele dès que possible !</p>
    </figure>
    <figure :class="{ messageSent: isSent}" class="formulaire flex flex-col w-full gap-5">
      <div class="grid gap-6 grid-cols-2">
            <span class="flex flex-col w-full">
              <label for="prenom"
              >Prénom: <br/>
                <input id="prenom" v-model="prenom" class="w-full text-black" name="prenom" type="text"
                /></label>
            </span>
        <span class="flex flex-col w-full">
              <label for="nom"
              >Nom: <br/>
                <input id="nom" v-model="nom" class="w-full text-black" name="nom"
                       type="text"/></label>
            </span>
      </div>
      <div class="grid gap-6 grid-cols-2">
            <span class="flex flex-col w-full">
              <label for="courriel"
              >Courriel: <br/>
                <input id="courriel" v-model="email" class="w-full text-black" name="courriel" type="email"
                /></label>
            </span>
        <span class="flex flex-col w-full">
              <label for="telephone"
              >Téléphone: <br/>
                <input id="telephone" v-model="phone" class="w-full text-black" name="telephone" type="tel"
                /></label>
            </span>
      </div>
      <div class="flex gap-6 ">
            <span class="grid grid-cols-2 md:flex gap-4 md:flex-row">
              <label v-for="item in listeDispos" :for="item.id" class="form-control"
              ><input :id="item.id" v-model="checkedItems" :name="item.id" :value="item.titre" type="checkbox"/>
                {{ item.titre }}</label>
            </span>
      </div>
      <label for="message"
      >Message: <br/>
        <textarea
            id="message"
            v-model="message"
            class="w-full min-h-[120px] text-black"
            name="message"
        />
      </label>
      <Button class="self-start" @click="(e) => {sendMessage(e)}">Envoyer message</Button>
    </figure>
  </div>
</template>
<script lang="ts" setup>
import Titre from "~/components/elements/Titre.vue";
import Button from "~/components/elements/Button.vue";

const listeDispos = [{
  titre: 'Matin',
  id: 'matinDisp'
}, {
  titre: 'Après midi',
  id: 'midiDisp'
}, {
  titre: 'Soir',
  id: 'soirDisp'
}, {
  titre: 'Fin de semaine',
  id: 'finSemDisp'
},]

let checkedItems = ref([]);
let nom = "";
let prenom = '';
let email = '';
let message = "";
let phone = "";
let dispos = '';


let products = ref(null);
let isSent = ref(false);
const sendMessage = (e: any) => {
  const form = document.querySelector('.formulaire');
  isSent.value = !isSent.value;
  dispos = checkedItems.value.toString();
  fetch("http://localhost:3020/mailContact", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      message: message,
      name: prenom + ' ' + nom,
      phone: phone,
      dispos: dispos,
    })
  }).then(res => res.json())
      .then(res => console.log(res));
}
</script>

<style scoped>
.messageSent {
  display: none;
}
</style>