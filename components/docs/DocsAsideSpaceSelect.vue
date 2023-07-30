<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

const route = useRoute()

const { spaces } = useKnown()

const current = computed(() => spaces.value.find(lib => route.path.startsWith(lib._path)))
</script>

<template>
  <Menu v-slot="{ open }" as="div" class="menu-container">
    <div>
      <MenuButton
        class="menu-btn"
        :class="{ focus: open }"
      >
        <span class="text">
          {{ current?.title }}
        </span>
        <Icon name="iconamoon:arrow-down-2-fill" class="icon" />
      </MenuButton>
    </div>

    <Transition name="scale">
      <MenuItems class="menu-items">
        <MenuItem v-for="space of spaces" :key="space._path" v-slot="{ close }">
          <NuxtLink :to="space._path">
            <span
              class="menu-item"
              :class="{ active: route.path.startsWith(space._path) }"
              @click="close()"
            >
              {{ space.title }}
            </span>
          </NuxtLink>
        </MenuItem>
      </MenuItems>
    </Transition>
  </Menu>
</template>

<style scoped lang="postcss">
.menu-container {
  position: relative;

  .menu-btn {
    display: inline-flex;
    align-items: center;
    column-gap: 4px;
    padding: 4px 10px;
    border-radius: 6px;

    &:hover,
    &.focus {
      background-color: var(--fill-hover);
    }

    .text {
      font-size: 14px;
      font-weight: 700;
    }

    .icon {
      color: var(--color-grey-600);
    }
  }

  .menu-items {
    position: absolute;
    width: calc(var(--known-aside-width) - 16px);
    padding: 4px;
    margin-top: 6px;
    background-color: var(--bg-body-overlay);
    border: 1px solid var(--color-grey-200);
    border-radius: 6px;
    transform-origin: top left;
    z-index: 9999;

    .menu-item {
      display: block;
      padding: 8px;
      font-size: 14px;
      border-radius: 6px;

      &.active {
        color: var(--color-blue-600);
      }

      &:hover {
        background-color: var(--fill-hover);
      }
    }
  }
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.1s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>
