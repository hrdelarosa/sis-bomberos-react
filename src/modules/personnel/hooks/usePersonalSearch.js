import { useMemo, useState } from 'react'

export function usePersonalSearch({ personal }) {
  const [search, setSearch] = useState('')
  const [selectedPersonal, setSelectedPersonal] = useState([])

  const filterPersonal = useMemo(() => {
    return personal.filter(
      (persona) =>
        persona.per_nombres.toLowerCase().includes(search.toLowerCase()) ||
        persona.per_apellidos.toLowerCase().includes(search.toLowerCase()) ||
        persona.per_np.toString().includes(search)
    )
  }, [personal, search])

  const togglePersonalSelection = (id) => {
    setSelectedPersonal((prev) =>
      prev.includes(id)
        ? prev.filter((idPersonal) => idPersonal !== id)
        : [...prev, id]
    )
  }

  return {
    search,
    setSearch,
    filterPersonal,
    selectedPersonal,
    togglePersonalSelection,
  }
}
