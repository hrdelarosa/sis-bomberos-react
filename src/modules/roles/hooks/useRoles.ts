import { useEffect } from 'react'

import rolesStore from '../states/rolesStore'
import usersStore from '../../users/states/usersStore'
import calculateStatisticsRoles from '../utils/calculateStatisticsRoles'
import useCalculateStatisticsGeneric from '../../core/hooks/useCalculateStatisticsGeneric'

export function useRoles() {
  const { roles, getRoles, errorRoles, loading } = rolesStore()
  const { users, getUsers } = usersStore()
  const { rolesWithUserStats } = calculateStatisticsRoles({ roles, users })
  const { activeItems: active, activePercentage: activePercentage } =
    useCalculateStatisticsGeneric({
      data: roles,
      isActive: (role) => role.est_nombre === 'activo',
    })

  useEffect(() => {
    getRoles()
    getUsers()
  }, [getRoles, getUsers])

  return {
    roles: rolesWithUserStats,
    errorRoles,
    loading,
    active,
    activePercentage,
  }
}
