import { Outlet } from 'react-router-dom'
import { useSidebar } from './hooks/useSidebar'
import { useUserDropdown } from './hooks/useUserDropdown'

import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Main from './components/Main'

export default function Layout() {
  const { isSidebarCollapsed, toggleSidebar } = useSidebar()
  const { toggleUserDropdown, isUserDropdownOpen, closeUserDropdown } =
    useUserDropdown()

  return (
    <div className="flex w-screen h-screen">
      <Sidebar isSidebarCollapsed={isSidebarCollapsed} />

      <div className="flex-1 flex flex-col">
        <Header
          toggleSidebar={toggleSidebar}
          toggleUserDropdown={toggleUserDropdown}
          isUserDropdownOpen={isUserDropdownOpen}
          closeUserDropdown={closeUserDropdown}
        />

        <Main closeUserDropdown={closeUserDropdown}>
          <Outlet />
        </Main>
      </div>
    </div>
  )
}
