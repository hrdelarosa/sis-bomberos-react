import authStore from '../../modules/auth/states/authStore'
import { pathsAside } from '../../modules/core/constants/pathsAside'
import SidebarMenuItemAction from './ui/SidebarMenuItemAction'

export default function SidebarSectionsOptions({
  isSidebarCollapsed,
}: {
  isSidebarCollapsed: boolean
}) {
  const { logout } = authStore()

  return (
    <div
      className={`p-4 relative ${isSidebarCollapsed && 'flex justify-center'}`}
    >
      <div className="flex flex-col gap-3 justify-center">
        <SidebarMenuItemAction
          action={() => logout()}
          icon={<pathsAside.options.logout.icon className="size-5" />}
          path={pathsAside.options.logout.title}
          isSidebarCollapsed={isSidebarCollapsed}
        />
      </div>
    </div>
  )
}
