<script setup lang="ts">
const { isOpen, open, close } = useAside()
</script>

<template>
  <div>
    <Backdrop :show="isOpen" @click="close" />
    <AppHeader @open-menu="open" />
    <DocsAside :open="isOpen" />
    <main class="pt-16">
      <slot />
    </main>
  </div>
</template>
