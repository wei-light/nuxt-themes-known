<script setup lang="ts">
import type { NavigationItem } from '../../type'
import { NuxtLink } from '#components'

interface Props {
  tree: NavigationItem[]
  parent?: NavigationItem
  depth?: number
}

const props = withDefaults(defineProps<Props>(), {
  depth: 0,
})

const route = useRoute()

const collapsedMap = useState(`known-docs-aside-collapse-map-${props.parent?._path || '/'}`, () => {
  return props.tree
    .filter(link => !!link.children)
    .reduce((map, link) => {
      map[link._path] = !route.path.startsWith(link._path)
      return map
    }, {} as { [key: string]: boolean })
})

const isCollapsed = (link: NavigationItem) => {
  if (link.children) {
    if (typeof collapsedMap.value[link._path] !== 'undefined') {
      return collapsedMap.value[link._path]
    }
  }

  return false
}

const toggleCollapse = (link: NavigationItem) => (collapsedMap.value[link._path] = !isCollapsed(link))
</script>

<template>
  <ul class="space-y-0.5">
    <li v-for="item of tree" :key="item._path">
      <component
        :is="item.children ? 'div' : NuxtLink"
        :to="item.children || item._path"
        :style="{ paddingLeft: `${depth * 24}px` }"
        class="flex items-center gap-x-1 h-8 pr-2 rounded-md cursor-pointer hover:bg-PLAIN-100 dark:hover:bg-PLAIN-900"
        active
        @click="item.children && toggleCollapse(item)"
      >
        <div class="h-6 w-6 shrink-0">
          <BaseButtonIcon
            v-if="item.children"
            class="w-full h-full rounded-md transition-colors duration-300 hover:bg-PLAIN-200/60 dark:hover:bg-PLAIN-850"
            @click.stop="toggleCollapse(item)"
          >
            <i class="i-ri-arrow-right-s-line text-PLAIN-550 text-sm transition-transform duration-300" :class="{ 'rotate-90': !isCollapsed(item) }" />
          </BaseButtonIcon>
        </div>
        <div class="line-clamp-1 text-sm">
          {{ item.title }}
        </div>
      </component>

      <template v-if="item.children">
        <DocsAsideTreeItem
          v-show="!isCollapsed(item)"
          :tree="item.children"
          :parent="item"
          :depth="depth + 1"
        />
      </template>
    </li>
  </ul>
</template>

<style scoped>
.router-link-active {
  @apply text-blue-600 bg-blue-600/15 dark:(text-blue-400 bg-blue-400/15);
}
</style>
