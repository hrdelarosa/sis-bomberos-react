import { Plus } from 'lucide-react'
import { useRanks } from '../hooks/useRanks'
import { useModal } from '../../core/hooks/useModal'

import ButtonAction from '../../core/components/ui/ButtonAction'
import GraphicChart from '../../core/components/ui/GraphicChart'
import Table from '../../core/components/Table'
import RanksTableHead from '../components/RanksTableHead'
import RanksTableBody from '../components/RanksTableBody'
import TableMessage from '../../core/components/ui/table/TableMessage'
import Modal from '../../core/components/Modal'
import RankCreate from '../components/modal/RankCreate'
import SkeletonTable from '../../core/components/skeleton/SkeletonTable'

export default function Ranks() {
  const { ranks, errorRanks, loading, active, activePercentage } = useRanks()
  const { isModalOpen, handleModalToggle, closeModal } = useModal()

  return (
    <div>
      <div className="flex gap-4 h-full w-full">
        <div className="bg-primary-white-main w-full text-black rounded-lg">
          <div className="flex items-center justify-between p-6">
            <div className="flex flex-col gap-3.5">
              <h1 className="text-2xl font-semibold">Listado de los Rangos</h1>

              <div>
                <ButtonAction
                  className="bg-primary-yellow text-black hover:bg-black hover:text-primary-yellow"
                  onClick={() => handleModalToggle('create')}
                >
                  <Plus className="size-4" />
                  Nuevo Rango
                </ButtonAction>
              </div>

              <Modal
                title="Crear nuevo Rango"
                isOpneModal={isModalOpen !== null}
                onClose={closeModal}
              >
                <RankCreate closeModal={closeModal} />
              </Modal>
            </div>

            <GraphicChart
              className="px-3 py-1.5 bg-gradient-to-br from-yellow-50/55 to-orange-50/55 border border-yellow-100/60 rounded-lg"
              title="Total de tipos de Unidades"
              total={ranks.length}
              active={active?.length}
              percentage={activePercentage}
            />
          </div>

          <div className="p-6 pt-0">
            <Table head={<RanksTableHead />}>
              {loading ? (
                <SkeletonTable colums={6} rows={8} />
              ) : errorRanks ? (
                <TableMessage colSpan={6} message={errorRanks} />
              ) : !ranks || ranks.length === 0 ? (
                <TableMessage
                  colSpan={6}
                  message="No se han encontrado los rangos"
                />
              ) : (
                ranks.map((rank) => (
                  <RanksTableBody key={rank.ran_id} rank={rank} />
                ))
              )}
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}
