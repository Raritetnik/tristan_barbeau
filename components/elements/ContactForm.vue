<template>
  <div class="p-8 flex flex-col gap-4 w-full">
    <Titre>{{ $t('contactTitle') }}</Titre>
      <figure :class="{ messageSent: !isSent}" class="flex flex-col justify-center text-center">
        <h2 class="text-xl">{{ $t('thanksContact') }}</h2>
        <p>{{ $t('contactBack') }}</p>
      </figure>
      <form v-on:submit.prevent :class="{ messageSent: isSent}" class="formulaire flex flex-col w-full gap-5" netlify>
        <div class="grid gap-6 grid-cols-2">
              <span class="flex flex-col w-full">
                <label for="prenom"
                >{{$t('prenom')}}: <br/>
                  <input id="prenom" v-model="prenom" class="w-full text-black" name="prenom" type="text"
                  /></label>
              </span>
          <span class="flex flex-col w-full">
                <label for="nom"
                >{{$t('nom')}}: <br/>
                  <input id="nom" v-model="nom" class="w-full text-black" name="nom"
                         type="text"/></label>
              </span>
        </div>
        <div class="grid gap-6 grid-cols-2">
              <span class="flex flex-col w-full">
                <label for="courriel"
                >{{$t('courriel')}}: <br/>
                  <input id="courriel" v-model="email" class="w-full text-black" name="courriel" type="email"
                  /></label>
              </span>
          <span class="flex flex-col w-full">
                <label for="telephone"
                >{{$t('phone')}}: <br/>
                  <input id="telephone" v-model="phone" class="w-full text-black" name="telephone" type="tel"
                  /></label>
              </span>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 w-full">
          <div class="flex flex-col gap-2 border-e-2 border-primary lg:col-span-2">
            <span>{{$t('dispo')}}</span>
            <span class="grid grid-cols-2 gap-4">
              <label v-for="item in listeDispos" :for="item.id" class="form-control"
              ><input :id="item.id" v-model="checkedItems" :name="item.id" :value="item.titre" type="checkbox"/>
                {{ item.titre }}</label>
            </span>
          </div>
          <div class="flex flex-col gap-2 px-4">
            <span>{{ $t('recherche') }}</span>
            <span class="grid grid-cols-1 gap-4">
              <label class="form-control"
              ><input v-model="checkedItems" :name="action" type="radio" value="Acheter" checked />{{$t('achat')}}</label>
              <label class="form-control"
              ><input v-model="checkedItems" :name="action" type="radio" value="Vendre"/>{{$t('vendre')}}</label>
            </span>
          </div>
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
        <input type="text" v-model="honeypot" name="honeypot" style="display:none">
        <Button class="self-start" @click="(e) => {sendMessage(e)}">{{ $t('envoyerMessage') }}</Button>
      </form>
  </div>
</template>
<script lang="ts" setup>
import Titre from "~/components/elements/Titre.vue";
import Button from "~/components/elements/Button.vue";
const { t, locale  } = useI18n();
const listeDispos = [{
  titre: t('matin'),
  id: 'matinDisp'
}, {
  titre: t('midi'),
  id: 'midiDisp'
}, {
  titre: t('soir'),
  id: 'soirDisp'
}, {
  titre: t('finSemaine'),
  id: 'finSemDisp'
},]

let checkedItems = ref([]);
let nom = "";
let prenom = '';
let email = '';
let message = "";
let phone = "";
let dispos = '';
let honeypot = '';
let action = '';

let isSent = ref(false);
const sendMessage = async (e: any) => {
  isSent.value = !isSent.value;
  dispos = checkedItems.value.toString();


  await fetch("https://profound-tapioca-02197b.netlify.app/api/contact", {
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
      honeypot: honeypot,
      action: action,
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