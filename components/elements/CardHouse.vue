<template>
  <article :key="one.house['code']"
           class="cardHouse bg-white flex flex-col justify-between border-primary border-[1px]">
    <img :src="one.house['imageURL'][0]" alt="Main house" class="bg-white h-[200px] object-cover" height="200"
                 loading="lazy" />
    <div class="border-t-2 border-primary p-6 pb-0 h-full flex flex-col gap-2">
      <h2 class="text-3xl text-primary">{{ one.house['Active price'].toLocaleString('fr-CA', { style: 'currency', currency: 'CAD'}) }}</h2>
      <h3>{{ one.house['Address'] }}</h3>
      <h3>MLS® Number: {{ one.house.code }}</h3>
    </div>
    <NuxtLink class="self-end mb-4 mr-6" :to="'/proprietes/'+one.house.code"><Button>{{ $t('details') }}</Button></NuxtLink>
  </article>
</template>
<script lang="ts">
import Section from "~/components/elements/Section.vue";
import Button from "~/components/elements/Button.vue";
/*
<NuxtImg :src="one.house['imageURL'][0]" alt="Image maison" class="bg-white h-[200px] object-cover" height="200"
                 loading="lazy" :placeholder="[400, 200]"/>
 */
export default {
  components: {Button, Section},
  props: {
    one: {
      type: Object,
      default: {}
    },
    methods: {}
  },
}
</script>

<style scoped>
.cardHouse h3,
.cardHouse h2 {
  color: black !important;
}
</style>

