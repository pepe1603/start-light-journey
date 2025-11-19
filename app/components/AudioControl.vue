<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAudioStore } from '~/store/audio'

const audioStore = useAudioStore()
const toast = useToast()

// ref local del audio
const audioEl = ref<HTMLAudioElement | null>(null)

onMounted(async () => {
  if (!audioEl.value) return

  // Guardamos referencia en el store
  audioStore.setAudioRef(audioEl.value)

  // Configuración inicial
  audioEl.value.loop = true
  audioEl.value.volume = 0.5
  audioEl.value.muted = true

  // Intentamos autoplay
  try {
    await audioEl.value.play()
    audioStore.audioActive = true
    audioEl.value.muted = false
    toast.add({ 
      title: 'Música reproducida automáticamente', 
      color: 'success', 
      duration: 4000,
      icon: 'i-lucide-music' // ✅ Icono en lugar de emoji
    })
  } catch {
    audioStore.audioActive = false
    toast.add({ 
      title: 'Haz clic en el botón para activar el sonido', 
      color: 'warning', 
      duration: 6000,
      icon: 'i-lucide-alert-triangle' // ✅ Icono de advertencia
    })
  }
})

const handleToggle = async () => {
  if (!audioEl.value) return

  if (audioEl.value.paused) {
    try {
      await audioEl.value.play()
      audioStore.audioActive = true
      toast.add({ 
        title: 'Música activada', 
        color: 'success', 
        duration: 4000, 
        icon: 'i-lucide-volume-2' // ✅ Icono de volumen
      })
    } catch {
      toast.add({ 
        title: 'No se pudo reproducir el audio', 
        color: 'warning', 
        duration: 4000,
        icon: 'i-lucide-alert-circle' // ✅ Icono de error
      })
    }
  } else {
    audioEl.value.pause()
    audioStore.audioActive = false
    toast.add({ 
      title: 'Música pausada', 
      color: 'info', 
      duration: 4000,
      icon: 'i-lucide-volume-x' // ✅ Icono de mute
    })
  }
}
</script>

<template>
  <div>
    <client-only>
      <audio ref="audioEl">
        <source src="/audio/sound_background.m4a" type="audio/mp4" />
        <source src="/audio/sound_background.aac" type="audio/aac" />
      </audio>
    </client-only>

    <UButton
      size="lg"
      variant="outline"
      color="info"
      :icon="audioStore.audioActive ? 'lucide-volume-2' : 'lucide-volume-x'"
      class="fixed bottom-6 right-6 rounded-full p-4 shadow-lg z-50"
      @click="handleToggle"
    />
  </div>
</template>
