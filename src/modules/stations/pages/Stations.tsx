import { Plus } from 'lucide-react'
import { useStations } from '../hooks/useStations'
import { useModal } from '../../core/hooks/useModal'

import ButtonAction from '../../core/components/ui/ButtonAction'
import GraphicChart from '../../core/components/ui/GraphicChart'
import Table from '../../core/components/Table'
import StationTableHead from '../components/StationTableHead'
import StationTableBody from '../components/StationsTableBody'
import TableMessage from '../../core/components/ui/table/TableMessage'
import Modal from '../../core/components/Modal'
import StationCreate from '../components/modal/StationCreate'
import SkeletonTable from '../../core/components/skeleton/SkeletonTable'

export default function Stations() {
  const { stations, loading, errorStations, active, activePercentage } =
    useStations()
  const { isModalOpen, handleModalToggle, closeModal } = useModal()

  return (
    <div>
      <div className="flex gap-4 h-full w-full">
        <div className="bg-primary-white-main w-full text-black rounded-lg">
          <div className="flex items-center justify-between p-6">
            <div className="flex flex-col gap-3.5">
              <h1 className="text-2xl font-semibold">
                Listado de las Estaciones
              </h1>

              <div>
                <ButtonAction
                  className="bg-primary-yellow text-black hover:bg-black hover:text-primary-yellow"
                  onClick={() => handleModalToggle('create')}
                >
                  <Plus className="size-4" />
                  Nueva Estación
                </ButtonAction>
              </div>

              <Modal
                title="Crear nueva Estación"
                isOpneModal={isModalOpen !== null}
                onClose={closeModal}
              >
                <StationCreate closeModal={closeModal} />
              </Modal>
            </div>

            <GraphicChart
              className="px-3 py-1.5 bg-gradient-to-br from-yellow-50/55 to-orange-50/55 border border-yellow-100/60 rounded-lg"
              title="Total de tipos de Unidades"
              total={stations.length}
              active={active.length}
              percentage={activePercentage}
            />
          </div>

          <div className="p-6 pt-0">
            <Table head={<StationTableHead />}>
              {loading ? (
                <SkeletonTable colums={6} rows={8} />
              ) : errorStations ? (
                <TableMessage colSpan={6} message={errorStations} />
              ) : !stations || stations.length === 0 ? (
                <TableMessage
                  colSpan={6}
                  message="No se han encontrado las estaciones"
                />
              ) : (
                stations.map((station) => (
                  <StationTableBody key={station.et_id} station={station} />
                ))
              )}
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}
