import { Plus } from 'lucide-react'
import { useGuards } from '../hooks/useGuards'

import ButtonAction from '../../core/components/ui/ButtonAction'
import Filter from '../../units/components/ui/Filter'
import Table from '../../core/components/Table'
import GuardsTableHead from '../components/GuardsTableHead'
import GuardsTableBody from '../components/GuardsTableBody'
import TableMessage from '../../core/components/ui/table/TableMessage'

export default function Guards() {
  const {
    filteredGuards,
    setGuardFilter,
    errorGuards,
    loading,
    stations,
    error,
  } = useGuards()

  return (
    <div>
      <div className="flex gap-4 h-full w-full">
        <div className="bg-primary-white-main w-full text-black rounded-lg">
          <div className="flex items-center justify-between p-6">
            <h1 className="text-2xl font-semibold">Listado de las Guardias</h1>

            <div>
              <ButtonAction className="bg-primary-yellow text-black hover:bg-black hover:text-primary-yellow">
                <Plus className="size-4" />
                Nueva Guardia
              </ButtonAction>
            </div>
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
                {!error &&
                  stations.map((station) => (
                    <option key={station.id} value={station.et_nombre}>
                      {station.et_nombre}
                    </option>
                  ))}
              </Filter>
            </div>

            <Table head={<GuardsTableHead />}>
              {errorGuards ? (
                <TableMessage colSpan={3} message={errorGuards} />
              ) : filteredGuards.length > 0 ? (
                filteredGuards.map((guard) => (
                  <GuardsTableBody key={guard.id} guard={guard} />
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
