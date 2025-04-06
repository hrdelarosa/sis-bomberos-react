import { User } from '../types/UsersTypes'
import { useModal } from '../../core/hooks/useModal'
import { firstCapitalLetter } from '../../core/utils/firstCapital'

import TableTd from '../../core/components/ui/table/TableTd'
import BadgeState from '../../core/components/ui/BadgeState'
import TableButtonsActions from '../../core/components/TableButonsActions'
import formatDate from '../../core/utils/formatDate'
import Modal from '../../core/components/Modal'
import DeleteItem from '../../core/components/DeleteItem'
import UserEditing from './modal/UsersEditing'

export default function UsersTableBody({ user }: { user: User }) {
  const { isModalOpen, handleModalToggle, closeModal } = useModal()
  const handleDelete = () => {
    console.log(`Usuario ${user.us_correo} eliminado`)
    closeModal()
  }

  return (
    <>
      <tr key={user.us_id} className="hover:bg-gray-100">
        <TableTd className="font-medium">
          {user.us_nombres} {user.us_apellidos}
        </TableTd>
        <TableTd className="font-medium">{user.us_correo}</TableTd>
        <TableTd>{firstCapitalLetter(user.rol_nombre)}</TableTd>
        <TableTd>
          <BadgeState state={user.est_nombre} />
        </TableTd>
        <TableTd className="font-medium">
          <span className="ml-3">{user.us_verificado ? 'Si' : 'No'}</span>
        </TableTd>
        <TableTd>{formatDate(user.us_creado)}</TableTd>
        <TableTd>{formatDate(user.us_actualizacion)}</TableTd>
        <TableTd className="font-medium">{user.total_servicios}</TableTd>
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
          <UserEditing user={user} closeModal={closeModal} />
        ) : (
          isModalOpen === 'delete' && (
            <DeleteItem
              closeModal={closeModal}
              onDelete={handleDelete}
              message={`el Usuario ${user.us_correo}`}
            />
          )
        )}
      </Modal>
    </>
  )
}
