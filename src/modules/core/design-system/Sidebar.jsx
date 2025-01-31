import Aside from '../components/sidebar/Aside'
import SideBarResponsive from '../components/sidebar/SideBarResponsive'

export default function Sidebar({ isAsideVisible, closeAside }) {
  return (
    <>
      <div className="sidebar h-screen lg:block hidden">
        <Aside />
      </div>

      <SideBarResponsive
        isAsideVisible={isAsideVisible}
        closeAside={closeAside}
      />
    </>
  )
}
