<template>
  <div>
  <Section class="min-h-[500px]">
    <div class="flex flex-col justify-center w-full">
      <div class="flex justify-between w-full px-8 pt-20 pb-8">
        <Titre>Liste des proprietés</Titre>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-h-none px-16 pb-20 appearsBlocks">
        <div v-if="pending">
          <NuxtLoadingIndicator/>
        </div>
        <CardHouse v-for="house in houses['liste']" v-else class="transition-all" :one={house}></CardHouse>
      </div>
      <div class="flex flex-wrap max-w-4xl justify-center items-center gap-4 mb-10 self-center">
        <div v-if="pending">
          <NuxtLoadingIndicator/>
        </div>
        <NuxtLink v-for="option in houses['pages']" v-else
                  :to="{ path: 'proprietes', query: { page: option }}"
                  @click="changePage(option)">
          <Button :class="{ activePage: pageNumber == option}">{{
              option
            }}
          </Button>
        </NuxtLink>
      </div>
    </div>
  </Section>
  </div>
</template>
<script lang="ts" setup>
import Section from "~/components/elements/Section.vue";
import Titre from "~/components/elements/Titre.vue";
import CardHouse from "~/components/elements/CardHouse.vue";
import Button from "~/components/elements/Button.vue";

useSeoMeta({
  title: "L'immobilier qui pourra vous intéresser! | Tristan Barbeau",
  description: "Les services professionnels proposés par le courtier immobilier Tristan Barbeau. " +
      "Touts ce qui est associé aux processus d'achat, de vente et de location de biens immobiliers."
});

const route = useRoute();
const numberOfPages = ref(5);
const pageNumber = ref((route.query.page) ? route.query.page : 1);

const {pending, data: houses, refresh} = await useLazyAsyncData('count', () => $fetch('/api/houses', {
  params: {
    page: pageNumber.value,
  }
}));


function changePage(num: number) {
  pageNumber.value = num;
  refresh();
}
</script>

<style scoped>
.activePage {
  background-color: #959495 !important;
}

.appearsBlocks {
  transition: all .2s linear;
}
</style>