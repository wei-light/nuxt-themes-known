<script setup lang="ts">
defineProps<{
  icon?: string
  size?: string
}>()
</script>

<template>
  <button class="button-icon">
    <slot>
      <Icon :name="icon!" :size="size" />
    </slot>
  </button>
</template>

<style scoped lang="postcss">
.button-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>
