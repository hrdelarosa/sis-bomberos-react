import { useState } from 'react'
import { Personnel } from '../types/personnelTypes'
import { firstCapitalLetter } from '../../core/utils/firstCapital'

import TableTd from '../../core/components/ui/table/TableTd'
import BadgeState from '../../core/components/ui/BadgeState'
import TableButtonsActions from '../../core/components/TableButonsActions'
import Modal from '../../core/components/Modal'
import PersonnelEditingForm from './forms/PersonnelEditingForm'

export default function PersonnelTableBody({ person }: { person: Personnel }) {
  const [isModalOpen, setModalOpen] = useState(false)
  const handleModalToggle = () => setModalOpen(!isModalOpen)
  const closeModal = () => setModalOpen(false)

  return (
    <>
      <tr key={person.id} className="hover:bg-gray-100">
        <TableTd className="font-medium">
          {person.per_nombres} {person.per_apellidos}
        </TableTd>

        <TableTd>{person.per_np}</TableTd>

        <TableTd>{firstCapitalLetter(person.ran_id_per)}</TableTd>

        <TableTd>{firstCapitalLetter(person.per_base)}</TableTd>

        <TableTd>{person.gu_id_per}</TableTd>

        <TableTd>{person.et_nombre}</TableTd>

        <TableTd>
          <BadgeState state={person.est_id_per} />
        </TableTd>

        <TableTd>
          <TableButtonsActions onEdit={handleModalToggle} />
        </TableTd>
      </tr>

      <Modal
        title="Editar Personal"
        isOpneModal={isModalOpen}
        onClose={closeModal}
      >
        <PersonnelEditingForm person={person} />
      </Modal>
    </>
  )
}
