'use client'

import { AudioWaveform, Command, GalleryVerticalEnd } from 'lucide-react'
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  teams: [{
    name: "Acme Inc",
    logo: GalleryVerticalEnd,
    plan: "Enterprise",
  }, {
    name: "Acme Corp.",
    logo: AudioWaveform,
    plan: "Startup",
  }, {
    name: "Evil Corp.",
    logo: Command,
    plan: "Free",
  }],
  navGroups: [{
    title: "Examples",
    url: "/",
    items: [{
      title: "Dashboard",
      url: "/admin/examples/dashboard",
    }, {
      title: "Tasks",
      url: "/admin/examples/tasks",
    }],
  }],
}
