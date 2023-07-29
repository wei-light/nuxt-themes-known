<script setup lang="ts">
defineProps<{
  open: boolean
}>()

const { hasAside } = useAside()
</script>

<template>
  <aside
    v-if="hasAside"
    class="fixed top-0 bottom-0 left-0 w-68 bg-PLAIN-50 border-r border-PLAIN-100 -translate-x-full transition-transform duration-200 box-content z-999"
    :class="{ 'translate-x-0': open }"
    lg="translate-x-0"
    dark="bg-PLAIN-950 border-PLAIN-900"
  >
    <div class="flex items-center h-16 pl-2">
      <DocsAsideSpaceSelect />
    </div>
    <div class="px-2 mb-2">
      <DocsAsideSearch />
    </div>
    <div class="px-2">
      <NuxtLink to="/" class="flex items-center gap-x-1.5 h-8 px-2 rounded-md hover:bg-PLAIN-100 dark:hover:bg-PLAIN-900">
        <i class="i-ri-home-5-line" />
        <span class="text-sm">首页</span>
      </NuxtLink>
    </div>
    <div class="px-2 mt-1">
      <DocsAsideTree />
    </div>
  </aside>
</template>
