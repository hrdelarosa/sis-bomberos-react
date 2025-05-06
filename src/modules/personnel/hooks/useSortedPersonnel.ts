import { useMemo, useState } from 'react'
import {
  Personnel,
  SortBy,
  UseSortedPersonnelReturn,
} from '../types/PersonnelTypes'

export function useSortedPersonnel({
  personnel,
}: {
  personnel: Personnel[]
}): UseSortedPersonnelReturn {
  const [search, setSearch] = useState<string>('')
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE)
  const [isAscending, setIsAscending] = useState<boolean>(true)
  const [rankFilter, setRankFilter] = useState<string>('Todos los rangos')
  const [stateFilter, setStateFilter] = useState<string>('Todos los estados')

  const filteredPersonnel = useMemo(() => {
    return personnel.filter((persona) => {
      const matchesSearch =
        search === '' ||
        persona.per_nombres.toLowerCase().includes(search.toLowerCase()) ||
        persona.per_apellidos.toLowerCase().includes(search.toLowerCase()) ||
        persona.per_np.toString().toLowerCase().includes(search.toLowerCase())

      const matchesRank =
        rankFilter === 'Todos los rangos' || persona.ran_nombre === rankFilter

      const matchesState =
        stateFilter === 'Todos los estados' ||
        persona.est_nombre === stateFilter

      return matchesSearch && matchesRank && matchesState
    })
  }, [personnel, search, rankFilter, stateFilter])

  const handleChangeSort = (sort: SortBy): void => {
    if (sort === sorting) setIsAscending(!isAscending)
    else {
      setSorting(sort)
      setIsAscending(true)
    }
  }

  const sortedPersonnel = useMemo(() => {
    if (sorting === SortBy.NONE) return filteredPersonnel

    const sortOrder = isAscending ? 1 : -1

    return [...filteredPersonnel].sort((a, b) => {
      if (sorting === SortBy.NAME) {
        return (
          sortOrder * a.per_nombres.localeCompare(b.per_nombres) +
          a.per_apellidos.localeCompare(b.per_apellidos)
        )
      }
      if (sorting === SortBy.BASE) {
        return sortOrder * a.per_base.localeCompare(b.per_base)
      }
      if (sorting === SortBy.ESTACION) {
        return (
          sortOrder *
          a.et_nombre.split('-')[1].localeCompare(b.et_nombre.split('-')[1])
        )
      }
      return 0
    })
  }, [filteredPersonnel, sorting, isAscending])

  return {
    search,
    setSearch,
    handleChangeSort,
    sortedPersonnel,
    setRankFilter,
    setStateFilter,
  }
}
