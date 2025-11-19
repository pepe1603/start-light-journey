<script setup>
const router = useRouter()
const { herName, setName } = useStory()

const go = () => {
  if (herName.value.trim().length < 2) return
  router.push("/welcome")
}
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center gap-8 fade-in">

    <!-- ENCABEZADO ROMÁNTICO -->
    <h1 class="text-5xl font-bold text-pink-400 typewriter text-center max-w-fit">
      Start Light Journey ✨
    </h1>

    <p class="text-lg text-white/80 slide-up text-center max-w-md">
      Antes de que empecemos este recorrido lleno de cositas bonitas,
      dime algo primero, así... con confianza.
    </p>

    <!-- TARJETA ELEGANTE -->
    <UCard
      class="w-96 bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl fade-in text-center"
    >
      <h2 class="text-xl text-pink-300 font-semibold mb-3 text-center">
        Una última cosa antes de empezar 💕
      </h2>

      <p class="text-white/80 text-center text-sm mb-4">
        ¿Cómo te gustaría que te llame durante esta aventura?
      </p>

      <UInput
        v-model="herName"
        placeholder="Escribe aquí…"
        variant="soft"
        size="lg"
        class="w-full"
      />

      <UButton
        size="lg"
        color="error"
        class="mt-4 py-3 font-semibold bg-pink-500 hover:bg-pink-600 text-white rounded-xl glow "
        :disabled="herName.trim().length < 2"
        @click="go"
      >
        Empezar este viajecito
      </UButton>
    </UCard>

  </div>
</template>
