<template>
  <BaseButtonIcon
    class="p-2"
    @click="$colorMode.preference = $colorMode.preference === 'light' ? 'dark' : 'light'"
  >
    <i class="i-ri-sun-line dark:i-ri-moon-line" />
  </BaseButtonIcon>
</template>
