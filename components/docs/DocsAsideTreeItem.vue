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
  <ul class="docs-tree-container space-y-0.5">
    <li v-for="item of tree" :key="item._path">
      <component
        :is="item.children ? 'div' : NuxtLink"
        :to="item.children || item._path"
        :style="{ paddingLeft: `${depth * 24}px` }"
        class="tree-item"
        @click="item.children && toggleCollapse(item)"
      >
        <div class="toggle-btn-placeholder">
          <BaseButtonIcon
            v-if="item.children"
            class="btn"
            @click.stop="toggleCollapse(item)"
          >
            <Icon
              name="ri:arrow-right-s-line"
              class="icon"
              :style="{ transform: `rotate(${!isCollapsed(item) ? '90' : 0}deg)` }"
            />
          </BaseButtonIcon>
        </div>
        <div class="text">
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

<style scoped lang="postcss">
.docs-tree-container {
  .tree-item {
    display: flex;
    align-items: center;
    column-gap: 4px;
    height: 32px;
    padding-right: 8px;
    margin-top: 2px;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background-color: var(--fill-hover);
    }

    .toggle-btn-placeholder {
      height: 24px;
      width: 24px;
      flex-shrink: 0;

      .btn {
        width: 100%;
        height: 100%;
        border-radius: 6px;
        transition: background-color 0.2s linear;

        &:hover {
          background-color: rgb(var(--color-grey-300-raw), 0.7);
        }

        .icon {
          color: var(--color-grey-500);
          font-size: 14px;
          transition: transform 0.2s linear;
        }
      }
    }

    .text {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 14px;
    }
  }
}

.router-link-active {
  color: var(--color-blue-600);
  background-color: rgb(var(--color-blue-600-raw), 0.15)!important;
}
</style>
