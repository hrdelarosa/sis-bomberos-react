import { useEffect } from 'react'

import personnelStore from '../states/personnelStore'
import statesStore from '../../states/states/StatesStore'
import { useSortedPersonnel } from './useSortedPersonnel'
import useCalculateStatisticsGeneric from '../../core/hooks/useCalculateStatisticsGeneric'
import ranksStore from '../states/ranksStore'

export function usePersonnel() {
  const { personnel, getPersonnel, loading, errorPersonnel } = personnelStore()
  const { ranks, getRanks, errorRanks } = ranksStore()
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
      isActive: (person) => person.est_nombre === 'activo',
    })

  useEffect(() => {
    getPersonnel()
    getRanks()
    getStates()
  }, [getPersonnel, getRanks, getStates])

  return {
    personnel: sortedPersonnel,
    errorPersonnel,
    loading,
    ranks,
    errorRanks,
    states,
    errorState,
    search,
    setSearch,
    setRankFilter,
    setStateFilter,
    active,
    activePercentage,
    handleChangeSort,
  }
}
