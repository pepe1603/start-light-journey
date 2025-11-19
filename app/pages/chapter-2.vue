<script setup>
import { ref } from "vue"
const router = useRouter()

// Controlar la animación del texto escrito por card
const typingActive = ref([false, false, false])

const activateTyping = (index) => {
  typingActive.value[index] = false

  // Pequeño delay para reiniciar animación
  setTimeout(() => {
    typingActive.value[index] = true
  }, 50)
}

const deactivateTyping = (index) => {
  typingActive.value[index] = false
}

const cards = [
  {
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    text: "Cuando estás cerca… todo se siente más bonito."
  },
  {
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04",
    text: "Tu sonrisa tiene magia… ilumina cualquier día."
  },
  {
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    text: "Y tu forma de ser… simplemente me encanta."
  }
]
</script>

<template>
  <div class="min-h-screen px-6 py-16 fade-in flex flex-col gap-10">

    <h1 class="text-4xl text-pink-400 font-bold slide-up text-center">
      Capítulo 2 — Momentos 🌸
    </h1>

    <!-- GRID DE CARDS -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div
        v-for="(c,i) in cards"
        :key="i"
        class="relative group rounded-2xl overflow-hidden shadow-lg bg-white/10 backdrop-blur-xl border border-white/20 card-soft"
        @mouseenter="activateTyping(i)"
        @mouseleave="deactivateTyping(i)"
        @touchstart="activateTyping(i)"
      >

        <!-- Imagen -->
        <img
          :src="c.img"
          class="w-full h-64 object-cover transform group-hover:scale-110 transition duration-700"
        />

        <!-- Overlay con mensaje + typewriter -->
        <div
          class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center p-6"
        >
          <p
            :class="[
              'text-white text-lg font-medium text-center leading-snug',
              typingActive[i] ? 'typewriter' : 'opacity-0'
            ]"
            style="max-width: 90%;"
          >
            {{ c.text }}
          </p>
        </div>

      </div>
    </div>

    <div class="flex justify-center">
      <UButton
        size="lg"
        color="error"
        class="mt-8 px-10 py-4 glow bg-pink-500 hover:bg-pink-600 text-white rounded-xl"
        @click="router.push('/chapter-3')"
      >
        Continuar ✨
      </UButton>
    </div>

  </div>
</template>

<style scoped>
.card-soft {
  animation: floatSoft 6s ease-in-out forwards;
  transition: transform 0.4s ease;
}

.card-soft:hover {
  transform: translateY(-10px) scale(1.03);
}

/* Ajustar typewriter dentro del overlay */
.typewriter {
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid #fff;
  width: 0;
  animation:
    typing 2.2s steps(30, end) forwards,
    blink 0.75s step-end infinite;
}

/* Efecto typing */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* Parpadeo del cursor */
@keyframes blink {
  50% { border-color: transparent }
}
</style>
