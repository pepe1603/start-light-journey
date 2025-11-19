<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const message = "Cada instante contigo es único 💖"
</script>

<template>
  <div class="min-h-screen relative flex flex-col items-center justify-center text-center px-6">

    <!-- Sparkles flotantes -->
    <span class="sparkle absolute top-10 left-1/4 text-xl">✨</span>
    <span class="sparkle absolute top-1/2 right-1/3 text-2xl">✨</span>
    <span class="sparkle absolute bottom-20 left-2/3 text-xl">✨</span>
    <span class="sparkle absolute bottom-1/3 right-1/4 text-3xl">✨</span>

    <!-- Mensaje central -->
    <h1 class="text-5xl md:text-6xl font-extrabold text-pink-400 typewriter glow max-w-fit">
      {{ message }}
    </h1>

    <!-- Botón para continuar al final -->
    <UButton
      class="mt-12 px-12 py-4 animate-bounce"
      @click="router.push('/final')"
    >
      Continuar ✨
    </UButton>

  </div>
</template>

