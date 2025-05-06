import { FilePlus2 } from 'lucide-react'
import { incidentsServices } from '../constants/incidentsServices'
import { firstCapitalLetter } from '../../core/utils/firstCapital'

import ButtonAction from '../../core/components/ui/ButtonAction'
import SearchInput from '../../core/components/ui/SearchInput'
import Filter from '../../units/components/ui/Filter'
import Table from '../../core/components/Table'
import ServicesTableHead from '../components/ServicesTableHead'
import ServicesTableBody from '../components/ServicesTableBody'
import TableMessage from '../../core/components/ui/table/TableMessage'
import Pagination from '../../core/components/Pagination'
import { useFilterServices } from '../hooks/useFilterServices'
import { useServices } from '../hooks/useServices'
import ContentCard from '../../core/components/ui/ContentCard'
import SkeletonTable from '../../core/components/skeleton/SkeletonTable'
import ButtonNav from '../../core/components/ui/ButtonNav'
import { pathsAside } from '../../core/constants/pathsAside'

export default function Services() {
  const { filters, debouncedFolio, handleIncidenteChange, handleFolioChange } =
    useFilterServices()
  const {
    services,
    loading,
    errorServices,
    totalPages,
    currentPage,
    handlePageChange,
    servicesPerPage,
    totalServices,
  } = useServices({ debouncedFolio, filters })

  return (
    <ContentCard>
      <div className="flex items-center justify-between p-6">
        <h1 className="text-2xl font-semibold">Listado de los Servicios</h1>

        <div className="flex gap-2">
          <ButtonNav
            to={pathsAside.menu.services.items.create.to}
            className="bg-primary-yellow text-black hover:bg-black hover:text-primary-yellow"
          >
            <FilePlus2 className="size-4" />
            Nuevo Servicio
          </ButtonNav>
        </div>
      </div>

      <div className="p-6 pt-0">
        <div className="flex items-center justify-between mb-6">
          <Filter
            label="Incidente"
            htmlFor="incidente-servicio"
            value={filters.incidente}
            onChange={handleIncidenteChange}
          >
            <option value="">Todos los incidentes</option>
            {incidentsServices.map((incident) => (
              <option key={incident} value={incident}>
                {firstCapitalLetter(incident)}
              </option>
            ))}
          </Filter>

          <SearchInput
            value={filters.folio}
            onChange={handleFolioChange}
            placeholder="Buscar por folio..."
          />
        </div>

        <div className="bg-primary-white-main">
          <Table head={<ServicesTableHead />}>
            {loading ? (
              <SkeletonTable colums={8} rows={8} />
            ) : errorServices ? (
              <TableMessage colSpan={8} message={errorServices} />
            ) : !services || services.length > 0 ? (
              services.map((service) => (
                <ServicesTableBody key={service.ser_id} service={service} />
              ))
            ) : (
              <TableMessage
                colSpan={8}
                message="No se encontraron los servicios con los filtros seleccionados."
              />
            )}
          </Table>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            itemsPerPage={servicesPerPage}
            totalItems={totalServices}
          />
        </div>
      </div>
    </ContentCard>
  )
}
