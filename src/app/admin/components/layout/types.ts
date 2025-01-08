interface Team {
  name: string
  logo: React.ElementType
  plan: string
}

type NavItem =  {
  title: string
  url: string
}

interface NavGroup {
  title: string
  url: string,
  items: NavItem[],
}

interface SidebarData {
  teams: Team[]
  navGroups: NavGroup[]
}

export type { SidebarData, NavGroup, NavItem }
