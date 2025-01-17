'use client';

import * as React from 'react';

import { Sidebar, SidebarContent, SidebarHeader, SidebarRail } from '@/components/ui/sidebar';

import { NavGroups } from './nav-groups';
import { TeamSwitcher } from './team-switcher';
import { sidebarData } from './layout/data/sidebar-data';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="icon"
      {...props}
    >
      <SidebarHeader>
        <TeamSwitcher teams={sidebarData.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavGroups groups={sidebarData.navGroups} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
