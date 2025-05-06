import { useState } from 'react'
import { Unit } from '../../units/types/UnitsTypes'
import { TypeUnit } from '../../units/types/TypesUnitsTypes'

export function useFilterUnitAndTypes({ units }: { units: Unit[] }) {
  const [selectedUnits, setSelectedUnits] = useState<number[]>([])

  const filterUnitsByType = ({ type }: { type: string }) => {
    return units.filter(
      (unit) => unit.tu_nombre === type && unit.est_nombre === 'activo'
    )
  }

  const filterTypesWithActiveUnits = ({ types }: { types: TypeUnit[] }) => {
    return types.filter((type) => {
      const activeUnits = filterUnitsByType({ type: type.tu_nombre })
      return activeUnits.length > 0 && type.est_nombre === 'activo'
    })
  }

  const toggleUnitSelection = ({ uni }: { uni: Unit }) => {
    setSelectedUnits((prev) =>
      prev.includes(uni.uni_id)
        ? prev.filter((id) => id !== uni.uni_id)
        : [...prev, uni.uni_id]
    )
  }

  const resetSelectedUnits = () => setSelectedUnits([])

  return {
    filterUnitsByType,
    filterTypesWithActiveUnits,
    selectedUnits,
    toggleUnitSelection,
    resetSelectedUnits,
  }
}
