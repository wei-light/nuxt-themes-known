<script setup lang="ts">
defineProps<{
  name: string
  avatar: string
  sign: string
}>()
</script>

<template>
  <div class="flex items-center">
    <div
      class="shrink-0 overflow-hidden h-16 w-16 rounded-full"
      sm="h-20 w-20"
      md="h-24 w-24"
      lg="h-32 w-32"
    >
      <img
        class="h-full w-full"
        :src="avatar"
        alt="user-avatar"
      >
    </div>
    <div class="ml-6 md:ml-8 lg:ml-10">
      <p class="text-lg font-bold sm:text-2xl">
        {{ name }}
      </p>
      <p class="mt-0.5 line-clamp-1 text-[13px] opacity-60 sm:(mt-2 text-sm) md:mt-4 lg:mt-6">
        {{ sign }}
      </p>
    </div>
  </div>
</template>
