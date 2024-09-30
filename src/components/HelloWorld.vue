<script setup lang="ts">
import { onMounted } from 'vue'
import { styler, applyStyles } from '../lib/styler'

defineProps<{
  msg: string
}>()

onMounted(() => {
  applyStyles({
    h1: 'fw-500 fs-2.6rem pn-relative t--10px',
    h3: 'fs-1.2rem',
    '.greetings h1, .greetings h3': 'max-lg:ta-center lg:ta-left'
  })
  styler()
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>
  </div>
</template>
