import { useEffect } from 'react'

import personnelStore from '../states/personnelStore'
import statesStore from '../../states/states/StatesStore'
import { useSortedPersonnel } from './useSortedPersonnel'
import useCalculateStatisticsGeneric from '../../core/hooks/useCalculateStatisticsGeneric'

export function usePersonnel() {
  const {
    personnel,
    getPersonnel,
    ranks,
    getRanks,
    loading,
    loadingRanks,
    error,
    errorRanks,
  } = personnelStore()
  const { states, errorState, getStates } = statesStore()
  const {
    search,
    setSearch,
    handleChangeSort,
    sortedPersonnel,
    setRankFilter,
    setStateFilter,
  } = useSortedPersonnel({ personnel })
  const { activeItems: active, activePercentage: activePercentage } =
    useCalculateStatisticsGeneric({
      data: personnel,
      isActive: (person) => person.est_id_per === 'activo',
    })

  useEffect(() => {
    getPersonnel()
    getRanks()
    getStates()
  }, [getPersonnel, getRanks, getStates])

  return {
    personnel,
    sortedPersonnel,
    error,
    ranks,
    errorRanks,
    loadingRanks,
    states,
    errorState,
    loading,
    search,
    setSearch,
    setRankFilter,
    setStateFilter,
    active,
    activePercentage,
    handleChangeSort,
  }
}
