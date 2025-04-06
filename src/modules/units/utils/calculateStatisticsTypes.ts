import { TypeUnit, Unit } from '../types/UnitsTypes'

export function calculateStatisticsTypes({
  types,
  units,
}: {
  types: TypeUnit[]
  units: Unit[]
}) {
  const typesWithUnitStats = types.map((type) => {
    const relatedUnits = units.filter(
      (unit) => unit.tu_nombre === type.tu_nombre
    )
    const totalUnits = relatedUnits.length
    const activeUnits = relatedUnits.filter(
      (unit) => unit.est_nombre === 'activo'
    ).length
    const activePercentage =
      totalUnits > 0 ? (activeUnits / totalUnits) * 100 : 0

    return {
      ...type,
      totalUnits,
      activeUnits,
      activePercentage,
    }
  })

  return { typesWithUnitStats }
}
