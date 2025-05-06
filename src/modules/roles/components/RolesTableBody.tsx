import { RoleWithStats } from '../types/RolesTypes'
import { firstCapitalLetter } from '../../core/utils/firstCapital'
import { useModal } from '../../core/hooks/useModal'

import TableTd from '../../core/components/ui/table/TableTd'
import BadgeState from '../../core/components/ui/BadgeState'
import TableButtonsActions from '../../core/components/TableButonsActions'
import Modal from '../../core/components/Modal'
import DeleteItem from '../../core/components/DeleteItem'
import RoleEditing from './modal/RoleEditing'
import rolesStore from '../states/rolesStore'

export default function RolesTableBody({ role }: { role: RoleWithStats }) {
  const { isModalOpen, handleModalToggle, closeModal } = useModal()
  const { deleteRole } = rolesStore()

  const handleDelete = async () => {
    await deleteRole({ id: role.rol_id })
    closeModal()
  }

  return (
    <>
      <tr className="hover:bg-gray-100">
        <TableTd className="font-medium">
          {firstCapitalLetter(role.rol_nombre)}
        </TableTd>

        <TableTd>{role.rol_descripcion}</TableTd>

        <TableTd className="font-medium">
          <span className="ml-3">{role.totalUsers}</span>
        </TableTd>

        <TableTd className="font-medium">
          <span className="ml-3">{role.activeUsers}</span>
        </TableTd>

        <TableTd className="font-medium">
          <span className="ml-3">{role.activePercentage}%</span>
        </TableTd>

        <TableTd>
          <BadgeState state={role.est_nombre} />
        </TableTd>

        <TableTd>
          <TableButtonsActions handleModalToggle={handleModalToggle} />
        </TableTd>
      </tr>

      <Modal
        title={
          isModalOpen === 'edit'
            ? 'Editar Rol'
            : isModalOpen === 'delete'
            ? '¿Deseas eliminar el Rol?'
            : ''
        }
        isOpneModal={isModalOpen !== null}
        onClose={closeModal}
      >
        {isModalOpen === 'edit' ? (
          <RoleEditing role={role} closeModal={closeModal} />
        ) : (
          isModalOpen === 'delete' && (
            <DeleteItem
              closeModal={closeModal}
              onDelete={handleDelete}
              message={firstCapitalLetter(role.rol_nombre)}
            />
          )
        )}
      </Modal>
    </>
  )
}
