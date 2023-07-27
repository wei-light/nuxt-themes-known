export function useAside() {
  const { page } = useContent()

  const isOpen = ref(false)

  const hasAside = computed(() => page.value?.layout !== 'page')

  function open() {
    isOpen.value = true
  }

  function close() {
    isOpen.value = false
  }

  function toggle() {
    isOpen.value ? close() : open()
  }

  return {
    isOpen,
    hasAside,
    open,
    close,
    toggle,
  }
}
