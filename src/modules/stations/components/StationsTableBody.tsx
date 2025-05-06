import { Eye } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Station } from '../types/StationsTypes'
import { useModal } from '../../core/hooks/useModal'
import { firstCapitalLetter } from '../../core/utils/firstCapital'

import TableTd from '../../core/components/ui/table/TableTd'
import BadgeState from '../../core/components/ui/BadgeState'
import TableButtonsActions from '../../core/components/TableButonsActions'
import Modal from '../../core/components/Modal'
import StationEditing from './modal/StationEditing'
import DeleteItem from '../../core/components/DeleteItem'
import stationsStore from '../states/stationsStore'
import ButtonOption from '../../core/components/ui/ButtonOption'

export default function StationTableBody({ station }: { station: Station }) {
  const { deleteStation } = stationsStore()
  const { isModalOpen, handleModalToggle, closeModal } = useModal()
  const handleDelete = async () => {
    await deleteStation({ id: station.et_id })
    closeModal()
  }

  return (
    <>
      <tr className="hover:bg-gray-100">
        <TableTd className="font-medium">{station.et_nombre}</TableTd>

        <TableTd>{station.et_ubicacion}</TableTd>

        <TableTd>
          <BadgeState state={station.est_nombre} />
        </TableTd>

        <TableTd>
          <TableButtonsActions handleModalToggle={handleModalToggle}>
            <Link to={`/stations/guards/${station.et_id}`}>
              <ButtonOption className="hover:bg-gray-200">
                <Eye className="size-4" />
              </ButtonOption>
            </Link>
          </TableButtonsActions>
        </TableTd>
      </tr>

      <Modal
        title={
          isModalOpen === 'edit'
            ? 'Editar Estación'
            : isModalOpen === 'delete'
            ? 'Confirmar Eliminación'
            : ''
        }
        isOpneModal={isModalOpen !== null}
        onClose={closeModal}
      >
        {isModalOpen === 'edit' ? (
          <StationEditing station={station} closeModal={closeModal} />
        ) : (
          isModalOpen === 'delete' && (
            <DeleteItem
              closeModal={closeModal}
              onDelete={handleDelete}
              message={firstCapitalLetter(station.et_nombre)}
            />
          )
        )}
      </Modal>
    </>
  )
}
