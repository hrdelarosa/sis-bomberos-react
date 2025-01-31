import { capitalLetter } from '../../../core/lib/firstCapitalLetter'
import { Trash } from '../../../core/components/Icons'
import { Truck } from '../../../core/components/sidebar/Icons'
import { useAnimation } from '../../../core/hooks/useAnimation'
import useUnitsStore from '../../store/units'

import ButtomOptionsCard from '../../../core/components/UI/ButtonOptionsCard'
import Menu from '../../../core/components/menu/Menu'
import MenuAction from '../../../core/components/menu/MenuAction'

export default function CardType({ type, isMenuOpen, handleMenuToggle }) {
  const { deleteTypeUById } = useUnitsStore()
  const { animationParent } = useAnimation()

  return (
    <div
      ref={animationParent}
      className="flex flex-col gap-3 bg-white p-5 rounded-lg w-full max-w-[288px]"
    >
      <div className="flex flex-col items-center gap-1 text-gray-500">
        <ButtomOptionsCard
          className="-top-[8px] -right-[132px]"
          handleMenuToggle={handleMenuToggle}
        />

        <Truck size="size-6" />
        <h3 className="text-2xl font-semibold text-black">
          {capitalLetter(type.tu_nombre)}
        </h3>
      </div>

      <Menu className="-top-7 right-9" isMenuOpen={isMenuOpen}>
        <MenuAction
          action={() => deleteTypeUById({ id: type.id })}
          className="hover:bg-fireRed-800 hover:text-fireRed-50"
        >
          <Trash />
          Eliminar
        </MenuAction>
      </Menu>
    </div>
  )
}
