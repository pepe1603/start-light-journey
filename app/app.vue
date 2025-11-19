<template>
  <UApp>
    <NuxtLoadingIndicator />
    <NuxtRouteAnnouncer />

    <client-only>
      <FlowerRain />
    </client-only>

    <NuxtPage />

    <AudioControl />
    <UToast />
  </UApp>
</template>

<script setup lang="ts">
</script>
