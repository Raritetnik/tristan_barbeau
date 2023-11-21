<template>
  <article :key="one.house['code']"
           class="cardHouse bg-white flex flex-col justify-between border-primary border-[1px]">
    <LazyNuxtImg :src="one.house['imageURL']" alt="Image maison" class="bg-white h-[200px] object-cover" height="200"
                 loading="lazy"/>
    <div class="border-t-2 border-primary p-6 pb-0 h-full flex flex-col gap-2">
      <h2 class="text-3xl text-primary">{{ one.house['Active price'] }}</h2>
      <h3>{{ one.house['Address'] }}</h3>
      <h3>MLS® Number: {{ one.house.code }}</h3>
    </div>
    <Button class="self-end mb-4 mr-6">Voir plus</Button>
  </article>
</template>
<script lang="ts">
import Section from "~/components/elements/Section.vue";
import Button from "~/components/elements/Button.vue";

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

