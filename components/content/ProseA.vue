<script setup lang="ts">
const props = defineProps({
  href: {
    type: String,
    default: '',
  },
  target: {
    type: String,
    default: undefined,
    required: false,
  },
})

const isInternalLink = computed(() => props.href && props.href.startsWith('/'))
const isExternalLink = computed(() => props.href && props.href.startsWith('http'))
</script>

<template>
  <NuxtLink v-if="isInternalLink" :to="href">
    <slot />
  </NuxtLink>
  <a v-else-if="isExternalLink" :href="href" target="_blank" rel="noopener noreferrer">
    <slot />
  </a>
  <a v-else :href="href">
    <slot />
  </a>
</template>
