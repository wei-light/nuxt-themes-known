<script setup lang="ts">
const { isOpen, open, close } = useAside()

const route = useRoute()
watch(() => route.path, close)
</script>

<template>
  <div class="app-layout">
    <Backdrop :show="isOpen" @click="close" />
    <AppHeader @open-menu="open" />
    <DocsAside :open="isOpen" />
    <main class="content">
      <slot />
    </main>
  </div>
</template>

<style scoped lang="postcss">
.app-layout {
  .content {
    padding-top: var(--known-header-height);
  }
}
</style>
