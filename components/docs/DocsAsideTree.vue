<script setup lang="ts">
const { tree } = useKnown()
</script>

<template>
  <div class="docs-aside-tree">
    <div class="header">
      <Icon name="mingcute:directory-line" />
      <span>目录</span>
    </div>
    <nav>
      <DocsAsideTreeItem :tree="tree" />
    </nav>
  </div>
</template>

<style scoped lang=postcss>
.docs-aside-tree {
  .header {
    display: flex;
    align-items: center;
    column-gap: 6px;
    height: 32px;
    padding-left: 8px;
    padding-right: 8px;

    span {
      font-size: 14px;
    }
  }
}
</style>
