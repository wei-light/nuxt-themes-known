<template>
  <div class="page-layout">
    <slot />
  </div>
</template>

<style scoped lang="postcss">
.page-layout {
  max-width: 1152px;
  padding: 24px;
  margin-left: auto;
  margin-right: auto;

  @sm {
    padding-top: 32px;
    padding-bottom: 32px;
  }

  @md {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  @lg {
    padding-top: 56px;
    padding-bottom: 56px;
  }
}
</style>
