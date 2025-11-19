<script setup>
const petals = Array.from({ length: 24 })
</script>

<template>
  <div>
    <div
      v-for="(p, i) in petals"
      :key="i"
      class="petal"
      :style="{
        left: Math.random() * 100 + '%',
        animationDuration: 4 + Math.random() * 6 + 's',
        animationDelay: Math.random() * 4 + 's'
      }"
    />
  </div>
</template>
