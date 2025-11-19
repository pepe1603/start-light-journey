<script setup>
import { ref } from "vue"
const router = useRouter()

// Definir las cards
const cards = [
  {
    img: "https://wallpapers.com/images/high/your-name-anime-2016-lovers-meeting-comet-ipwnayt5ksgfoo11.webp",
    text: "Cuando estás cerca… todo se siente más bonito."
  },
  {
    img: "https://wallpapers.com/images/high/mitsuhas-marker-your-name-4k-es32bfkbxcrwrq2i.webp",
    text: "Tu sonrisa tiene magia… ilumina cualquier día."
  },
  {
    img: "https://wallpapers.com/images/high/mitsuha-and-taki-back-hug-romance-anime-x4nkctz2w8vhvbuj.webp",
    text: "Y tu forma de ser… simplemente me encanta."
  },
  {
    img: "https://wallpapers.com/images/high/blushing-nino-nakano-in-uniform-0dt3ma3b03lrkn51.webp",
    text: "Cada instante contigo me hace sonreír 😊"
  },
  {
    img: "https://img.freepik.com/foto-gratis/estilo-anime-celebrando-dia-san-valentin_23-2151258030.jpg?semt=ais_hybrid&w=740&q=80",
    text: "Los recuerdos que compartimos son mágicos ✨"
  },
  {
    img: "https://wallpapers.com/images/high/snoopy-1920-x-1200-background-4wfr75q5k18qx0jz.webp",
    text: "Quiero que estos momentos duren para siempre 💖"
  }
]

// Array de control para animación typewriter según cantidad de cards
const typingActive = ref(cards.map(() => false))

const activateTyping = (index) => {
  typingActive.value[index] = false
  setTimeout(() => {
    typingActive.value[index] = true
  }, 50)
}

const deactivateTyping = (index) => {
  typingActive.value[index] = false
}
</script>

<template>
  <div class="min-h-screen px-6 py-16 fade-in flex flex-col gap-10">

    <h1 class="text-4xl text-pink-400 font-bold slide-up text-center">
      Capítulo 2 — Momentos 🌸
    </h1>

    
    <p class="my-1 p-2 text-sm text-center text-gray-600 italic animate-pulse">
        Coloca el cursor ssobre la tarjeta para ver la magia ...

    </p>

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
          class="relative max-h-3/12 italic"
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
        class="mt-8 px-10 py-4 animate-bounce"
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

/* Ajustar typewriter dentro del overlay para que haga wrap */
.typewriter {
  overflow: hidden;
  white-space: normal; /* Permite saltos de línea */
  border-right: 2px solid #fff;
  display: inline-block; /* Para que el ancho dependa del texto */
  width: 0;
  animation:
    typing 2.5s steps(40, end) forwards,
    blink 0.75s step-end infinite;
  word-wrap: break-word;
  text-align: center;
}

</style>
