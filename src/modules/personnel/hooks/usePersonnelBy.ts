import { useEffect } from 'react'

import personnelStore from '../states/personnelStore'
import { useSortedPersonnel } from './useSortedPersonnel'
import useCalculateStatisticsGeneric from '../../core/hooks/useCalculateStatisticsGeneric'

interface Props {
  id: number | undefined
  filter: string | undefined
}

export function usePersonnelBy({ id, filter }: Props) {
  const {
    personnel,
    getPersonnelByRank,
    getPersonnelByGuard,
    loading,
    errorPersonnel,
  } = personnelStore()
  const { sortedPersonnel, handleChangeSort } = useSortedPersonnel({
    personnel,
  })
  const { activeItems: active, activePercentage: activePercentage } =
    useCalculateStatisticsGeneric({
      data: personnel,
      isActive: (person) => person.est_nombre === 'activo',
    })

  useEffect(() => {
    if (filter === 'rank' && id) getPersonnelByRank({ id })
    else if (filter === 'guard' && id) getPersonnelByGuard({ id })
  }, [getPersonnelByRank, getPersonnelByGuard, id, filter])

  return {
    personnel: sortedPersonnel,
    errorPersonnel,
    loading,
    active,
    activePercentage,
    handleChangeSort,
  }
}
