import { useEffect } from 'react'
import useCalculateStatisticsGeneric from '../../core/hooks/useCalculateStatisticsGeneric'
import usersStore from '../states/usersStore'
import { useSortedUsers } from './useSortedUsers'
import rolesStore from '../../roles/states/rolesStore'
import statesStore from '../../states/states/StatesStore'

export function useUsers() {
  const { users, getUsers, errorUsers, loading } = usersStore()
  const { roles, getRoles, errorRoles } = rolesStore()
  const { states, getStates, errorState } = statesStore()
  const { search, setSearch, filteredUsers, setRoleFilter, setStateFilter } =
    useSortedUsers({ users })
  const { activeItems: active, activePercentage: activePercentage } =
    useCalculateStatisticsGeneric({
      data: users,
      isActive: (user) => user.est_id_us === 'activo',
    })

  useEffect(() => {
    getUsers()
    getRoles()
    getStates()
  }, [getUsers, getRoles, getStates])

  return {
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
  }
}
