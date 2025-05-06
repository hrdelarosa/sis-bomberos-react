import { Personnel } from '../types/PersonnelTypes'
import { firstCapitalLetter } from '../../core/utils/firstCapital'
import { useModal } from '../../core/hooks/useModal'
import personnelStore from '../states/personnelStore'

import TableTd from '../../core/components/ui/table/TableTd'
import BadgeState from '../../core/components/ui/BadgeState'
import TableButtonsActions from '../../core/components/TableButonsActions'
import Modal from '../../core/components/Modal'
import PersonnelEditing from './modal/PersonnelEditing'
import DeleteItem from '../../core/components/DeleteItem'

export default function PersonnelTableBody({ person }: { person: Personnel }) {
  const { deletePersonnel } = personnelStore()
  const { isModalOpen, handleModalToggle, closeModal } = useModal()
  const handleDelete = async () => {
    await deletePersonnel({ id: person.per_id })
    closeModal()
  }

  return (
    <>
      <tr key={person.per_id} className="hover:bg-gray-100">
        <TableTd className="font-medium">
          {person.per_nombres} {person.per_apellidos}
        </TableTd>

        <TableTd>{person.per_np}</TableTd>

        <TableTd>{firstCapitalLetter(person.ran_nombre)}</TableTd>

        <TableTd>{firstCapitalLetter(person.per_base)}</TableTd>

        <TableTd>{person.gu_nombre}</TableTd>

        <TableTd>{person.et_nombre}</TableTd>

        <TableTd>
          <BadgeState state={person.est_nombre} />
        </TableTd>

        <TableTd>
          <TableButtonsActions handleModalToggle={handleModalToggle} />
        </TableTd>
      </tr>

      <Modal
        title={
          isModalOpen === 'edit'
            ? 'Editar Personal'
            : isModalOpen === 'delete'
            ? '¿Deseas eliminar el personal?'
            : ''
        }
        isOpneModal={isModalOpen !== null}
        onClose={closeModal}
      >
        {isModalOpen === 'edit' ? (
          <PersonnelEditing person={person} closeModal={closeModal} />
        ) : (
          isModalOpen === 'delete' && (
            <DeleteItem
              closeModal={closeModal}
              onDelete={handleDelete}
              message={`${firstCapitalLetter(
                `${person.per_nombres} ${person.per_apellidos}`
              )} - NP ${person.per_np}`}
            />
          )
        )}
      </Modal>
    </>
  )
}
