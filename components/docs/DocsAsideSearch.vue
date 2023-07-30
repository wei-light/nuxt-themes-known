<template>
  <div class="docs-aside-search">
    <Icon name="ri:search-line" />
    <span>搜索</span>
  </div>
</template>

<style scoped lang="postcss">
.docs-aside-search {
  display: flex;
  align-items: center;
  height: 32px;
  padding-left: 8px;
  padding-right: 8px;
  background-color: var(--bg-body);
  color: var(--color-grey-500);
  border-radius: 6px;
  cursor: pointer;

  span {
    font-size: 14px;
    margin-left: 6px;
  }
}
</style>
