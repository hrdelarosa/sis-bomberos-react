import { capitalLetter } from '../../core/lib/firstCapitalLetter'
import { Trash, VisitArrow } from '../../core/components/Icons'
import { ShieldExclamation } from './Icons'
import { useAnimation } from '../../core/hooks/useAnimation'
import useRoleStore from '../store/roles'

import ButtomOptionsCard from '../../core/components/UI/ButtonOptionsCard'
import Menu from '../../core/components/menu/Menu'
import MenuActionLink from '../../core/components/menu/MenuActionLink'
import MenuAction from '../../core/components/menu/MenuAction'

export default function CardRole({ role, isMenuOpen, handleMenuToggle }) {
  const { deleteRoleById } = useRoleStore()
  const { animationParent } = useAnimation()

  return (
    <div
      ref={animationParent}
      className="flex flex-col gap-4 bg-white p-5 rounded-lg w-full max-w-[386px]"
    >
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ShieldExclamation />

            <span className="text-xl font-semibold">
              {capitalLetter(role.rol_nombre)}
            </span>
          </div>

          <ButtomOptionsCard
            className="-top-[18px] -right-2"
            handleMenuToggle={handleMenuToggle}
          />
        </div>

        <div className="h-12">
          <p className="text-gray-600 font-medium">{role.rol_descripcion}</p>
        </div>
      </div>

      <Menu className="-top-11 right-9" isMenuOpen={isMenuOpen}>
        <MenuActionLink
          to=""
          className="hover:bg-fireYellow-300 hover:text-black"
        >
          <VisitArrow />
          Ver
        </MenuActionLink>
        <MenuAction
          action={() => deleteRoleById({ id: role.id })}
          className="hover:bg-fireRed-800 hover:text-fireRed-50"
        >
          <Trash />
          Eliminar
        </MenuAction>
      </Menu>
    </div>
  )
}
