<script setup lang="ts">
interface Props {
  color?: 'gray' | 'green' | 'blue' | 'yellow' | 'purple' | 'pink'
}

withDefaults(defineProps<Props>(), {
  color: 'gray',
})
</script>

<template>
  <span class="tag" :class="[color]">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </span>
</template>

<style scoped>
.tag {
  @apply px-1 py-0.5 text-xs rounded;
}

.gray {
  @apply text-neutral-500/85 bg-neutral-400/20;
}

.green {
  @apply text-emerald-600/85 bg-emerald-500/20;
}

.blue {
  @apply text-blue-600/85 bg-blue-500/20;
}

.yellow {
  @apply text-yellow-600/85 bg-yellow-500/20;
}

.purple {
  @apply text-purple-600/85 bg-purple-500/20;
}

.pink {
  @apply text-pink-600/85 bg-pink-500/20;
}
</style>
