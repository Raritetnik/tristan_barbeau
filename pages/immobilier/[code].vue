<template>
  <Section>
    <div v-if="pending">
      <NuxtLoadingIndicator />
    </div>
    <div v-else class="py-20 px-8">
      <figure class="grid grid-cols-4 w-full">
        <div class="col-span-3 bg-white py-3 px-6 flex justify-between">
          <span>
            <h2 class="text-black text-2xl">{{ house['Type'] }}</h2>
            <p class="text-gray-800" >{{house['Address'] }}</p>
            <p class="text-gray-800" >MLS® Number: {{ house['code'] }}</p>
          </span>
          <h2 class="text-primary text-3xl">{{ house['Active price'].toLocaleString('fr-CA', { style: 'currency', currency: 'CAD'}) }}</h2>
        </div>
        <div class="col-span-1 bg-primary flex items-center justify-center py-3 px-6">
          <button>Contact Tristan Barbeau</button>
        </div>
      </figure>
      <div class="grid lg:grid-cols-2 gap-2 ">
        <img
                 loading="lazy"
                 :src="house['imageURL'][0]" class="object-cover w-full min-h-full" />
        <div class="grid  grid-cols-2 grid-rows-2 gap-2">
          <img v-for="image in house['imageURL'].slice(1,5)" loading="lazy" :placeholder="[600, 400]" class="object-cover w-full" :src="image" />
        </div>
      </div>
    </div>
  </Section>
  <Section class="max-h-none">
    <div class="w-full px-8 py-20">
      <Titre>Features</Titre>
      <div class="grid grid-cols-2 md:grid-cols-4 h-full gap-x-12">
        <span v-for="info in infoToDisplay">
          <h3 class="text-xl font-bold pb-2">{{ info.name }}</h3>
          <p>{{ house[info.link] }}</p>
        </span>
      </div>
    </div>
  </Section>
</template>

<script lang="ts" setup>
import Section from "~/components/elements/Section.vue";
import Titre from "~/components/elements/Titre.vue";

const { code } = useRoute().params;
const {pending, data: house } = await useLazyAsyncData('house', () => $fetch('/api/house', {
  params: {
    houseId: code,
  }
}));

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
</script>