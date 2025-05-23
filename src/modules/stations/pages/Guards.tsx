import { Plus } from 'lucide-react'
import { useGuards } from '../hooks/useGuards'
import { useModal } from '../../core/hooks/useModal'

import ButtonAction from '../../core/components/ui/ButtonAction'
import Filter from '../../units/components/ui/Filter'
import Table from '../../core/components/Table'
import GuardsTableHead from '../components/GuardsTableHead'
import GuardsTableBody from '../components/GuardsTableBody'
import TableMessage from '../../core/components/ui/table/TableMessage'
import Modal from '../../core/components/Modal'
import GuardCreate from '../components/modal/GuardCreate'
import SkeletonTable from '../../core/components/skeleton/SkeletonTable'

export default function Guards() {
  const {
    filteredGuards,
    setGuardFilter,
    errorGuards,
    loading,
    stations,
    errorStations,
  } = useGuards()
  const { isModalOpen, handleModalToggle, closeModal } = useModal()

  return (
    <div>
      <div className="flex gap-4 h-full w-full">
        <div className="bg-primary-white-main w-full text-black rounded-lg">
          <div className="flex items-center justify-between p-6">
            <h1 className="text-2xl font-semibold">Listado de las Guardias</h1>

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
            <div className="flex items-center gap-4 mb-6">
              <Filter
                label="Estación"
                htmlFor="estacion"
                onChange={(e) => setGuardFilter(e.target.value)}
              >
                <option value="Todas las estaciones">
                  Todas las estaciones
                </option>
                {!errorStations &&
                  stations.map((station) => (
                    <option key={station.et_id} value={station.et_nombre}>
                      {station.et_nombre}
                    </option>
                  ))}
              </Filter>
            </div>

            <Table head={<GuardsTableHead />}>
              {loading ? (
                <SkeletonTable colums={3} rows={7} />
              ) : errorGuards ? (
                <TableMessage colSpan={3} message={errorGuards} />
              ) : filteredGuards.length > 0 ? (
                filteredGuards.map((guard) => (
                  <GuardsTableBody key={guard.gu_id} guard={guard} />
                ))
              ) : (
                <TableMessage
                  colSpan={3}
                  message="No se encontraron las guardias con los filtros seleccionados."
                />
              )}
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}
