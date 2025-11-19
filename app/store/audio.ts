import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAudioStore = defineStore('audio', () => {
  const audioRef = ref<HTMLAudioElement | null>(null)
  const audioActive = ref(false)

  const setAudioRef = (el: HTMLAudioElement | null) => {
    audioRef.value = el
  }

  const playAudio = async () => {
    if (!audioRef.value) return false
    audioRef.value.muted = true
    try {
      await audioRef.value.play()
      audioActive.value = true
      audioRef.value.muted = false
      return true
    } catch (e) {
      audioActive.value = false
      return false
    }
  }

  const toggleAudio = async () => {
    if (!audioRef.value) return false
    if (audioRef.value.paused) {
      await audioRef.value.play()
      audioActive.value = true
      return true
    } else {
      audioRef.value.pause()
      audioActive.value = false
      return false
    }
  }

  return { audioRef, audioActive, setAudioRef, playAudio, toggleAudio }
})
