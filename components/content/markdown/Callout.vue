<script setup lang="ts">
interface Props {
  color?: 'gray' | 'green' | 'blue' | 'yellow' | 'purple' | 'pink' | 'rose'
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
  --color-gray: rgba(92, 92, 92, 0.12);
  --color-green: rgba(3, 135, 102, 0.12);
  --color-blue: rgba(5, 117, 197, 0.12);
  --color-yellow: rgba(240, 200, 0, 0.12);
  --color-purple: rgba(136, 49, 204, 0.12);
  --color-pink: rgba(200, 21, 182, 0.12);
  --color-rose: rgba(233, 30, 44, 0.12);

  display: flex;
  column-gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
}

html.dark .callout {
  --color-gray: rgba(140, 140, 140, 0.18);;
  --color-green: rgba(27, 167, 132, 0.18);
  --color-blue: rgba(44, 134, 252, 0.18);
  --color-yellow: rgba(200, 148, 44, 0.18);
  --color-purple: rgba(184, 82, 235, 0.18);
  --color-pink: rgba(218, 78, 143, 0.18);
  --color-rose: rgba(226, 80, 88, 0.18);
}

.gray {
  background: var(--color-gray);
}

.green {
  background: var(--color-green);
}

.blue {
  background: var(--color-blue);
}

.yellow {
  background: var(--color-yellow);
}

.purple {
  background: var(--color-purple);
}

.pink {
  background: var(--color-pink);
}

.rose {
  background: var(--color-rose);
}
</style>
