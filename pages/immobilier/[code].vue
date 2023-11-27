<template>
  <div>
    <div v-if="pending">
      <NuxtLoadingIndicator />
    </div>
    <div v-else >
      <Section>
        <div class="py-20 px-8">
          <figure class="grid grid-cols-4 w-full">
            <div class="col-span-3 bg-white py-3 px-6 flex justify-between">
              <span>
                <h2 class="text-black text-2xl">{{ house['Type'] }}</h2>
                <p class="text-gray-800" >{{house['Address'] }}</p>
                <p class="text-gray-800" >MLS® Number: {{ house['code'] }}</p>
              </span>
              <h2 class="text-primary text-3xl">{{ house['Active price'].toLocaleString('fr-CA', { style: 'currency', currency: 'CAD'}) }}</h2>
            </div>
            <NuxtLink to="/contact" class="col-span-1 bg-primary flex items-center justify-center py-3 px-6">
              <button>Contact Tristan Barbeau &#8599</button>
            </NuxtLink>
          </figure>
          <div class="grid lg:grid-cols-2 gap-2" @click="e => openImageLightbox(e)">
            <img loading="lazy"
                     :src="house['imageURL'][0]" class="object-cover w-full min-h-full aspect-[6/4]" alt="Primary image" />
            <div class="grid  grid-cols-2 grid-rows-2 gap-2">
              <img v-if="house['imageURL'].length >= 2" v-for="image in house['imageURL'].slice(1,5)" loading="lazy" class="object-cover w-full" :src="image" alt="Secondary image" />
            </div>
          </div>
        </div>
      </Section>
      <Section class="max-h-none">
        <div class="w-full px-8 py-20">
          <span class="flex justify-between items-center mb-6">
          <Titre>Features</Titre>
          <Button>Voir sur site Centris</Button>
            </span>
          <div class="grid grid-cols-2 md:grid-cols-4 h-full gap-x-12">
            <span v-for="info in infoToDisplay">
              <h3 class="text-xl font-bold pb-2">{{ info.name }}</h3>
              <p>{{ house[info.link] }}</p>
            </span>
          </div>
        </div>
      </Section>

      <section :class="{close: isClosed}" class="fixed top-0 left-0 z-[3] w-[100vw] h-[100vh] bg-[rgba(0,0,0,.6)] flex items-center justify-center" >
        <div class="bg-white p-8 flex flex-col relative">
          <button class="absolute right-0 top-0" @click="closeLightBox" >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
              <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
            </svg>
          </button>
          <img :src="lightBoxUrl" alt="Lightbox image">
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Section from "~/components/elements/Section.vue";
import Titre from "~/components/elements/Titre.vue";
import Button from "~/components/elements/Button.vue";

var lightBoxUrl = ref('');
var isClosed = ref(true);
const { code } = useRoute().params;
const {pending, data: house } = await useLazyAsyncData('house', () => $fetch('/api/house', {
  params: {
    houseId: code,
  }
}).then(jsonData => {
  lightBoxUrl.value = jsonData['imageURL'][0];
  return jsonData}));

/*
<NuxtImg loading="lazy"
                 :src="house['imageURL'][0]" class="object-cover w-full min-h-full" />
        <div class="grid  grid-cols-2 grid-rows-2 gap-2">
          <NuxtImg v-for="image in house['imageURL'].slice(1,5)" loading="lazy" :placeholder="[600, 400]" class="object-cover w-full" :src="image" />
        </div>
 */

const infoToDisplay = [
  {name: "Use of property", link: "code"},
  {name: "Building style", link: "Type"},
  {name: "Year built", link: "Date Listed"},
  {name: "Building area (at ground level)", link: "Address"},
  {name: "Lot area", link: "Zoning"},
  {name: "Parking (total)", link: "IsStatusActive"},
  {name: "Number of units", link: "Coordinates"},
  {name: "Residential units", link: "Date Listed"},
  {name: "Main unit", link: "Type"},
  {name: "Potential gross revenue", link: "Type"},
  {name: "Additional features", link: "Address"},
];

const openImageLightbox = (e: any) => {
  lightBoxUrl.value = e.target.src;
  isClosed.value = false;
}

const closeLightBox = () => {
  isClosed.value = true;
}

</script>

<style setup>
.close {
  display: none !important;
}
</style>