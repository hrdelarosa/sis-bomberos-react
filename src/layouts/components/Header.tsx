import { PanelLeft } from 'lucide-react'
import { useUserDropdown } from '../hooks/useUserDropdown'

import HeaderSectionUser from './HeaderSectionUser'

export default function Header({
  toggleSidebar,
}: {
  toggleSidebar: () => void
}) {
  const { toggleUserDropdown, isUserDropdownOpen } = useUserDropdown()

  return (
    <header className="flex h-16 bg-white shrink-0 items-center justify-between">
      <div className="flex items-center gap-2 px-4">
        <button
          onClick={toggleSidebar}
          className="hover:bg-gray-200 text-black inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 h-7 w-7 -ml-1 cursor-pointer"
        >
          <PanelLeft className="size-4" />
          <span className="sr-only">Toggle Sidebar</span>
        </button>

        <div className="w-px h-4 mr-2 bg-gray-300"></div>

        <nav className="text-sm text-gray-600">
          <span>Inicio</span> / <span className="font-semibold">Dashboard</span>
        </nav>
      </div>

      {/* <div className="flex items-center gap-2 px-4">
        <div className="hover:bg-gray-200 text-black p-1.5 rounded-md transition-colors cursor-pointer">
          <div className="flex items-center gap-2.5">
            <User className="size-8 bg-secondary-red rounded-lg p-1" />
            <div>
              <p className="text-sm truncate font-semibold">Juan Pérez</p>
              <p className="text-xs truncate">juan.perez@bomberos.com</p>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="px-4 relative" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between gap-4 rounded-lg p-1.5 hover:bg-primary-white-main text-black">
          <UserCard />
          <ChevronDown className="size-5" />
        </div>
      </div> */}

      <HeaderSectionUser
        toggleUserDropdown={toggleUserDropdown}
        isUserDropdownOpen={isUserDropdownOpen}
      />
    </header>
  )
}
