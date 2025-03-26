import { useSidebar } from './hooks/useSidebar'

import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Main from './components/Main'

export default function DashboardLayout() {
  const { isSidebarCollapsed, toggleSidebar } = useSidebar()

  return (
    <div className="flex w-screen h-screen">
      {/* Sidebar */}
      <Sidebar isSidebarCollapsed={isSidebarCollapsed} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header toggleSidebar={toggleSidebar} />

        {/* Main Content */}
        <Main>
          <div className="w-72 h-48 p-3 bg-primary-white-main rounded-lg">
            <h1 className="text-black text-2xl font-bold">Dashboard</h1>
          </div>
        </Main>
        {/* <main className="flex-1 p-4 bg-gray-50">
          Contenido principal de la aplicación
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </main> */}
      </div>
    </div>
  )
}
