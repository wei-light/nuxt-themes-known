<script setup lang="ts">
defineProps<{
  open: boolean
}>()

const { hasAside } = useAside()
</script>

<template>
  <aside
    v-if="hasAside"
    class="docs-aside"
    :style="{ transform: `translateX(${open ? '0' : '-100%'})` }"
  >
    <div class="header-wrapper">
      <DocsAsideSpaceSelect />
    </div>
    <div class="search-wrapper">
      <DocsAsideSearch />
    </div>
    <div class="home-link">
      <NuxtLink to="/">
        <Icon name="ri:home-5-line" />
        <span>首页</span>
      </NuxtLink>
    </div>
    <div class="tree-wrapper">
      <DocsAsideTree />
    </div>
  </aside>
</template>

<style scoped lang="postcss">
.docs-aside {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: var(--known-aside-width);
  background-color: var(--bg-body-overlay);
  border-right: 1px solid var(--color-grey-200);
  transition: transform 0.2s ease-in;
  box-sizing: content-box;
  z-index: 999;

  @lg {
    transform: translateX(0)!important;
  }

  .header-wrapper {
    display: flex;
    align-items: center;
    height: var(--known-header-height);
    padding-left: 8px;
  }

  .search-wrapper {
    padding-left: 8px;
    padding-right: 8px;
    margin-bottom: 8px;
  }

  .home-link {
    padding-left: 8px;
    padding-right: 8px;

    a {
      display: flex;
      align-items: center;
      column-gap: 6px;
      height: 32px;
      padding-left: 8px;
      padding-right: 8px;
      border-radius: 6px;

      &:hover {
        background-color: var(--fill-hover);
      }

      span {
        font-size: 14px;
      }
    }
  }

  .tree-wrapper {
    padding-left: 8px;
    padding-right: 8px;
    margin-top: 4px;
  }
}
</style>
