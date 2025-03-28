import { Unit, TypeUnit } from '../types/UnitsTypes'

interface Props {
  units?: Unit[]
  types?: TypeUnit[]
}

export default function useCalculateStatistics({ units, types }: Props) {
  const active = units
    ? units.filter((unit) => unit.est_id_uni === 'activo')
    : types && types.filter((type) => type.est_id_tu === 'activo')
  const activePercentage =
    units && active
      ? units.length > 0
        ? Math.round((active.length / units.length) * 100)
        : 0
      : types && active && types.length > 0
      ? Math.round((active.length / types.length) * 100)
      : 0

  return { active, activePercentage }
}
