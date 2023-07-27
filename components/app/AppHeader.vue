<script setup lang="ts">
const emit = defineEmits(['open-menu'])

const { hasAside } = useAside()
</script>

<template>
  <header class="fixed inset-x-0 top-0 flex items-center justify-between h-16 px-6 bg-PLAIN-0 z-9 dark:bg-PLAIN-1000">
    <div class="inline-flex items-center gap-x-3">
      <BaseButtonIcon
        v-if="hasAside"
        icon="i-mingcute-menu-line"
        class="p-2 -ml-2 lg:hidden"
        @click="emit('open-menu')"
      />
      <AppHeaderLogo />
    </div>
    <div class="inline-flex items-center -mr-2">
      <AppSearch />
      <AppThemeSelect />
    </div>
  </header>
</template>
