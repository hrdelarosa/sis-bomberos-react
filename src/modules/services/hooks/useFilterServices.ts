import { useEffect, useState } from 'react'
import { IncidentType } from '../types/ServicesTypes'
import servicesStore from '../states/servicesStore'

export function useFilterServices() {
  const { setCurrentPage } = servicesStore()
  const [filters, setFilters] = useState({
    folio: '',
    incidente: '' as IncidentType | '',
  })
  const [debouncedFolio, setDebouncedFolio] = useState(filters.folio)
  const handleIncidenteChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as IncidentType | ''
    setFilters((prev) => ({ ...prev, incidente: value }))
    setCurrentPage({ page: 1 })
  }
  const handleFolioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({ ...prev, folio: e.target.value }))
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedFolio(filters.folio)
    }, 500)

    return () => clearTimeout(timer)
  }, [filters.folio])

  return { filters, debouncedFolio, handleIncidenteChange, handleFolioChange }
}
