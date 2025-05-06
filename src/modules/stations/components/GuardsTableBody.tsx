import { Eye, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Guard } from '../types/GuardsTypes'
import { firstCapitalLetter } from '../../core/utils/firstCapital'
import { useModal } from '../../core/hooks/useModal'

import TableTd from '../../core/components/ui/table/TableTd'
import ButtonOption from '../../core/components/ui/ButtonOption'
import Modal from '../../core/components/Modal'
import DeleteItem from '../../core/components/DeleteItem'
import guardsStore from '../states/guardsStore'
import { pathsAPIURL } from '../../core/constants/pathsApi'

export default function GuardsTableBody({ guard }: { guard: Guard }) {
  const { deleteGuard } = guardsStore()
  const { isModalOpen, handleModalToggle, closeModal } = useModal()
  const handleDelete = async () => {
    await deleteGuard({ id: guard.gu_id })
    closeModal()
  }

  return (
    <>
      <tr className="hover:bg-gray-100">
        <TableTd className="font-medium">
          {firstCapitalLetter(guard.gu_nombre)}
        </TableTd>

        <TableTd>{guard.et_nombre}</TableTd>

        <TableTd>
          <div className="flex justify-end gap-2">
            <Link to={`/${pathsAPIURL.personnel.getByGuard}${guard.gu_id}`}>
              <ButtonOption className="hover:bg-gray-200">
                <Eye className="size-4" />
              </ButtonOption>
            </Link>

            <ButtonOption
              className="hover:bg-red-100"
              onClick={() => handleModalToggle('delete')}
            >
              <Trash2 className="size-4 text-red-600" />
            </ButtonOption>
          </div>
        </TableTd>
      </tr>

      <Modal
        title="Confirmar Eliminación"
        isOpneModal={isModalOpen !== null}
        onClose={closeModal}
      >
        <DeleteItem
          closeModal={closeModal}
          onDelete={handleDelete}
          message={`${firstCapitalLetter(guard.gu_nombre)} - ${
            guard.et_nombre
          }`}
        />
      </Modal>
    </>
  )
}
