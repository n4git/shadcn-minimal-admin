export interface Team {
  name: string;
  logo: React.ElementType;
  plan: string;
}

export type NavItem = {
  title: string;
  url: string;
};

export interface NavGroup {
  title: string;
  url: string;
  items: NavItem[];
}

export interface SidebarData {
  teams: Team[];
  navGroups: NavGroup[];
}
