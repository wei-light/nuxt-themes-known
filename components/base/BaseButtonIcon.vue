<script setup lang="ts">
defineProps<{
  icon?: string
}>()
</script>

<template>
  <button class="inline-flex items-center justify-center text-lg">
    <slot>
      <i :class="icon" />
    </slot>
  </button>
</template>
