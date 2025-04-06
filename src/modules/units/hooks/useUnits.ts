import { useEffect, useState } from 'react'
import unitsStore from '../states/unitsStore'
import statesStore from '../../states/states/StatesStore'
import useCalculateStatisticsGeneric from '../../core/hooks/useCalculateStatisticsGeneric'

export function useUnits() {
  const { units, getUnits, types, getTypeUnits, loading, error, errorTypes } =
    unitsStore()
  const { states, getStates, errorState } = statesStore()

  const { activeItems: active, activePercentage: activePercentage } =
    useCalculateStatisticsGeneric({
      data: units,
      isActive: (unit) => unit.est_nombre === 'activo',
    })

  const [filters, setFilters] = useState({
    type: 'Todos los tipos',
    status: 'Todos los estados',
  })

  const handleFilterChange = (filterName: string, value: string) =>
    setFilters((prev) => ({ ...prev, [filterName]: value }))

  const filteredUnits = units.filter((unit) => {
    const matchesType =
      filters.type === 'Todos los tipos' || unit.tu_nombre === filters.type

    const matchesStatus =
      filters.status === 'Todos los estados' ||
      (filters.status === 'activo' && unit.est_nombre === 'activo') ||
      (filters.status === 'inactivo' && unit.est_nombre === 'inactivo')

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
