<script setup>
const router = useRouter()
const { herName } = useStory()
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center text-center gap-8 fade-in">

    <!-- TARJETA SUAVE Y ROMÁNTICA -->
    <UCard
      class="w-96 bg-white/10 backdrop-blur-lg border border-pink-400/20 shadow-2xl rounded-3xl p-6 slide-up"
    >
      <h2 class="text-4xl text-pink-300 font-bold mb-4">
        Hola, {{ herName }} 🌸
      </h2>

      <p class="text-base text-white/90 leading-relaxed">
        Qué bueno que estás aquí.  
        Este pequeño recorrido lo hice pensando en ti  
        —en tu vibra, tu sonrisa bonita  
        y esa energía que hace que todo se sienta más suave ✨  
        <br/><br/>
        Solo déjate llevar… que esto va a ponerse lindo.
      </p>

      <UButton
        size="lg"
        class="mt-6  py-3 font-semibold bg-pink-500 hover:bg-pink-600 text-white rounded-xl glow"
        color="error"
        @click="router.push('/chapter-1')"
      >
        Empezar historia
      </UButton>
    </UCard>
  </div>
</template>
