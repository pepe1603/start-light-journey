<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useStory } from '~/composables/useStory'
import { useAudioStore } from '~/store/audio'

const router = useRouter()
const { herName } = useStory()
const audioStore = useAudioStore()

const goToChapter1 = () => router.push('/chapter-1')
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center text-center gap-8 fade-in">
    <UCard class="w-96 bg-white/10 backdrop-blur-lg border border-pink-400/20 shadow-2xl rounded-3xl p-6 slide-up">
      <h2 class="text-4xl text-pink-300 font-bold mb-4">Hola, {{ herName }} 🌸</h2>
      <p class="text-base text-white/90 leading-relaxed">
        Qué bueno que estás aquí.
        Este pequeño recorrido lo hice pensando en ti
        —en tu vibra, tu sonrisa bonita
        y esa energía que hace que todo se sienta más suave ✨
        <br /><br />
        Solo déjate llevar… que esto va a ponerse lindo.
      </p>

      <UButton size="lg" class="mt-6 py-3 font-semibold" @click="goToChapter1()">
        Empezar historia
      </UButton>
    </UCard>

    <UAlert 
      v-if="!audioStore.audioActive" 
      description="Toca el botón de sonido para activar la música de fondo ✨"
      icon="i-lucide-volume-x" 
      color="warning" 
      variant="subtle"
      class="mt-6 max-w-md mx-auto rounded-2xl bg-white/10 backdrop-blur-md border border-pink-400/30 shadow-xl"
      :ui="{
        description: 'text-white/90 text-sm text-center',
        icon: 'text-pink-300 animate-pulse'
      }"
    />


  </div>
</template>
