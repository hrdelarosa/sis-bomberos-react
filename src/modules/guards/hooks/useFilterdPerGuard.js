import { useMemo, useState } from 'react'

export function useFilterdPerGuard({ personal }) {
  const [search, setSearch] = useState('')
  const [selectedPersonnel, setSelectedPersonnel] = useState([])
  const [selectedPersonnelId, setSelectedPersonnelId] = useState([])

  const filteredPersonnel = useMemo(() => {
    return personal
      .filter(
        (person) =>
          person.per_nombres.toLowerCase().includes(search.toLowerCase()) ||
          person.per_apellidos.toLowerCase().includes(search.toLowerCase()) ||
          person.per_np.toString().includes(search)
      )
      .filter((person) => !selectedPersonnel.includes(person))
  }, [search, personal, selectedPersonnel])

  const handleSelectPerson = (person) => {
    setSelectedPersonnel((prevSelected) => [...prevSelected, person])
    setSelectedPersonnelId((prevSelected) => [...prevSelected, person.id])
  }

  const handleRemovePerson = (person) => {
    setSelectedPersonnel((prevSelected) =>
      prevSelected.filter((p) => p.id !== person.id)
    )
    setSelectedPersonnelId((prevSelected) =>
      prevSelected.filter((p) => p !== person.id)
    )
  }

  const setDefaultValues = () => {
    setSelectedPersonnel([])
    setSelectedPersonnelId([])
  }

  return {
    search,
    setSearch,
    selectedPersonnel,
    selectedPersonnelId,
    filteredPersonnel,
    handleSelectPerson,
    handleRemovePerson,
    setDefaultValues,
  }
}
