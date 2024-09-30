<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { styler, applyStyles } from './lib/styler'
import { onMounted } from 'vue'

onMounted(() => {
  applyStyles({
    body: 'h-mn-100vh text-$color-text bg-$color-background tr-[color\\_0.5s,\\_background-color 0.5s] lh-1.6 fs-15px family-$family',
    'nav a': 'd-[inline-block] bdr-left-[1px\\_solid\\_var(--color-border)]',
    'nav a:first-of-type': 'bdr-0',
    'nav a.router-link-exact-active': 'text-$color-text hover:bg-transparent'
  })
  styler()
})
</script>

<template>
  <header
    class="h-mx-100vh lh-1.5 max-lg:d-block lg:d-flex lg:place-items-center max-lg:pr-0 lg:pr-80px"
  >
    <img
      alt="Vue logo"
      class="d-block max-lg:mx-auto max-lg:mb-2rem lg:mr-2rem lg:mb-0"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="max-lg:d-block lg:flex-w-wrap place-items-[flex-start]">
      <HelloWorld msg="'We' did it!" />

      <nav
        class="w-100% max-lg:fs-12px lg:fs-1rem max-lg:ta-center lg:ta-left max-lg:mt-2rem lg:mt-1rem max-lg:py-0 lg:py-1rem"
      >
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
