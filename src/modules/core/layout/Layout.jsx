import { useSideBar } from '../hooks/sidebar/useSidebar'

import Sidebar from '../design-system/Sidebar'
import Header from '../design-system/Header'
import ContentMain from '../design-system/ContentMain'

export default function Layout({ children }) {
  const { isAsideVisible, closeAside, toggleAside } = useSideBar()

  return (
    <div className="dashboard h-screen w-screen">
      <Sidebar isAsideVisible={isAsideVisible} closeAside={closeAside} />

      <Header toggleAside={toggleAside} />

      <ContentMain>{children}</ContentMain>
    </div>
  )
}
