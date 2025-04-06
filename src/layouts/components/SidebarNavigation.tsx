import { useNavItem } from '../hooks/useNavItem'
import { pathsAside } from '../../modules/core/constants/pathsAside'

import SidebarGroup from './ui/SidebarGroup'
import SidebarGroupLabel from './ui/SidebarGroupLabel'
import SidebarMenuItem from './ui/SidebarMenuItem'
import SidebarMenuCollapsible from './ui/SidebarMenuCollapsible'

export default function SidebarNavigation({
  isSidebarCollapsed,
}: {
  isSidebarCollapsed: boolean
}) {
  const { toggleNavItem, isNavItemsExpanded } = useNavItem()

  return (
    <nav
      className={`none-scroll h-full overflow-y-auto overflow-x-auto ${
        isSidebarCollapsed ? 'p-3' : 'p-4'
      }`}
    >
      <div className="flex flex-col gap-3.5">
        <SidebarGroup>
          <SidebarGroupLabel
            label={pathsAside.menu.title}
            isSidebarCollapsed={isSidebarCollapsed}
          />
          <SidebarMenuItem
            to={pathsAside.menu.home.to}
            icon={<pathsAside.menu.home.icon className="size-5" />}
            path={pathsAside.menu.home.title}
            isSidebarCollapsed={isSidebarCollapsed}
          />

          <SidebarMenuItem
            to={pathsAside.menu.profile.to}
            icon={<pathsAside.menu.profile.icon className="size-5" />}
            path={pathsAside.menu.profile.title}
            isSidebarCollapsed={isSidebarCollapsed}
          />

          <SidebarMenuCollapsible
            onClick={() => toggleNavItem('services')}
            icon={<pathsAside.menu.services.icon className="size-5" />}
            path={pathsAside.menu.services.title}
            isSidebarCollapsed={isSidebarCollapsed}
            isOpen={isNavItemsExpanded.services}
          >
            <SidebarMenuItem
              to={pathsAside.menu.services.items.create.to}
              icon={
                <pathsAside.menu.services.items.create.icon className="size-5" />
              }
              path={pathsAside.menu.services.items.create.title}
              isSidebarCollapsed={isSidebarCollapsed}
            />
            <SidebarMenuItem
              to={pathsAside.menu.services.items.view.to}
              icon={
                <pathsAside.menu.services.items.view.icon className="size-5" />
              }
              path={pathsAside.menu.services.items.view.title}
              isSidebarCollapsed={isSidebarCollapsed}
            />
          </SidebarMenuCollapsible>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel
            label={pathsAside.support.title}
            isSidebarCollapsed={isSidebarCollapsed}
          />
          <SidebarMenuItem
            to={pathsAside.support.users.to}
            icon={<pathsAside.support.users.icon className="size-5" />}
            path={pathsAside.support.users.title}
            isSidebarCollapsed={isSidebarCollapsed}
          />
          <SidebarMenuItem
            to={pathsAside.support.roles.to}
            icon={<pathsAside.support.roles.icon className="size-5" />}
            path={pathsAside.support.roles.title}
            isSidebarCollapsed={isSidebarCollapsed}
          />

          {/* <SidebarMenuItem
            to={pathsAside.support.units.to}
            icon={<pathsAside.support.units.icon className="size-5" />}
            path={pathsAside.support.units.title}
            isSidebarCollapsed={isSidebarCollapsed}
          /> */}

          <SidebarMenuCollapsible
            onClick={() => toggleNavItem('units')}
            icon={<pathsAside.support.units.icon className="size-5" />}
            path={pathsAside.support.units.title}
            isSidebarCollapsed={isSidebarCollapsed}
            isOpen={isNavItemsExpanded.units}
          >
            <SidebarMenuItem
              to={pathsAside.support.units.items.view.to}
              icon={
                <pathsAside.support.units.items.view.icon className="size-5" />
              }
              path={pathsAside.support.units.items.view.title}
              isSidebarCollapsed={isSidebarCollapsed}
            />
            <SidebarMenuItem
              to={pathsAside.support.units.items.types.to}
              icon={
                <pathsAside.support.units.items.types.icon className="size-5" />
              }
              path={pathsAside.support.units.items.types.title}
              isSidebarCollapsed={isSidebarCollapsed}
            />
          </SidebarMenuCollapsible>

          <SidebarMenuCollapsible
            onClick={() => toggleNavItem('personnel')}
            icon={<pathsAside.support.personnel.icon className="size-5" />}
            path={pathsAside.support.personnel.title}
            isSidebarCollapsed={isSidebarCollapsed}
            isOpen={isNavItemsExpanded.personnel}
          >
            <SidebarMenuItem
              to={pathsAside.support.personnel.items.view.to}
              icon={
                <pathsAside.support.personnel.items.view.icon className="size-5" />
              }
              path={pathsAside.support.personnel.items.view.title}
              isSidebarCollapsed={isSidebarCollapsed}
            />
            <SidebarMenuItem
              to={pathsAside.support.personnel.items.ranks.to}
              icon={
                <pathsAside.support.personnel.items.ranks.icon className="size-5" />
              }
              path={pathsAside.support.personnel.items.ranks.title}
              isSidebarCollapsed={isSidebarCollapsed}
            />
          </SidebarMenuCollapsible>

          <SidebarMenuCollapsible
            onClick={() => toggleNavItem('stations')}
            icon={<pathsAside.support.stations.icon className="size-5" />}
            path={pathsAside.support.stations.title}
            isSidebarCollapsed={isSidebarCollapsed}
            isOpen={isNavItemsExpanded.stations}
          >
            <SidebarMenuItem
              to={pathsAside.support.stations.items.view.to}
              icon={
                <pathsAside.support.stations.items.view.icon className="size-5" />
              }
              path={pathsAside.support.stations.items.view.title}
              isSidebarCollapsed={isSidebarCollapsed}
            />
            <SidebarMenuItem
              to={pathsAside.support.stations.items.guards.to}
              icon={
                <pathsAside.support.stations.items.guards.icon className="size-5" />
              }
              path={pathsAside.support.stations.items.guards.title}
              isSidebarCollapsed={isSidebarCollapsed}
            />
          </SidebarMenuCollapsible>
        </SidebarGroup>
      </div>
    </nav>
  )
}
