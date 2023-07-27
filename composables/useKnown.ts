import type { NavigationItem } from '../type'

export function useKnown() {
  const { navigation } = useContent()

  const route = useRoute()

  const spaces = computed(() => {
    const nav: NavigationItem[] = navigation.value || []

    return nav.filter(n => n._path !== '/')
  })

  const tree = computed(() => {
    return spaces.value.find(i => route.path.startsWith(i._path))?.children ?? []
  })

  return { spaces, tree }
}
