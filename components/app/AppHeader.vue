<script setup lang="ts">
const emit = defineEmits(['open-menu'])

const { hasAside } = useAside()
</script>

<template>
  <header>
    <div class="left-side">
      <BaseButtonIcon
        v-if="hasAside"
        icon="mingcute:menu-line"
        class="menu"
        @click="emit('open-menu')"
      />
      <AppHeaderLogo />
    </div>
    <div class="right-side">
      <AppSearch />
      <AppThemeSelect />
    </div>
  </header>
</template>

<style scoped lang="postcss">
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--known-header-height);
  padding-left: 24px;
  padding-right: 24px;
  background-color: var(--bg-body);
  z-index: 9;

  .left-side {
    display: inline-flex;
    align-items: center;
    column-gap: 12px;

    .menu {
      padding: 8px;
      margin-left: -8px;

      @lg {
        display: none;
      }
    }
  }

  .right-side {
    display: inline-flex;
    align-items: center;
    margin-right: -8px;
  }
}
</style>
