<template>
  <NuxtLayout>
    <NuxtLoadingIndicator/>
    <NuxtPage/>
  </NuxtLayout>
</template>

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

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
