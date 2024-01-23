<template>
  <div>
    <div v-if="pending">
      <NuxtLoadingIndicator />
    </div>
    <div v-else >
      <Section>
        <div class="pt-20 px-8 flex flex-col">
          <figure class="grid grid-cols-4 w-full relative">
            <div class="col-span-3 bg-white py-3 px-6 flex flex-col lg:flex-row justify-between border-[1px] border-primary">
              <span class="flex flex-col">
                <h2 class="text-black text-2xl">{{ house['Action'] }}</h2>
                <p class="text-gray-800" >{{house['Address'] }}</p>
                <p class="text-gray-800" >MLS® Number: {{ house['code'] }}</p>
              </span>
              <h2 class="text-primary text-3xl">{{ house['Active price'].toLocaleString('fr-CA', { style: 'currency', currency: 'CAD'}) }}</h2>
            </div>
            <div @click="openContactMenu" class="col-span-1 bg-[#E4E4E4] flex flex-col md:flex-row gap-2 items-center justify-center md:justify-between py-3 px-6 border-primary border-[1px] cursor-pointer relative">
              <button class="text-primary text-bold">Contact Tristan Barbeau</button>
              <img src="/assets/images/_.png" alt="arrow down" class="arrow" :class="{rotateArrow: isDropped}">
            </div>
            <div :class="{contactMenuIsOpen: isDropped}" class="contactMenu absolute top-full right-0 bg-white">
              <ul class="text-black contMenu text-right">
                <li class="px-6 py-2"><NuxtLink to="tel:5147065569">(514) 706 - 5569</NuxtLink></li>
                <li class="px-6 py-2"><NuxtLink to="mailto:">tristanbarbeau@gmail.com</NuxtLink></li>
                </ul>
            </div>
          </figure>
          <div class="grid lg:grid-cols-2 gap-2" @click="e => openImageLightbox(e)">
            <NuxtImg loading="lazy"
                     :src="house['imageURL'][0]" class="border-[1px] border-primary object-cover h-full w-full min-h-full aspect-[6/4]" alt="Primary image" />
            <div class="grid grid-cols-2 lg:grid-rows-2 gap-2">
              <NuxtImg v-if="house['imageURL'].length >= 2" v-for="image in house['imageURL'].slice(1,5)" loading="lazy" class="border-[1px] border-primary object-cover h-full w-full" :src="image" alt="Secondary image" />
            </div>
          </div>
          <a class="self-end mt-4" :href="house['CentrisBtnLink']" target="_blank"><Button>{{ $t('btnCentris') }}</Button></a>
        </div>
      </Section>
      <Section class="max-h-none">
        <div class="w-full px-8 pb-2">
          <span class="flex justify-between items-center mb-6">
          <Titre>{{ $t('features') }}</Titre>
            </span>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-10">
            <span v-for="info in infoToDisplay">
              <h3 class="text-xl font-bold pb-2">{{ info.name }}</h3>
              <p>{{ house[info.link] }}</p>
            </span>
          </div>
        </div>
      </Section>

      <section :class="{close: isClosed}" class="fixed top-0 left-0 z-[3] w-[100vw] h-[100vh] bg-[rgba(0,0,0,.6)] flex items-center justify-center" >
        <div class="bg-white p-5 lg:p-8 flex flex-col relative pb-28 pt-10 lg:py-8 lg:px-28">
          <img @click="toPrevImage()" class="absolute left-2 bottom-0 lg:top-1/2 lg:-translate-y-1/2" width="100" height="100" src="https://img.icons8.com/ios/100/circled-left-2.png" alt="circled-left-2"/>
          <button class="absolute right-0 top-0" @click="closeLightBox" >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 30 30">
              <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
            </svg>
          </button>
          <img class="max-h-[400px] lg:max-h-[800px]" :src="lightBoxUrl" alt="Lightbox image">
          <img @click="toNextImage()" width="100" class=" lg:w-[100px] rotate-180 absolute right-2 lg:-translate-y-1/2 bottom-0 lg:top-1/2" height="100" src="https://img.icons8.com/ios/100/circled-left-2.png" alt="circled-left-3"/>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Section from "~/components/elements/Section.vue";
import Titre from "~/components/elements/Titre.vue";
import Button from "~/components/elements/Button.vue";

useSeoMeta({
  title: "Propriété en vente | Tristan Barbeau",
  description: "Les services professionnels proposés par le courtier immobilier Tristan Barbeau. " +
      "Touts ce qui est associé aux processus d'achat, de vente et de location de biens immobiliers."
});

var lightBoxUrl = ref('');
var isClosed = ref(true);
const { code } = useRoute().params;
let isDropped = ref(true);
let imageIndex = ref(0);

const {pending, data: house } = await useLazyAsyncData('house', () => $fetch('https://api.npoint.io/d5caf2471c4e98a07de7', {
  params: {
    houseId: code,
  }
}).then(jsonData => {
  const result = jsonData['liste'].filter(event => {
        return event.code == code;
  })
  lightBoxUrl.value = result[0]['imageURL'][0];
  return result[0]
}));


const infoToDisplay = [
  {name: "Code Centris", link: "code"},
  {name: "Année de construction", link: "BuildYear"},
  {name: "Installations", link: "Facilities"},
  {name: "Stationnement", link: "Parking"},
  {name: "Pièces", link: "Rooms"},
  {name: "Chambres", link: "Chambres"},
];

const toNextImage =() => {
  let currentIndex = house.value.imageURL.indexOf(lightBoxUrl.value);

  if(currentIndex != house.value.imageURL.length-1) {
    lightBoxUrl.value = house.value.imageURL[++currentIndex];
  } else {
    lightBoxUrl.value = house.value.imageURL[0];
  }
}

const toPrevImage =() => {
  let currentIndex = house.value.imageURL.indexOf(lightBoxUrl.value);

  if(currentIndex != 0) {
    lightBoxUrl.value = house.value.imageURL[--currentIndex];
  } else {
    lightBoxUrl.value = house.value.imageURL[house.value.imageURL.length-1];
  }
}

const openImageLightbox = (e: any) => {
  lightBoxUrl.value = e.target.src;
  imageIndex.value = house.value.imageURL.indexOf(lightBoxUrl.value);
  console.log(imageIndex);
  isClosed.value = false;
}

const openContactMenu = () => {
  isDropped.value = !isDropped.value;
}
const closeLightBox = () => {
  isClosed.value = true;
}

</script>

<style setup>
.close {
  display: none !important;
}

.contMenu li{
  color: black;
}
.contMenu li:hover{
  background-color: #c4971c;
  color: white;
}

.contactMenuIsOpen {
  transform: scaleY(0);
}

.contactMenu {
  transition: all .2s linear;
  transform-origin: top right;
}

.rotateArrow {
  transform: rotate(180deg);
}

.arrow {
  transition: all .2s linear;
}

</style>