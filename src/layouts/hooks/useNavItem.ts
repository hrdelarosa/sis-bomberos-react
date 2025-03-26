import { useState } from 'react'
import { NavItems } from '../types/SidebarTypes'

export function useNavItem() {
  const [isNavItemsExpanded, setIsNavItemsExpanded] = useState<NavItems>({
    services: false,
    units: false,
    personnel: false,
    stations: false,
  })

  const toggleNavItem = (item: keyof NavItems) => {
    setIsNavItemsExpanded((prev) => ({
      ...prev,
      [item]: !prev[item],
    }))
  }

  return { toggleNavItem, isNavItemsExpanded }
}
