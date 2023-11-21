<script lang="ts" setup>
defineProps(["isClosed", "closeMenu"]);
defineEmits(['update:isClosed', 'update:closeMenu']);

const menuList = [
  {option: "Accueil", lien: '/'},
  {option: "À propos", lien: '/a-propos'},
  {option: "Évaluation maison", lien: '/evaluation'},
  {option: "Contact", lien: '/contact'},
  {option: "Calculatrice", lien: '/calculatrice'},
  {option: "Immobiliére", lien: '/immobilier'},
]
</script>

<template>
  <nav :class="{ closeMenu: isClosed, openMenu: !isClosed }"
       class="menu z-[2] flex flex-col justify-center lg:absolute lg:-translate-y-1/2 lg:left-1/2 lg:-translate-x-1/2">
    <ul class="flex flex-col lg:flex-row lg:justify-between text-black text-center items-center">
      <li v-for="option in menuList" class="link">
        <NuxtLink :to="option.lien" class="lg:h-[60px] px-.5 lg:flex lg:items-center lg:justify-center"
                  @click="closeMenu()">{{ option.option }}
        </NuxtLink>
      </li>
    </ul>
    <h2 class="lg:hidden inline-block self-center bg-white rounded-full py-2 px-6 lg:me-4 border-black border-2 text-black text-lg lg:text-xl">
      514-555-2525</h2>
  </nav>
</template>


<style scoped>
@media (min-width: 1024px) {
  .menu {
    display: inline-block;
    background-color: white;
    border: 2px solid black;
    border-radius: 50px 50px 50px 50px;
  }

  .menu .link {
    display: flex;
    align-items: center;
    text-align: center;
    padding: 20px 20px;
    transition: background-color 0.5s,
    color 0.5s;
    border: 2px solid white;
    color: black;

    height: 100%;
  }

  .menu .link:hover {
    background-color: black !important;
    color: white !important;
    height: 100% !important;
  }

  .menu li:last-child {
    padding-right: 40px;
    border-radius: 0 50px 50px 0;
  }

  .menu li:first-child {
    padding-left: 40px;
    border-radius: 50px 0 0 50px;
  }

  .menu .link {
    display: flex;
    align-items: center;
    padding: 20px 20px;
    transition: background-color 0.5s,
    color 0.5s;
    border: 2px solid white;
    color: black;

    height: 100%;
  }

  .menu .link:hover,
  .menu li:hover {
    background-color: black;
    color: white;
  }

  .menu li {
    list-style: none;
    background-color: white;
  }
}

@media (max-width: 1024px) {
  .menu {
    transition: .2s ease-in-out;
  }

  .closeMenu {
    height: 0;
    transform: translateX(100%);
  }

  .openMenu {
    height: 100%;
    transform: translateX(0%);
  }
}

.menu ul {
  width: 100%;
}

.menu a {
  width: 100%;
}

.menu li,
.menu .link {
  width: 100%;
  text-align: center;
  padding: 5px 10px;
  transition: all .2s linear;
}

.menu .link:hover {
  background-color: white;
  color: black;
}


</style>