import { ArrowUpDown } from 'lucide-react'
import TableTh from '../../core/components/ui/table/TableTh'
import { ChangeSort, SortBy } from '../types/PersonnelTypes'

export default function PersonnelTableHead({
  changeSort,
}: {
  changeSort: ChangeSort
}) {
  return (
    <>
      <TableTh
        onClick={() => {
          changeSort(SortBy.NAME)
        }}
        className="flex items-center gap-3 hover:text-black hover:bg-neutral-100 transition-colors duration-200 cursor-pointer group"
      >
        Nombre{' '}
        <ArrowUpDown className="size-3 group-hover:rotate-180 group-hover:text-primary-red transition-all duration-300" />
      </TableTh>
      <TableTh>NP</TableTh>
      <TableTh>Rango</TableTh>
      <TableTh
        onClick={() => {
          changeSort(SortBy.BASE)
        }}
        className="flex items-center gap-3 hover:text-black hover:bg-neutral-100 transition-colors duration-200 cursor-pointer group"
      >
        Base{' '}
        <ArrowUpDown className="size-3 group-hover:rotate-180 group-hover:text-primary-red transition-all duration-300" />
      </TableTh>
      <TableTh>Guardia</TableTh>
      <TableTh
        onClick={() => {
          changeSort(SortBy.ESTACION)
        }}
        className="flex items-center gap-3 hover:text-black hover:bg-neutral-100 transition-colors duration-200 cursor-pointer group"
      >
        Estación{' '}
        <ArrowUpDown className="size-3 group-hover:rotate-180 group-hover:text-primary-red transition-all duration-300" />
      </TableTh>
      <TableTh>Estado</TableTh>
      <TableTh className="text-right">Acciones</TableTh>
    </>
  )
}
