import { capitalLetter } from '../../../core/lib/firstCapitalLetter'
import { useAnimation } from '../../../core/hooks/useAnimation'
import { PensilEdit, Trash } from '../../../core/components/Icons'
import useUnitsStore from '../../store/units'

import Badge from '../../../core/components/UI/Badge'
import ButtomOptionsCard from '../../../core/components/UI/ButtonOptionsCard'
import UnitNumber from './UnitNumber'
import Menu from '../../../core/components/menu/Menu'
import MenuAction from '../../../core/components/menu/MenuAction'

export default function UnitCard({
  unit,
  isMenuOpen,
  handleMenuToggle,
  onEdit,
  handleModalToggle,
}) {
  const { deleteUnitById } = useUnitsStore()
  const { animationParent } = useAnimation()

  const editingUnit = (unit) => {
    onEdit(unit)
    handleModalToggle()
  }

  return (
    <div
      ref={animationParent}
      className="flex flex-col gap-3 bg-white p-5 rounded-lg w-full max-w-[286px]"
    >
      <div className="flex justify-between items-center w-full">
        <h3 className="text-xl font-semibold">
          {capitalLetter(unit.tu_nombre)}
        </h3>
        <div>
          <div className="mr-1.5">
            <Badge state={unit.est_id_uni} />
          </div>

          <ButtomOptionsCard
            className="-top-9 -right-3"
            handleMenuToggle={handleMenuToggle}
          />
        </div>
      </div>

      <UnitNumber number={unit.uni_numero} />

      <Menu className="-top-14 right-7" isMenuOpen={isMenuOpen}>
        <MenuAction
          action={() => editingUnit(unit)}
          className="hover:bg-fireYellow-300 hover:text-black"
        >
          <PensilEdit />
          Editar
        </MenuAction>
        <MenuAction
          action={() => deleteUnitById({ id: unit.id })}
          className="hover:bg-fireRed-800 hover:text-fireRed-50"
        >
          <Trash />
          Eliminar
        </MenuAction>
      </Menu>
    </div>
  )
}
