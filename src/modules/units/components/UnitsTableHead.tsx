import TableTh from '../../core/components/ui/table/TableTh'

export default function UnitsTableHead() {
  return (
    <>
      <TableTh text="Número" className="w-24" />
      <TableTh text="Tipo" className="w-xl" />
      <TableTh text="Estado" />
      <TableTh text="Acciones" className="text-right" />
    </>
  )
}
