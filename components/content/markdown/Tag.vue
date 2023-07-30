<script setup lang="ts">
interface Props {
  color?: 'gray' | 'green' | 'blue' | 'yellow' | 'purple' | 'pink' | 'rose'
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
  --color-gray: rgba(92, 92, 92, 0.2);
  --color-green: rgba(3, 135, 102, 0.2);
  --color-blue: rgba(5, 117, 197, 0.2);
  --color-yellow: rgba(240, 200, 0, 0.2);
  --color-purple: rgba(136, 49, 204, 0.2);
  --color-pink: rgba(200, 21, 182, 0.2);
  --color-rose: rgba(233, 30, 44, 0.2);

  --color-gray-text: rgba(140, 140, 140, 0.9);;
  --color-green-text: rgba(27, 167, 132, 0.9);
  --color-blue-text: rgba(44, 134, 252, 0.9);
  --color-yellow-text: rgba(200, 148, 44, 0.9);
  --color-purple-text: rgba(184, 82, 235, 0.9);
  --color-pink-text: rgba(218, 78, 143, 0.9);
  --color-rose-text: rgba(226, 80, 88, 0.9);

  border-radius: 0.125rem;
  padding: 0.125rem 0.25rem;
  font-size: 0.75rem;
  line-height: 1rem;
}

html.dark .tag {
  --color-gray: rgba(140, 140, 140, 0.28);;
  --color-green: rgba(27, 167, 132, 0.28);
  --color-blue: rgba(44, 134, 252, 0.28);
  --color-yellow: rgba(200, 148, 44, 0.28);
  --color-purple: rgba(184, 82, 235, 0.28);
  --color-pink: rgba(218, 78, 143, 0.28);
  --color-rose: rgba(226, 80, 88, 0.28);
}

.gray {
  background: var(--color-gray);
  color: var(--color-gray-text);
}

.green {
  background: var(--color-green);
  color: var(--color-green-text);
}

.blue {
  background: var(--color-blue);
  color: var(--color-blue-text);
}

.yellow {
  background: var(--color-yellow);
  color: var(--color-yellow-text);
}

.purple {
  background: var(--color-purple);
  color: var(--color-purple-text);
}

.pink {
  background: var(--color-pink);
  color: var(--color-pink-text);
}

.rose {
  background: var(--color-rose);
  color: var(--color-rose-text);
}
</style>
