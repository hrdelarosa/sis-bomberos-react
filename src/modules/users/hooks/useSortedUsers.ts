import { useMemo, useState } from 'react'
import { User } from '../types/UsersTypes'

export function useSortedUsers({ users }: { users: User[] }) {
  const [search, setSearch] = useState<string>('')
  const [roleFilter, setRoleFilter] = useState<string>('Todos los roles')
  const [stateFilter, setStateFilter] = useState<string>('Todos los estados')
  const filteredUsers = useMemo(() => {
    return users.filter((role) => {
      const matchesSearch =
        search === '' ||
        role.us_nombres.toLowerCase().includes(search.toLowerCase()) ||
        role.us_apellidos.toLowerCase().includes(search.toLowerCase()) ||
        role.us_correo.toLowerCase().includes(search.toLowerCase())

      const matchesRole =
        roleFilter === 'Todos los roles' || role.rol_nombre === roleFilter

      const matchesState =
        stateFilter === 'Todos los estados' || role.est_nombre === stateFilter

      return matchesSearch && matchesRole && matchesState
    })
  }, [users, search, roleFilter, stateFilter])

  return { search, setSearch, filteredUsers, setRoleFilter, setStateFilter }
}
