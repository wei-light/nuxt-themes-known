<script setup lang="ts">
const { page } = useContent()
</script>

<template>
  <div class="lg:pl-68">
    <article class="prose max-w-3xl px-6 py-8 mx-auto">
      <h1>{{ page.title }}</h1>
      <slot />
    </article>
  </div>
</template>
