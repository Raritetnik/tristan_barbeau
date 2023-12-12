<template>
  <NuxtLayout>
      <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s !important;
}

.page-enter-from,
.page-leave-to {
  opacity: 0 !important;
  filter: blur(1rem) !important;
}
</style>

<style>
:root {
  --color_primary: #c4971c;
}

body {
  background-color: black;
}

* {
  font-family: "Poppins", sans-serif;
  color: white;
}

.decor-text {
  font-family: "Dancing Script", cursive;
  letter-spacing: .1rem;
}

</style>
