import { ChevronDown, ChevronUp, User } from 'lucide-react'

import Dropdown from './ui/Dropdown'
import MenuUser from './ui/MenuUser'

interface Props {
  toggleUserDropdown: () => void
  isUserDropdownOpen: boolean
}

export default function HeaderSectionUser({
  toggleUserDropdown,
  isUserDropdownOpen,
}: Props) {
  return (
    <div className="px-4 relative select-none">
      <Dropdown
        toggleDropdown={toggleUserDropdown}
        menu={isUserDropdownOpen && <MenuUser />}
      >
        <div className="flex items-center justify-between gap-4 rounded-lg p-1.5 text-black hover:bg-gray-100">
          <div className="flex items-center gap-1.5">
            <User className="size-8 rounded-lg p-1" />
            <div>
              <p className="truncate font-semibold">Hozmel Roberto</p>
            </div>
          </div>

          {isUserDropdownOpen ? (
            <ChevronUp className="size-5" />
          ) : (
            <ChevronDown className="size-5" />
          )}
        </div>
      </Dropdown>
    </div>
  )
}
