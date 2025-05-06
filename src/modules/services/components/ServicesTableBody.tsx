import { Eye, Pencil, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Service } from '../types/ServicesTypes'
import { firstCapitalLetter } from '../../core/utils/firstCapital'
import { useModal } from '../../core/hooks/useModal'
import formatDate from '../../core/utils/formatDate'
import authStore from '../../auth/states/authStore'
import servicesStore from '../states/servicesStore'

import TableTd from '../../core/components/ui/table/TableTd'
import BadgeStateService from './ui/BadgeStateService'
import ButtonOption from '../../core/components/ui/ButtonOption'
import Modal from '../../core/components/Modal'
import ServiceEditing from './ServiceEditing'
import DeleteItem from '../../core/components/DeleteItem'

export default function ServicesTableBody({ service }: { service: Service }) {
  const { user } = authStore()
  const { deleteService } = servicesStore()
  const { isModalOpen, handleModalToggle, closeModal } = useModal()
  const handleDelete = async () => {
    await deleteService({ id: service.ser_id })
    closeModal()
  }

  return (
    <>
      <tr className="hover:bg-gray-100">
        <TableTd className="font-medium">
          {firstCapitalLetter(service.ser_incidente)}
        </TableTd>
        <TableTd className="font-medium">{service.ser_folio}</TableTd>
        <TableTd>{service.us_nombres}</TableTd>
        <TableTd>{formatDate(service.ser_creado)}</TableTd>
        <TableTd>
          <BadgeStateService state={service.estser_nombre} />
        </TableTd>
        <TableTd>{service.ser_nombre}</TableTd>
        <TableTd>{service.ser_telefono}</TableTd>
        <TableTd>
          <div className="flex justify-end gap-2">
            <Link to={`/services/${service.ser_id}`}>
              <ButtonOption className="hover:bg-gray-200">
                <Eye className="size-4" />
              </ButtonOption>
            </Link>

            {user && user.rol_nombre === 'administrador' && (
              <ButtonOption
                className="hover:bg-gray-200"
                onClick={() => handleModalToggle('edit')}
              >
                <Pencil className="size-4" />
              </ButtonOption>
            )}

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
        title={
          isModalOpen === 'edit'
            ? 'Editar el Servicio'
            : isModalOpen === 'delete'
            ? '¿Deseas eliminar el servicio?'
            : ''
        }
        isOpneModal={isModalOpen !== null}
        onClose={closeModal}
      >
        {isModalOpen === 'edit' ? (
          <ServiceEditing service={service} closeModal={closeModal} />
        ) : (
          isModalOpen === 'delete' && (
            <DeleteItem
              closeModal={closeModal}
              onDelete={handleDelete}
              message={`${service.ser_folio} - ${firstCapitalLetter(
                service.ser_incidente
              )}`}
            />
          )
        )}
      </Modal>
    </>
  )
}
