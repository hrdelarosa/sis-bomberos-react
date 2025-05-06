import { useEffect } from 'react'

import unitsStore from '../states/unitsStore'
import typesStore from '../states/typesStore'
import { calculateStatisticsTypes } from '../utils/calculateStatisticsTypes'
import useCalculateStatisticsGeneric from '../../core/hooks/useCalculateStatisticsGeneric'

export function useTypes() {
  const { units, getUnits } = unitsStore()
  const { types, getTypeUnits, errorTypes, loading } = typesStore()
  const { typesWithUnitStats } = calculateStatisticsTypes({ types, units })
  const { activeItems: activeTypes, activePercentage: typesPercentage } =
    useCalculateStatisticsGeneric({
      data: types,
      isActive: (type) => type.est_nombre === 'activo',
    })

  useEffect(() => {
    getUnits()
    getTypeUnits()
  }, [getUnits, getTypeUnits])

  return {
    types: typesWithUnitStats,
    errorTypes,
    loading,
    active: activeTypes,
    activePercentage: typesPercentage,
  }
}
