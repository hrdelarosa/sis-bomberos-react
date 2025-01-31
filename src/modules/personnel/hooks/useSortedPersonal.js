import { useMemo, useState } from 'react'
import { SortBy } from '../constants/sortBy'

export function useSortedPersonal({ personal }) {
  const [search, setSearch] = useState('')
  const [sorting, setSorting] = useState(SortBy.NONE)
  const [isAscending, setIsAscending] = useState(true)

  const filteredPersonal = useMemo(() => {
    return search !== null
      ? personal.filter((persona) => {
          return (
            persona.ran_nombre.toLowerCase().includes(search.toLowerCase()) ||
            persona.per_nombres.toLowerCase().includes(search.toLowerCase()) ||
            persona.per_apellidos
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            persona.per_np
              .toString()
              .toLowerCase()
              .includes(search.toLowerCase())
          )
        })
      : personal
  }, [personal, search])

  const handleChangeSort = (sort) => {
    if (sort === sorting) setIsAscending(!isAscending)
    else {
      setSorting(sort)
      setIsAscending(true)
    }
  }

  const sortedPersonal = useMemo(() => {
    if (sorting === SortBy.NONE) return filteredPersonal

    const sortOrder = isAscending ? 1 : -1

    return [...filteredPersonal].sort((a, b) => {
      if (sorting === SortBy.BASE) {
        return sortOrder * a.per_base.localeCompare(b.per_base)
      }
      if (sorting === SortBy.ESTACION) {
        return (
          sortOrder *
          a.et_nombre.split('-')[1].localeCompare(b.et_nombre.split('-')[1])
        )
      }
      if (sorting === SortBy.GUARDIA) {
        return sortOrder * a.gu_nombre.localeCompare(b.gu_nombre)
      }
      return 0
    })
  }, [filteredPersonal, sorting, isAscending])

  return { search, setSearch, handleChangeSort, sortedPersonal }
}
