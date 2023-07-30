<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed(() => colorMode.preference === 'dark')
</script>

<template>
  <BaseButtonIcon
    :style="{ padding: '8px' }"
    @click="$colorMode.preference = isDark ? 'light' : 'dark'"
  >
    <Icon :name="isDark ? 'ri:moon-line' : 'ri:sun-line' " />
  </BaseButtonIcon>
</template>
