<template>
  <Section class="min-h-[500px]">
    <div class="flex flex-col justify-center w-full">
      <div class="flex justify-between w-full px-8 pt-20 pb-8">
        <Titre>My listing</Titre>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-h-none px-16 pb-20">
        <div v-if="pendingHouses" class="">
          <NuxtLoadingIndicator/>
        </div>
        <CardHouse v-for="house in houses['liste']" v-else :one={house}></CardHouse>
      </div>
      <div class="flex flex-wrap max-w-4xl justify-center items-center gap-4 mb-10 self-center">
        <div v-if="pending" class="">
          <NuxtLoadingIndicator/>
        </div>
        <NuxtLink v-for="option in houses['pages']" v-else
                  :to="{ path: 'immobilier', query: { page: option }}"
                  @click="changePage(option)">
          <Button :class="{ activePage: pageNumber == option}">{{
              option
            }}
          </Button>
        </NuxtLink>
      </div>
    </div>
  </Section>
</template>
<script lang="ts" setup>
import Section from "~/components/elements/Section.vue";
import Titre from "~/components/elements/Titre.vue";
import CardHouse from "~/components/elements/CardHouse.vue";
import Button from "~/components/elements/Button.vue";

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
</style>