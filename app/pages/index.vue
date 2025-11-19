<template>
  <UContainer class="py-10">
    <UCard>
      <template #header>
        <div class="flex justify-between items-center">
          <h1 class="text-xl font-bold text-primary-500">
            🏠 Página de Inicio (Nuxt UI)
          </h1>
          <UBadge color="green" variant="subtle">Nuxt 4 Activo</UBadge>
        </div>
      </template>

      <div class="space-y-4">
        <p class="text-gray-600 dark:text-gray-300">
          Bienvenido. Ahora estamos usando componentes profesionales.
        </p>

        <div class="flex items-center gap-4">
          <UInput 
            v-model="nombre" 
            icon="i-heroicons-user" 
            placeholder="Escribe tu nombre..." 
          />
          
          <UButton 
            icon="i-heroicons-hand-thumb-up"
            @click="contador++"
          >
            Likes: {{ contador }}
          </UButton>
        </div>

        <p v-if="nombre" class="text-sm mt-2">
          ¡Hola, <strong>{{ nombre }}</strong>!
        </p>
      </div>

      <template #footer>
        <UButton to="/contacto" variant="ghost" color="gray">
          Ir a Contacto &rarr;
        </UButton>
      </template>
    </UCard>
  </UContainer>
</template>

<script setup>
const contador = ref(0)
const nombre = ref('')
</script>