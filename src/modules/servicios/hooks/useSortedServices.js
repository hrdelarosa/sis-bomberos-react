import { useMemo, useState } from 'react'

export function useSortedServices({ services }) {
  const [search, setSearch] = useState('')

  const filteredServices = useMemo(() => {
    return search !== null
      ? services.filter((servicio) => {
          return (
            servicio.ser_folio.toLowerCase().includes(search.toLowerCase()) ||
            // servicio.ser_nombre?.toLowerCase().includes(search.toLowerCase()) ||
            servicio.us_nombres.toLowerCase().includes(search.toLowerCase())
          )
        })
      : services
  }, [services, search])

  return { search, setSearch, filteredServices }
}
