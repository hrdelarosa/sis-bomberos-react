import { Link } from 'react-router-dom'
import { pathsAside } from '../constants/pathsAside'

import ContentLogo from './ui/ContentLogo'
import SidebarNavigation from './SidebarNavigation'
import SidebarSectionsOptions from './SidebarSectionsOptions'

export default function Sidebar({
  isSidebarCollapsed,
}: {
  isSidebarCollapsed: boolean
}) {
  return (
    <aside
      className={`bg-primary-red text-white transition-all duration-300 ${
        isSidebarCollapsed ? 'w-16' : 'w-72'
      } flex flex-col`}
    >
      {/* Logo Section */}
      <Link to="/" className="flex items-center justify-center p-2 group">
        {!isSidebarCollapsed ? (
          <div className="flex items-center gap-1 group">
            <ContentLogo />
            <div>
              <h2 className="text-lg font-bold">{pathsAside.project.title}</h2>
              <p className="text-xs font-normal text-gray-200">
                {pathsAside.project.subTitle}
              </p>
            </div>
          </div>
        ) : (
          <ContentLogo size="size-10" />
        )}
      </Link>

      {/* Navigation */}
      <SidebarNavigation isSidebarCollapsed={isSidebarCollapsed} />

      {/* User Section */}
      <SidebarSectionsOptions isSidebarCollapsed={isSidebarCollapsed} />
    </aside>
  )
}
