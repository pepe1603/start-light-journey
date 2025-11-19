<script setup>
const router = useRouter()

const words = [
  "Eres", "tan", "linda", "que", 
  "hasta", "mis", "pensamientos", 
  "se", "ponen", "nerviosos", "💕"
]
</script>

<style>
/* Animación suave para los badges */
@keyframes floatSoft {
  0% { transform: translateY(0px); opacity: 0; }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0px); opacity: 1; }
}

/* Halo grande y suave */
.glow-big {
  box-shadow: 0 0 35px 12px rgba(255, 150, 200, 0.45);
  transition: 0.3s ease;
}

.glow-big:hover {
  box-shadow: 0 0 55px 18px rgba(255, 170, 220, 0.6);
}

/* Fade-in para la pantalla */
.fade-in {
  animation: fadeIn 0.8s ease forwards;
  opacity: 0;
}

@keyframes fadeIn {
  to { opacity: 1; }
}
</style>

<template>
  <div class="min-h-screen px-6 py-16 flex flex-col justify-center items-center  fade-in">

    <h1 class="text-4xl text-pink-400 font-bold mb-8">
      Capítulo 1 — Un Mensaje Especial
    </h1>

    <div class="flex flex-wrap gap-3">
      <UBadge
      size="md"
        v-for="(w, i) in words"
        :key="i"
        class="text-pink-300 font-bold px-4 py-2 rounded-full"
        :style="{
          background: 'rgba(255, 182, 193, 0.35)',  /* rosa pastel suave */
          backdropFilter: 'blur(6px)',
          border: '1px solid rgba(255, 200, 210, 0.5)',
          animation: `sparkle 7.5s ease-in-out ${i * 0.18}s infinite`
        }"
      >
        {{ w }}
      </UBadge>
    </div>

    <UButton
      class="mt-10 px-7 py-3 animate-bounce"
      @click="router.push('/chapter-2')"
    >
      Continuar
    </UButton>

  </div>
</template>
