<template>
  <UApp>
    <NuxtLoadingIndicator />
    <NuxtRouteAnnouncer />

    <client-only>
      <FlowerRain />
    </client-only>


    <NuxtPage />

    
  </UApp>
</template>

<style>
/* Página entra con suavidad */
.page-enter-active, .page-leave-active {
  transition: all 0.6s ease;
}

/* Aparece desde abajo */
.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

/* Desaparece hacia arriba */
.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}</style>