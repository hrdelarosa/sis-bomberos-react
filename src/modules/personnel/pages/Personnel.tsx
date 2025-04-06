import { UserPlus } from 'lucide-react'
import { firstCapitalLetter } from '../../core/utils/firstCapital'
import { usePersonnel } from '../hooks/usePersonnel'

import SearchInput from '../../core/components/ui/SearchInput'
import ButtonAction from '../../core/components/ui/ButtonAction'
import Filter from '../../units/components/ui/Filter'
import GraphicChart from '../../core/components/ui/GraphicChart'
import Table from '../../core/components/Table'
import PersonnelTableHead from '../components/PersonnelTableHead'
import PersonnelTableBody from '../components/PersonnelTableBody'
import TableMessage from '../../core/components/ui/table/TableMessage'

export default function Personnel() {
  const {
    personnel,
    sortedPersonnel,
    error,
    ranks,
    errorRanks,
    states,
    errorState,
    loading,
    search,
    setSearch,
    setRankFilter,
    setStateFilter,
    active,
    activePercentage,
    handleChangeSort,
  } = usePersonnel()

  return (
    <div>
      <div className="flex gap-4 h-full w-full">
        <div className="bg-primary-white-main w-full text-black rounded-lg">
          <div className="flex items-center justify-between p-6">
            <h1 className="text-2xl font-semibold">Listado del Personal</h1>

            <div className="flex gap-2">
              <ButtonAction className="bg-primary-yellow text-black hover:bg-black hover:text-primary-yellow">
                <UserPlus className="size-4" />
                Nuevo Personal
              </ButtonAction>
            </div>
          </div>

          <div className="p-6 pt-0">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <SearchInput
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Buscar por nombre o np..."
                />

                <Filter
                  label="Rango"
                  htmlFor="rango-personal"
                  onChange={(e) => setRankFilter(e.target.value)}
                >
                  <option value="Todos los rangos">Todos los rangos</option>
                  {!errorRanks &&
                    ranks.map((rank) => (
                      <option key={rank.id} value={rank.ran_nombre}>
                        {firstCapitalLetter(rank.ran_nombre)}
                      </option>
                    ))}
                </Filter>

                <Filter
                  label="Estado"
                  htmlFor="estado-personal"
                  onChange={(e) => setStateFilter(e.target.value)}
                >
                  <option value="Todos los estados">Todos los estados</option>
                  {!errorState &&
                    states.map((state) => (
                      <option key={state.id} value={state.est_nombre}>
                        {firstCapitalLetter(state.est_nombre)}
                      </option>
                    ))}
                </Filter>
              </div>

              <GraphicChart
                className="px-3 py-1.5 bg-gradient-to-br from-yellow-50/55 to-orange-50/55 border border-yellow-100/60 rounded-lg"
                title="Total del Personal"
                total={personnel.length}
                active={active?.length}
                percentage={activePercentage}
              />
            </div>

            <Table head={<PersonnelTableHead changeSort={handleChangeSort} />}>
              {error ? (
                <TableMessage colSpan={8} message={error} />
              ) : sortedPersonnel.length > 0 ? (
                sortedPersonnel.map((person) => (
                  <PersonnelTableBody
                    key={person.id}
                    person={person}
                    states={states}
                    ranks={ranks}
                  />
                ))
              ) : (
                <TableMessage
                  colSpan={8}
                  message="No se encontro personal con los filtros seleccionados."
                />
              )}
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}
