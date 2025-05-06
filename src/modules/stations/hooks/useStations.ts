import { useEffect } from 'react'

import stationsStore from '../states/stationsStore'
import useCalculateStatisticsGeneric from '../../core/hooks/useCalculateStatisticsGeneric'

export function useStations() {
  const { stations, getStations, loading, errorStations } = stationsStore()
  const { activeItems: active, activePercentage } =
    useCalculateStatisticsGeneric({
      data: stations,
      isActive: (station) => station.est_nombre === 'activo',
    })

  useEffect(() => {
    getStations()
  }, [getStations])

  return { stations, loading, errorStations, active, activePercentage }
}
