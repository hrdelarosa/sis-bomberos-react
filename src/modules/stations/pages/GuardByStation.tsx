import { Plus } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { useGuardByStation } from '../hooks/useGuardByStation'
import { useModal } from '../../core/hooks/useModal'

import ButtonAction from '../../core/components/ui/ButtonAction'
import Table from '../../core/components/Table'
import GuardsTableHead from '../components/GuardsTableHead'
import GuardsTableBody from '../components/GuardsTableBody'
import TableMessage from '../../core/components/ui/table/TableMessage'
import Modal from '../../core/components/Modal'
import GuardCreate from '../components/modal/GuardCreate'
import Loader from '../../core/components/ui/Loader'

export default function GuardsByStation() {
  const { id } = useParams<{ id: string }>()
  const { guards, errorGuards, loading } = useGuardByStation({ id: Number(id) })
  const { isModalOpen, handleModalToggle, closeModal } = useModal()

  return (
    <div>
      <div className="flex gap-4 h-full w-full">
        <div className="bg-primary-white-main w-full text-black rounded-lg">
          <div className="flex items-center justify-between p-6">
            <h1 className="text-2xl font-semibold">
              Listado de las Guardias - {guards[0]?.et_nombre}
            </h1>

            <div>
              <ButtonAction
                className="bg-primary-yellow text-black hover:bg-black hover:text-primary-yellow"
                onClick={() => handleModalToggle('create')}
              >
                <Plus className="size-4" />
                Nueva Guardia
              </ButtonAction>
            </div>

            <Modal
              title="Crear nueva Guardia"
              isOpneModal={isModalOpen !== null}
              onClose={closeModal}
            >
              <GuardCreate closeModal={closeModal} />
            </Modal>
          </div>

          <div className="p-6 pt-0">
            <Table head={<GuardsTableHead />}>
              {loading ? (
                <Loader />
              ) : errorGuards ? (
                <TableMessage colSpan={3} message={errorGuards} />
              ) : !guards || guards.length === 0 ? (
                <TableMessage
                  colSpan={8}
                  message="No se han encontrado las guardias por la estación"
                />
              ) : (
                guards.map((guard) => (
                  <GuardsTableBody key={guard.gu_id} guard={guard} />
                ))
              )}
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}
