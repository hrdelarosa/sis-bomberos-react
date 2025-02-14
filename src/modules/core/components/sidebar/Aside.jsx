import { Link } from 'react-router-dom'
import { BomberosIcon, DocumentAdd } from '../Icons'
import { PATHS } from '../../constants/sidebar/pathLink'
import { USER_ROLE } from '../../constants/sidebar/userRole'
import { useContentNav } from '../../hooks/sidebar/useContentNav'
import { useAnimation } from '../../hooks/useAnimation'
import {
  CongSettings,
  Documents,
  FolderOpen,
  Guards,
  LogoutIcon,
  Personnel,
  ProfileIcon,
  Ranks,
  Roles,
  Squares2X2,
  Stations,
  Truck,
  Users,
  WrenchUnitType,
} from './Icons'
import useAuthStore from '../../../auth/store/auth'

import SidebarGroupContent from './SidebarGroupContent'
import SidebarMenu from './SidebarMenu'
import SidebarAction from '../../components/sidebar/SidebarAction'
import NavItem from './NavItem'

export default function Aside() {
  const { user, logout } = useAuthStore()
  const { openSections, toggleSection } = useContentNav()
  const { animationParent } = useAnimation()

  return (
    <aside
      className={`h-screen flex flex-col gap-3 w-72 px-5 py-4 bg-fireRed-900 text-white`}
    >
      <div className="flex flex-row justify-center mb-2">
        <Link
          className="flex flex-row justify-center items-center gap-px group"
          to="/"
        >
          <div className="group-hover:scale-[1.03] group-hover:translate-x-0.5 transition-transform">
            <BomberosIcon size="size-14" />
          </div>

          <div className="flex flex-col">
            <span className="text-lg font-medium">Bomberos</span>
            <small className="text-xs font-normal text-gray-300">
              Sistema de Gestion
            </small>
          </div>
        </Link>
      </div>

      <nav className="h-full overflow-y-auto overflow-x-auto nav_main">
        <ul className="flex flex-col gap-2.5">
          <SidebarGroupContent>
            <SidebarMenu to={PATHS.menu.dasboard.to}>
              <Squares2X2 />
              {PATHS.menu.dasboard.path}
            </SidebarMenu>

            <SidebarMenu to={PATHS.menu.profile.to}>
              <ProfileIcon />
              {PATHS.menu.profile.path}
            </SidebarMenu>
          </SidebarGroupContent>

          <div ref={animationParent}>
            <NavItem
              label={PATHS.services.path}
              hasChildren={true}
              isOpen={openSections.services}
              onClick={() => toggleSection('services')}
              icon={FolderOpen}
            />
            {openSections.services && (
              <div className="flex flex-col gap-0.5 py-1.5 pl-4">
                <SidebarMenu to={PATHS.services.to}>
                  <Documents />
                  {PATHS.services.path}
                </SidebarMenu>

                <SidebarMenu to={PATHS.services.new.to}>
                  <DocumentAdd />
                  {PATHS.services.new.path}
                </SidebarMenu>
              </div>
            )}
          </div>

          {user && user.rol_nombre === USER_ROLE.ADMINISTRADOR && (
            <SidebarGroupContent group="soporte" id="soporte">
              <SidebarMenu to={PATHS.suport.stations.to}>
                <Stations />
                {PATHS.suport.stations.path}
              </SidebarMenu>

              <div ref={animationParent}>
                <NavItem
                  label={PATHS.suport.personnel.path}
                  hasChildren={true}
                  isOpen={openSections.personal}
                  onClick={() => toggleSection('personal')}
                  icon={Personnel}
                />
                {openSections.personal && (
                  <div className="flex flex-col gap-0.5 py-1.5 pl-4">
                    <SidebarMenu to={PATHS.suport.guards.to}>
                      <Guards />
                      {PATHS.suport.guards.path}
                    </SidebarMenu>
                    <SidebarMenu to={PATHS.suport.personnel.to}>
                      <Personnel />
                      {PATHS.suport.personnel.path}
                    </SidebarMenu>
                    <SidebarMenu to={PATHS.suport.ranks.to}>
                      <Ranks />
                      {PATHS.suport.ranks.path}
                    </SidebarMenu>
                  </div>
                )}
              </div>

              <SidebarMenu to={PATHS.suport.roles.to}>
                <Roles />
                {PATHS.suport.roles.path}
              </SidebarMenu>

              <div ref={animationParent}>
                <NavItem
                  label={PATHS.suport.units.path}
                  hasChildren={true}
                  isOpen={openSections.units}
                  onClick={() => toggleSection('units')}
                  icon={Truck}
                />
                {openSections.units && (
                  <div className="flex flex-col gap-0.5 py-1.5 pl-4">
                    <SidebarMenu to={PATHS.suport.units.to}>
                      <Truck />
                      {PATHS.suport.units.path}
                    </SidebarMenu>

                    <SidebarMenu to={PATHS.suport.units.type.to}>
                      <WrenchUnitType />
                      {PATHS.suport.units.type.path}
                    </SidebarMenu>
                  </div>
                )}
              </div>

              <SidebarMenu to={PATHS.suport.users.to}>
                <Users />
                {PATHS.suport.users.path}
              </SidebarMenu>
            </SidebarGroupContent>
          )}
        </ul>
      </nav>

      <div className="flex flex-col justify-center gap-2.5 mt-1">
        <SidebarMenu to={PATHS.settings.to}>
          <CongSettings />
          {PATHS.settings.path}
        </SidebarMenu>

        <div className="w-full h-0.5 bg-fireYellow-400/55"></div>

        <SidebarAction action={logout}>
          <div className="group-hover:text-fireRed-900 group-hover:scale-110 group-hover:translate-x-1 duration-300">
            <LogoutIcon />
          </div>
          <span>Cerrar Sesión</span>
        </SidebarAction>
      </div>
    </aside>
  )
}
