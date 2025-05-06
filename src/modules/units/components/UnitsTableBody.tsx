import { Unit } from '../types/UnitsTypes'
import { firstCapitalLetter } from '../../core/utils/firstCapital'
import { useModal } from '../../core/hooks/useModal'

import TableTd from '../../core/components/ui/table/TableTd'
import GetIcon from './ui/getIcon'
import BadgeState from '../../core/components/ui/BadgeState'
import TableButtonsActions from '../../core/components/TableButonsActions'
import Modal from '../../core/components/Modal'
import UnitEditing from './modal/UnitEditing'
import DeleteItem from '../../core/components/DeleteItem'
import unitsStore from '../states/unitsStore'

export default function UnitsTableBody({ unit }: { unit: Unit }) {
  const { isModalOpen, handleModalToggle, closeModal } = useModal()
  const { deleteUnit } = unitsStore()
  const handleDelete = async () => {
    await deleteUnit({ id: unit.uni_id })
    closeModal()
  }

  return (
    <>
      <tr className="hover:bg-gray-100">
        <TableTd className="font-medium">{unit.uni_numero}</TableTd>

        <TableTd>
          <div className="flex items-center gap-2">
            {<GetIcon type={unit.tu_nombre} size="size-4" />}
            <span>{firstCapitalLetter(unit.tu_nombre)}</span>
          </div>
        </TableTd>

        <TableTd>
          <BadgeState state={unit.est_nombre} />
        </TableTd>

        <TableTd>
          <TableButtonsActions handleModalToggle={handleModalToggle} />
        </TableTd>
      </tr>

      <Modal
        title={
          isModalOpen === 'edit'
            ? 'Editar Unidad'
            : isModalOpen === 'delete'
            ? 'Confirmar Eliminación'
            : ''
        }
        isOpneModal={isModalOpen !== null}
        onClose={closeModal}
      >
        {isModalOpen === 'edit' ? (
          <UnitEditing unit={unit} closeModal={closeModal} />
        ) : (
          isModalOpen === 'delete' && (
            <DeleteItem
              closeModal={closeModal}
              onDelete={handleDelete}
              message={`${firstCapitalLetter(unit.tu_nombre)} - #${
                unit.uni_numero
              }`}
            />
          )
        )}
      </Modal>
    </>
  )
}
