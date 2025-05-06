import { PanelLeft } from 'lucide-react'
import HeaderSectionUser from './HeaderSectionUser'
import Breadcrumb from './ui/Breadcrumb'

interface Props {
  toggleSidebar: () => void
  toggleUserDropdown: () => void
  isUserDropdownOpen: boolean
  closeUserDropdown: () => void
}

export default function Header({
  toggleSidebar,
  toggleUserDropdown,
  isUserDropdownOpen,
  closeUserDropdown,
}: Props) {
  return (
    <header
      className="flex h-16 bg-white shrink-0 items-center justify-between"
      onClick={closeUserDropdown}
    >
      <div className="flex items-center gap-2 px-4">
        <button
          onClick={toggleSidebar}
          className="hover:bg-gray-200 text-black inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 h-7 w-7 -ml-1 cursor-pointer"
        >
          <PanelLeft className="size-4" />
          <span className="sr-only">Toggle Sidebar</span>
        </button>

        <div className="w-px h-4 mr-2 bg-gray-300"></div>

        <Breadcrumb />
      </div>

      <HeaderSectionUser
        toggleUserDropdown={toggleUserDropdown}
        isUserDropdownOpen={isUserDropdownOpen}
      />
    </header>
  )
}
