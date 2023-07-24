<script setup lang="ts">
interface Props {
  color?: 'gray' | 'green' | 'blue' | 'yellow' | 'purple' | 'pink'
  emoji?: string
}

withDefaults(defineProps<Props>(), {
  color: 'gray',
})
</script>

<template>
  <div class="callout" :class="[color]">
    <span v-if="emoji">{{ emoji }}</span>
    <ContentSlot :use="$slots.default" unwrap="p" />
  </div>
</template>

<style scoped>
.callout {
  @apply flex gap-x-2 px-4 py-3 rounded-md;
}

.gray {
  @apply bg-neutral-400/15;
}

.green {
  @apply bg-emerald-400/15;
}

.blue {
  @apply bg-blue-400/15;
}

.yellow {
  @apply bg-yellow-400/15;
}

.purple {
  @apply bg-purple-400/15;
}

.pink {
  @apply bg-pink-400/15;
}
</style>
