import { useMemo, useState } from 'react'

export function useSortedUsers({ users }) {
  const [search, setSearch] = useState('')
  const [filterValue, setFilterValue] = useState('')

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesSearch =
        search === '' || search === null
          ? true
          : user.us_nombres.toLowerCase().includes(search.toLowerCase()) ||
            user.us_apellidos.toLowerCase().includes(search.toLowerCase()) ||
            user.us_correo.toLowerCase().includes(search.toLowerCase())

      let matchesFilter = true
      if (filterValue) {
        const [filterType, value] = filterValue.split(':')

        switch (filterType) {
          case 'role':
            matchesFilter = user.rol_nombre === value
            break
          case 'state':
            matchesFilter = user.est_nombre === value
            break
          case 'verified':
            matchesFilter = user.us_verificado === (value === 'true' ? 1 : 0)
            break
          default:
            matchesFilter = true
        }
      }

      return matchesSearch && matchesFilter
    })
  }, [users, search, filterValue])

  return {
    search,
    setSearch,
    filterValue,
    setFilterValue,
    filteredUsers,
  }
}
