import { useUsers } from '../hooks/useUsers'
import { firstCapitalLetter } from '../../core/utils/firstCapital'

import SearchInput from '../../core/components/ui/SearchInput'
import Filter from '../../units/components/ui/Filter'
import GraphicChart from '../../core/components/ui/GraphicChart'
import Table from '../../core/components/Table'
import UsersTableHead from '../components/UsersTableHead'
import UsersTableBody from '../components/UsersTableBody'
import TableMessage from '../../core/components/ui/table/TableMessage'
import SkeletonTable from '../../core/components/skeleton/SkeletonTable'

export default function Users() {
  const {
    users,
    filteredUsers,
    errorUsers,
    loading,
    roles,
    errorRoles,
    states,
    errorState,
    search,
    setSearch,
    setRoleFilter,
    setStateFilter,
    active,
    activePercentage,
  } = useUsers()

  return (
    <div>
      <div className="flex gap-4 h-full w-full">
        <div className="bg-primary-white-main w-full text-black rounded-lg">
          <div className="flex items-center justify-between p-6">
            <h1 className="text-2xl font-semibold">Listado de los Usuarios</h1>
          </div>

          <div className="p-6 pt-0">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <SearchInput
                  label="Buscar un Usuario"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Buscar por nombre o correo..."
                />

                <Filter
                  label="Rol"
                  htmlFor="rol-usuairo"
                  onChange={(e) => setRoleFilter(e.target.value)}
                >
                  <option value="Todos los roles">Todos los roles</option>
                  {!errorRoles &&
                    roles.map((role) => (
                      <option key={role.rol_id} value={role.rol_nombre}>
                        {firstCapitalLetter(role.rol_nombre)}
                      </option>
                    ))}
                </Filter>

                <Filter
                  label="Estado"
                  htmlFor="estado-usuario"
                  onChange={(e) => setStateFilter(e.target.value)}
                >
                  <option value="Todos los estados">Todos los estados</option>
                  {!errorState &&
                    states.map((state) => (
                      <option key={state.est_id} value={state.est_nombre}>
                        {firstCapitalLetter(state.est_nombre)}
                      </option>
                    ))}
                </Filter>
              </div>

              <GraphicChart
                className="px-3 py-1.5 bg-gradient-to-br from-yellow-50/55 to-orange-50/55 border border-yellow-100/60 rounded-lg"
                title="Usuarios Totales"
                total={users.length}
                active={active.length}
                percentage={activePercentage}
              />
            </div>

            <Table head={<UsersTableHead />}>
              {loading ? (
                <SkeletonTable colums={9} rows={7} />
              ) : errorUsers ? (
                <TableMessage colSpan={9} message={`errorUsers`} />
              ) : filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <UsersTableBody key={user.us_id} user={user} />
                ))
              ) : (
                <TableMessage
                  colSpan={9}
                  message="No se encontraron los usuarios con los filtros seleccionados."
                />
              )}
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}
