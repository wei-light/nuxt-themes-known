<script setup lang="ts">
defineProps<{
  show: boolean
}>()
</script>

<template>
  <Transition name="fade">
    <div v-if="show" class="mask" />
  </Transition>
</template>

<style scoped lang="postcss">
.mask {
  position: fixed;
  inset: 0;
  background-color: rgb(0, 0, 0, 0.6);
  z-index: 99;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
