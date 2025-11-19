<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStory } from '~/composables/useStory'

const router = useRouter()
const { herName } = useStory()

// Modal abierto/cerrado
const openModal = ref(false)

// Número de WhatsApp ingresado por el usuario
const whatsappNumber = ref('')

// Funciones
const restart = () => router.push('/')

// Abrir modal
const showModal = () => openModal.value = true

// Cerrar modal
const closeModal = () => openModal.value = false

// Enviar mensaje
const sendMessage = () => {
  if (!whatsappNumber.value) {
    alert('Por favor ingresa un número válido 😅')
    return
  }
  const url = `https://wa.me/${whatsappNumber.value}?text=${encodeURIComponent(`¡Hola! ${herName} me ha enviado un mensaje 💖`)}`
  window.open(url, '_blank')
  closeModal()
}
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center fade-in relative">

    <h1 class="text-4xl md:text-5xl font-bold text-pink-300 mb-6 typewriter max-w-fit">
      Gracias {{ herName }} 💖
    </h1>

    <p class="text-lg md:text-xl text-white/80 mb-10 slide-up max-w-xl mx-auto leading-relaxed">
      Cada momento de este viaje contigo ha sido mágico 🌸✨  
      Espero que hayas disfrutado tanto como yo 💕  
      ¡Eres increíble y muy especial!
    </p>

    <div class="flex flex-col md:flex-row gap-6 mt-6 z-10">
      <UButton color="neutral" size="lg"  @click="restart()">
        Volver a empezar
      </UButton>

      <UButton color="success" size="lg"  @click="showModal()">
        Enviar mensaje
      </UButton>
    </div>

    <!-- Modal Nuxt UI -->
    <UModal v-model:open="openModal" title="Enviar mensaje por WhatsApp" description="Ingresa el número al que quieres enviar el mensaje" :ui="{ footer: 'justify-end' }">
      
      <template #body>
        <UInput
          v-model="whatsappNumber"
          placeholder="Ej: 5211234567890"
          type="text"
          class="w-full mb-4"
        />
      </template>

      <template #footer="{ close }">
        <UButton label="Cancelar" color="neutral" variant="outline" @click="close" />
        <UButton label="Enviar 💌" color="success" @click="sendMessage" />
      </template>
    </UModal>

    <!-- Confeti romántico -->
    <div class="absolute inset-0 pointer-events-none">
      <span class="confetti absolute top-10 left-1/4"></span>
      <span class="confetti absolute top-32 right-1/3"></span>
      <span class="confetti absolute bottom-20 left-1/2"></span>
      <span class="confetti absolute top-1/2 right-1/4"></span>
    </div>

  </div>
</template>
