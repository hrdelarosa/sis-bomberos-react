import { firstCapitalLetter } from '../../core/utils/firstCapital'
import { TypeUnit, Unit, UnitsByType } from '../types/UnitsTypes'

interface Props {
  units: Unit[]
  types: TypeUnit[]
}

export default function useCalculateStatisticsTypes({ units, types }: Props) {
  const unitsByType: UnitsByType[] = types.map((type) => {
    const unitsOfType = units.filter(
      (unit) => unit.tu_id_uni === type.tu_nombre
    )
    const activeUnitsOfType = unitsOfType.filter(
      (unit) => unit.est_id_uni === 'activo'
    )
    const activePercentageOfType =
      unitsOfType.length > 0
        ? Math.round((activeUnitsOfType.length / unitsOfType.length) * 100)
        : 0

    const state = type.est_id_tu

    return {
      type: firstCapitalLetter(type.tu_nombre),
      total: unitsOfType.length,
      active: activeUnitsOfType.length,
      activePercentage: activePercentageOfType,
      state,
    }
  })

  return { unitsByType }
}
