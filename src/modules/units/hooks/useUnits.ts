import { useEffect, useState } from 'react'
import unitsStore from '../states/unitsStore'
import statesStore from '../../states/states/StatesStore'
import useCalculateStatistics from './useCalculateStatistics'

export function useUnits() {
  const { units, getUnits, types, getTypeUnits, loading, error, errorTypes } =
    unitsStore()
  const { states, getStates, errorState } = statesStore()
  const { active, activePercentage } = useCalculateStatistics({
    units,
  })
  const [filters, setFilters] = useState({
    type: 'Todos los tipos',
    status: 'Todos los estados',
  })

  const handleFilterChange = (filterName: string, value: string) =>
    setFilters((prev) => ({ ...prev, [filterName]: value }))

  const filteredUnits = units.filter((unit) => {
    const matchesType =
      filters.type === 'Todos los tipos' || unit.tu_id_uni === filters.type

    const matchesStatus =
      filters.status === 'Todos los estados' ||
      (filters.status === 'activo' && unit.est_id_uni === 'activo') ||
      (filters.status === 'inactivo' && unit.est_id_uni === 'inactivo')

    return matchesType && matchesStatus
  })

  useEffect(() => {
    getUnits()
    getTypeUnits()
    getStates()
  }, [getUnits, getTypeUnits, getStates])

  return {
    units,
    error,
    loading,
    types,
    errorTypes,
    states,
    errorState,
    handleFilterChange,
    active,
    activePercentage,
    filteredUnits,
  }
}
