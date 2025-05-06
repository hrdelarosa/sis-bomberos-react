import { useMemo, useState } from 'react'
import { Personnel } from '../../personnel/types/PersonnelTypes'

export function usePersonalSearch({ personnel }: { personnel: Personnel[] }) {
  const [search, setSearch] = useState('')
  const [selectedPersonal, setSelectedPersonal] = useState<number[]>([])

  const filterPersonal = useMemo(() => {
    return personnel.filter(
      (persona) =>
        persona.per_nombres.toLowerCase().includes(search.toLowerCase()) ||
        persona.per_apellidos.toLowerCase().includes(search.toLowerCase()) ||
        persona.per_np.toString().includes(search)
    )
  }, [personnel, search])

  const togglePersonalSelection = ({ personnel }: { personnel: Personnel }) => {
    setSelectedPersonal((prev) =>
      prev.includes(personnel.per_id)
        ? prev.filter((id) => id !== personnel.per_id)
        : [...prev, personnel.per_id]
    )
  }

  const resetSelectedPersonal = () => {
    setSelectedPersonal([])
    setSearch('')
  }

  return {
    search,
    setSearch,
    filterPersonal,
    selectedPersonal,
    togglePersonalSelection,
    resetSelectedPersonal,
  }
}
