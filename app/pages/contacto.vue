<template>
  <UContainer >
    <h1 class="text-2xl font-bold text-blue-600" >📬 Contacto</h1>
    <p>Aquí puedes encontrarme.</p>
    <ul class="rounded bg-gray-800 p-4 m-1 font-semibold">
      <li>Email: test@nuxt.com</li>
      <li>Github: @tu_usuario</li>
    </ul>
    

    <UIcon name="i-lucide-lightbulb" class="size-5" />

    <UButton icon="i-lucide-sun" variant="subtle">Button</UButton>

    <button @click="irAlInicio" style="margin-top: 20px;">
      ⬅ Volver al Home (vía Script)
    </button>
  </UContainer>
</template>

<script setup>
// 'useRouter' es un composable nativo de Nuxt/Vue Router
const router = useRouter()

const irAlInicio = () => {
  router.push('/')
}
</script>