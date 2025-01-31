import { useState } from 'react'

export function useSortedUnits({ units }) {
  const [selectedUnits, setSelectedUnits] = useState([])

  const filterUnitsByType = (type) => {
    return units.filter(
      (unidad) => unidad.tu_nombre === type && unidad.est_id_uni === 'activo'
    )
  }

  const toggleUnitSelection = (id) => {
    setSelectedUnits((prev) =>
      prev.includes(id) ? prev.filter((unitId) => unitId !== id) : [...prev, id]
    )
  }

  return {
    filterUnitsByType,
    selectedUnits,
    toggleUnitSelection,
  }
}
