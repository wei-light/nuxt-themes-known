export interface NavigationItem {
  title: string
  _path: string
  redirect?: string
  collapsed?: boolean
  children?: NavigationItem[]
  cover?: string
  desc?: string
}
