import { TypeUnitWithStats } from '../types/TypesUnitsTypes'
import { firstCapitalLetter } from '../../core/utils/firstCapital'
import { useModal } from '../../core/hooks/useModal'

import TableTd from '../../core/components/ui/table/TableTd'
import GetIcon from './ui/getIcon'
import BadgeState from '../../core/components/ui/BadgeState'
import TableButtonsActions from '../../core/components/TableButonsActions'
import Modal from '../../core/components/Modal'
import TypeEditing from './modal/TypeEditing'
import DeleteItem from '../../core/components/DeleteItem'
import typesStore from '../states/typesStore'

export default function TypeTableBody({ type }: { type: TypeUnitWithStats }) {
  const { isModalOpen, handleModalToggle, closeModal } = useModal()
  const { deleteTypeUnit } = typesStore()

  const handleDelete = async () => {
    await deleteTypeUnit({ id: type.tu_id })
    closeModal()
  }

  return (
    <>
      <tr className="hover:bg-gray-100">
        <TableTd>
          <div className="flex items-center gap-2">
            {<GetIcon type={type.tu_nombre} size="size-4" />}
            <span>{firstCapitalLetter(type.tu_nombre)}</span>
          </div>
        </TableTd>

        <TableTd className="font-medium">
          <span className="ml-3">{type.totalUnits}</span>
        </TableTd>

        <TableTd className="font-medium">
          <span className="ml-3">{type.activeUnits}</span>
        </TableTd>
        <TableTd className="font-medium">
          <span className="ml-3">{type.activePercentage}%</span>
        </TableTd>

        <TableTd>
          <BadgeState state={type.est_nombre} />
        </TableTd>

        <TableTd>
          <TableButtonsActions handleModalToggle={handleModalToggle} />
        </TableTd>
      </tr>

      <Modal
        title={
          isModalOpen === 'edit'
            ? 'Editar Tipo de Unidad'
            : isModalOpen === 'delete'
            ? '¿Deseas eliminar el Tipo de Unidad?'
            : ''
        }
        isOpneModal={isModalOpen !== null}
        onClose={closeModal}
      >
        {isModalOpen === 'edit' ? (
          <TypeEditing type={type} closeModal={closeModal} />
        ) : (
          isModalOpen === 'delete' && (
            <DeleteItem
              closeModal={closeModal}
              onDelete={handleDelete}
              message={firstCapitalLetter(type.tu_nombre)}
            />
          )
        )}
      </Modal>
    </>
  )
}
