import { useEffect } from 'react'

import ranksStore from '../states/ranksStore'
import personnelStore from '../states/personnelStore'
import { calculateStatisticsRanks } from '../utils/calculateStatisticsRanks'
import useCalculateStatisticsGeneric from '../../core/hooks/useCalculateStatisticsGeneric'

export function useRanks() {
  const { ranks, getRanks, loading, errorRanks } = ranksStore()
  const { personnel, getPersonnel } = personnelStore()
  const { ranksWithUnitPersonnel } = calculateStatisticsRanks({
    ranks,
    personnel,
  })
  const { activeItems: activeRanks, activePercentage: ranksPercentage } =
    useCalculateStatisticsGeneric({
      data: ranks,
      isActive: (rank) => rank.est_nombre === 'activo',
    })

  useEffect(() => {
    getPersonnel()
    getRanks()
  }, [getPersonnel, getRanks])

  return {
    ranks: ranksWithUnitPersonnel,
    errorRanks,
    loading,
    active: activeRanks,
    activePercentage: ranksPercentage,
  }
}
