<script setup lang="ts">
type HTMLElementsTags = keyof HTMLElementTagNameMap

interface Props {
  as?: HTMLElementsTags
}

withDefaults(defineProps<Props>(), {
  as: 'div',
})
</script>

<template>
  <component :is="as">
    <slot />
  </component>
</template>
