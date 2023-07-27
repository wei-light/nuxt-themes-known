<script setup lang="ts">
const { isOpen, open, close } = useAside()

const route = useRoute()
watch(() => route.path, close)
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
