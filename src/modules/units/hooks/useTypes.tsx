import { useEffect } from 'react'

import unitsStore from '../states/unitsStore'
import useCalculateStatistics from './useCalculateStatistics'
import useCalculateStatisticsTypes from './useCalculateStatisticsTypes'

export default function useTypes() {
  const { units, getUnits, types, getTypeUnits, loadingTypes, errorTypes } =
    unitsStore()
  const { active, activePercentage } = useCalculateStatistics({ types })
  const { unitsByType } = useCalculateStatisticsTypes({ units, types })

  useEffect(() => {
    getUnits()
    getTypeUnits()
  }, [getUnits, getTypeUnits])

  return {
    types,
    errorTypes,
    loadingTypes,
    active,
    activePercentage,
    unitsByType,
  }
}
