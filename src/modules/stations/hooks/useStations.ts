import { useEffect } from 'react'

import stationsStore from '../states/stationsStore'
import useCalculateStatisticsGeneric from '../../core/hooks/useCalculateStatisticsGeneric'

export function useStations() {
  const { stations, getStations, loading, error } = stationsStore()

  const { activeItems: active, activePercentage } =
    useCalculateStatisticsGeneric({
      data: stations,
      isActive: (station) => station.est_id_et === 'activo',
    })

  useEffect(() => {
    getStations()
  }, [getStations])

  return { stations, loading, error, active, activePercentage }
}
