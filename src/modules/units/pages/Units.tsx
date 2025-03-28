import { Plus } from 'lucide-react'
import { firstCapitalLetter } from '../../core/utils/firstCapital'
import { useUnits } from '../hooks/useUnits'

import ButtonAction from '../../core/components/ui/ButtonAction'
import Filter from '../components/ui/Filter'
import GraphicChart from '../components/ui/GraphicChart'
import Table from '../../core/components/Table'
import UnitsTableHead from '../components/UnitsTableHead'
import UnitsTableBody from '../components/UnitsTableBody'
import TableMessage from '../../core/components/ui/table/TableMessage'

export default function Units() {
  const {
    units,
    error,
    loading,
    types,
    errorTypes,
    states,
    errorState,
    handleFilterChange,
    active,
    activePercentage,
    filteredUnits,
  } = useUnits()

  console.log(units, types)

  return (
    <div>
      <div className="flex gap-4 h-full w-full">
        <div className="bg-primary-white-main w-full text-black rounded-lg">
          <div className="flex items-center justify-between p-6">
            <h1 className="text-2xl font-semibold">Listado de Unidades</h1>

            <div className="flex gap-2">
              <ButtonAction className="bg-primary-yellow text-black hover:bg-black hover:text-primary-yellow">
                <Plus className="size-4" />
                Nueva Unidad
              </ButtonAction>
            </div>
          </div>

          <div className="p-6 pt-0">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <Filter
                  label="Tipo de Unidad"
                  htmlFor="tipo-unidad"
                  onChange={(e) => handleFilterChange('type', e.target.value)}
                >
                  <option value="Todos los tipos">Todos los tipos</option>
                  {!errorTypes &&
                    types.map((type) => (
                      <option key={type.id} value={type.tu_nombre}>
                        {firstCapitalLetter(type.tu_nombre)}
                      </option>
                    ))}
                </Filter>

                <Filter
                  label="Estado"
                  htmlFor="estado-unidad"
                  onChange={(e) => handleFilterChange('status', e.target.value)}
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
                title="Total de Unidades"
                total={units.length}
                active={active?.length}
                percentage={activePercentage}
              />
            </div>

            <Table head={<UnitsTableHead />}>
              {error ? (
                <TableMessage colSpan={4} message={error} />
              ) : filteredUnits.length > 0 ? (
                filteredUnits.map((unit) => (
                  <UnitsTableBody key={unit.id} unit={unit} />
                ))
              ) : (
                <TableMessage
                  colSpan={4}
                  message="No se encontraron unidades con los filtros seleccionados."
                />
              )}
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}
