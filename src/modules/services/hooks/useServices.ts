import { useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import servicesStore from '../states/servicesStore'

interface UseServicesProps {
  debouncedFolio: string
  filters: {
    incidente: string
  }
}

export function useServices({ debouncedFolio, filters }: UseServicesProps) {
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const {
    services,
    loading,
    errorServices,
    totalPages,
    currentPage,
    setCurrentPage,
    servicesPerPage,
    totalServices,
    getServices,
  } = servicesStore()

  useEffect(() => {
    const page = searchParams.get('page')
    const pageNumber = Number(page)

    if (page && totalPages <= 1) {
      navigate('/services', { replace: true })
      return
    }
    if (!page && totalPages > 1) {
      setSearchParams({ page: '1' })
      return
    }
    if (page && !isNaN(pageNumber)) {
      setCurrentPage({ page: pageNumber })
    }
  }, [totalPages, searchParams, navigate, setCurrentPage, setSearchParams])

  const handlePageChange = ({ page }: { page: number }) => {
    if (totalPages <= 1) {
      navigate('/services', { replace: true })
    } else {
      setSearchParams({ page: page.toString() })
    }
    setCurrentPage({ page })
  }

  useEffect(() => {
    getServices({
      page: currentPage,
      folio: debouncedFolio,
      incidente: filters.incidente,
    })
  }, [getServices, currentPage, debouncedFolio, filters.incidente])

  return {
    services,
    loading,
    errorServices,
    totalPages,
    currentPage,
    handlePageChange,
    servicesPerPage,
    totalServices,
  }
}
