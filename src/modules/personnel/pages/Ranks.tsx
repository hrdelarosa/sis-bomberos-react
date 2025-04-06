import { Plus } from 'lucide-react'
import { useRanks } from '../hooks/useRanks'

import ButtonAction from '../../core/components/ui/ButtonAction'
import GraphicChart from '../../core/components/ui/GraphicChart'
import Table from '../../core/components/Table'
import RanksTableHead from '../components/RanksTableHead'
import RanksTableBody from '../components/RanksTableBody'
import TableMessage from '../../core/components/ui/table/TableMessage'

export default function Ranks() {
  const {
    ranks,
    errorRanks,
    loadingRanks,
    active,
    activePercentage,
    personnelByRank,
  } = useRanks()

  return (
    <div>
      <div className="flex gap-4 h-full w-full">
        <div className="bg-primary-white-main w-full text-black rounded-lg">
          <div className="flex items-center justify-between p-6">
            <div className="flex flex-col gap-3.5">
              <h1 className="text-2xl font-semibold">Listado de los Rangos</h1>

              <div>
                <ButtonAction className="bg-primary-yellow text-black hover:bg-black hover:text-primary-yellow">
                  <Plus className="size-4" />
                  Nuevo Rango
                </ButtonAction>
              </div>
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
              {errorRanks ? (
                <TableMessage colSpan={8} message={errorRanks} />
              ) : (
                personnelByRank.length > 0 &&
                personnelByRank.map((rank) => (
                  <RanksTableBody key={rank.category} rank={rank} />
                ))
              )}
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}
