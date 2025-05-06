import { useEffect, useMemo, useState } from 'react'
import guardsStore from '../states/guardsStore'
import stationsStore from '../states/stationsStore'

export function useGuards() {
  const { guards, getGuarda, errorGuards, loading } = guardsStore()
  const { stations, getStations, errorStations } = stationsStore()
  const [guardFilter, setGuardFilter] = useState<string>('Todas las estaciones')

  const filteredGuards = useMemo(() => {
    return guards.filter((guard) => {
      return (
        guardFilter === 'Todas las estaciones' ||
        guard.et_nombre === guardFilter
      )
    })
  }, [guards, guardFilter])

  useEffect(() => {
    getGuarda()
    getStations()
  }, [getGuarda, getStations])

  return {
    filteredGuards,
    setGuardFilter,
    errorGuards,
    loading,
    stations,
    errorStations,
  }
}
