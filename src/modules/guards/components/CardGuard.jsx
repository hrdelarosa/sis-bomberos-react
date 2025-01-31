import { Trash, VisitArrow } from '../../core/components/Icons'
import { Guards, Stations } from '../../core/components/sidebar/Icons'
import { useAnimation } from '../../core/hooks/useAnimation'
import useGuardsStore from '../store/guards'

import ButtomOptionsCard from '../../core/components/UI/ButtonOptionsCard'
import Menu from '../../core/components/menu/Menu'
import MenuAction from '../../core/components/menu/MenuAction'
import MenuActionLink from '../../core/components/menu/MenuActionLink'

export default function CardGuard({ guard, isMenuOpen, handleMenuToggle }) {
  const { deleteStationById } = useGuardsStore()
  const { animationParent } = useAnimation()
  const estacion = guard.et_nombre.split('-')

  return (
    <div
      ref={animationParent}
      className="flex flex-col gap-4 bg-white p-5 rounded-lg w-full max-w-[288px]"
    >
      <div className="flex justify-between items-center gap-3 w-full">
        <div className="flex items-center gap-1.5 text-fireRed-950">
          <Stations size="size-4" />

          <span className="text-sm text-gray-700 font-semibold">
            {estacion[1]}
          </span>
        </div>

        <ButtomOptionsCard
          className="-top-[18px] -right-2"
          handleMenuToggle={handleMenuToggle}
        />
      </div>

      <div className="flex items-center gap-2 text-gray-700">
        <Guards size="size-7" />

        <h3 className="text-2xl font-semibold text-black">{guard.gu_nombre}</h3>
      </div>

      <Menu className="-top-14 right-9" isMenuOpen={isMenuOpen}>
        <MenuActionLink
          to={`/suport/guards/${guard.gu_nombre.split(' ').join('-')}/${
            guard.id
          }`}
          className="hover:bg-fireYellow-300 hover:text-black"
        >
          <VisitArrow />
          Ver
        </MenuActionLink>
        <MenuAction
          action={() => deleteStationById({ id: guard.id })}
          className="hover:bg-fireRed-800 hover:text-fireRed-50"
        >
          <Trash />
          Eliminar
        </MenuAction>
      </Menu>
    </div>
  )
}
