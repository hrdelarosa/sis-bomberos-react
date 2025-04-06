import { useEffect } from 'react'
import { Personnel, Rank } from '../types/personnelTypes'

import personnelStore from '../states/personnelStore'
import useCalculateStatisticsElement from '../../core/hooks/useCalculateStatisticsElement'
import useCalculateStatisticsGeneric from '../../core/hooks/useCalculateStatisticsGeneric'

export function useRanks() {
  const { personnel, getPersonnel, ranks, getRanks, loadingRanks, errorRanks } =
    personnelStore()
  const { statistics: personnelByRank } = useCalculateStatisticsElement<
    Personnel,
    Rank
  >({
    items: personnel,
    categories: ranks,
    getCategoryName: (rank) => rank.ran_nombre,
    getItemCategory: (person) => person.ran_id_per,
    isActive: (person) => person.est_id_per === 'activo',
    getState: (rank) => rank.est_id_ran,
  })

  const { activeItems: activeRanks, activePercentage: ranksPercentage } =
    useCalculateStatisticsGeneric({
      data: ranks,
      isActive: (rank) => rank.est_id_ran === 'activo',
    })

  useEffect(() => {
    getPersonnel()
    getRanks()
  }, [getPersonnel, getRanks])

  return {
    ranks,
    errorRanks,
    loadingRanks,
    active: activeRanks,
    activePercentage: ranksPercentage,
    personnelByRank,
  }
}
