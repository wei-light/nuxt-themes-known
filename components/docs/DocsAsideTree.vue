<script setup lang="ts">
const { tree } = useKnown()
</script>

<template>
  <div class="flex items-center gap-x-1.5 h-8 px-2">
    <i class="i-mingcute-directory-line" />
    <span class="text-sm">目录</span>
  </div>
  <nav class="mt-0.5">
    <DocsAsideTreeItem :tree="tree" />
  </nav>
</template>
