<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

const route = useRoute()

const { spaces } = useKnown()

const current = computed(() => spaces.value.find(lib => route.path.startsWith(lib._path)))
</script>

<template>
  <Menu v-slot="{ open }" as="div" class="relative">
    <div>
      <MenuButton
        class="inline-flex items-center gap-x-1 px-2 py-1 rounded-md hover:bg-PLAIN-100/80 dark:hover:bg-PLAIN-900/90"
        :class="{ 'bg-PLAIN-100/80 dark:bg-PLAIN-900/90': open }"
      >
        <span class="text-sm font-bold">
          {{ current?.title }}
        </span>
        <i class="i-iconamoon-arrow-down-2-fill text-PLAIN-600 dark:text-PLAIN-400" />
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-90 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-90 opacity-0"
    >
      <MenuItems
        class="absolute w-63 p-1 mt-1.5 bg-PLAIN-0 border border-PLAIN-100 rounded-md origin-top-left z-9999"
        dark="bg-PLAIN-950 border-PLAIN-850"
      >
        <MenuItem v-for="space of spaces" :key="space._path">
          <NuxtLink
            :to="space._path"
            class="block p-2 text-sm rounded-md hover:bg-PLAIN-100/50 dark:hover:bg-PLAIN-900/70"
            :class="{ 'text-blue-500': route.path.startsWith(space._path) }"
          >
            {{ space.title }}
          </NuxtLink>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>
