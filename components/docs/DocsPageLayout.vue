<script setup lang="ts">
const { page } = useContent()
</script>

<template>
  <div class="prose docs-layout">
    <article>
      <h1>{{ page.title }}</h1>
      <slot />
    </article>
  </div>
</template>

<style scoped lang="postcss">
.docs-layout {
  @lg {
    padding-left: calc(var(--known-aside-width) + 1px);
  }

  article {
    max-width: 768px;
    padding: 32px 24px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
