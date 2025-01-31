import { useEffect } from 'react'
import { MagnifyingGlass } from '../core/components/Icons'
import { useSortedUsers } from './hooks/useSortedUsers'
import { useModal } from '../core/hooks/modal/useModal'
import useUsersStore from './store/users'
import useRoleStore from '../roles/store/roles'
import useStatesStore from '../states/store/states'

import Layout from '../core/layout/Layout'
import ContainerPage from '../core/components/page/ContainerPage'
import ContentTitlePage from '../core/components/page/ContentTitlePage'
import Input from '../core/components/UI/Input'
import Loading from '../core/components/UI/Loading'
import ListUsers from './components/ListUsers'
import UserEditModal from './components/UserEditModal'
import SelectFilter from './components/SelectFilter'
import { GroupOtion, Option } from './components/GroupOtion'

export default function Users() {
  const { users, error, getAllUsers, loading, upgrade } = useUsersStore()
  const { search, setSearch, filterValue, setFilterValue, filteredUsers } =
    useSortedUsers({ users })
  const {
    isModalOpen,
    editingItem,
    handleModalToggle,
    closeModal,
    handleEdit,
  } = useModal()
  const { roles, getAllRoles } = useRoleStore()
  const { states, getAllStates } = useStatesStore()

  useEffect(() => {
    getAllUsers()
    getAllRoles()
    getAllStates()
  }, [getAllUsers, getAllStates, getAllRoles, upgrade])

  return (
    <Layout>
      <ContainerPage>
        <ContentTitlePage title="Usuarios">
          <div className="flex items-center gap-3.5">
            <div className="relative">
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                className={`bg-white text-black ring-gray-300 focus:ring-gray-500 focus:bg-white w-[230px] pr-6 text-sm`}
                placeholder="Buscar usuario..."
              />
              <div className="absolute top-2 right-1.5 text-gray-500">
                <MagnifyingGlass />
              </div>
            </div>
            <SelectFilter
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
              className={`${filterValue === '' && 'text-gray-400'}`}
            >
              <Option value="" text="Selecciona filtro..." />
              <GroupOtion label="Roles">
                {roles.map((role) => (
                  <Option
                    key={role.id}
                    value={`role:${role.rol_nombre}`}
                    text={role.rol_nombre}
                  />
                ))}
              </GroupOtion>
              <GroupOtion label="Estados">
                {states.map((state) => (
                  <Option
                    key={state.id}
                    value={`state:${state.est_nombre}`}
                    text={state.est_nombre}
                  />
                ))}
              </GroupOtion>
              <GroupOtion label="Verificado">
                <Option value="verified:true" text="Verificados" />
                <Option value="verified:false" text="No verificados" />
              </GroupOtion>
            </SelectFilter>
          </div>
        </ContentTitlePage>

        {error ? (
          <p>Error al encontrar el usuario: {error}</p>
        ) : loading ? (
          <Loading />
        ) : (
          <ListUsers
            users={filteredUsers}
            onEdit={handleEdit}
            handleModalToggle={handleModalToggle}
          />
        )}
      </ContainerPage>

      {editingItem && (
        <UserEditModal
          user={editingItem}
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          roles={roles}
          states={states}
        />
      )}
    </Layout>
  )
}
