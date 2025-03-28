import TableTh from '../../core/components/ui/table/TableTh'

export default function TypeTableHead() {
  return (
    <>
      <TableTh text="Tipo" className="w-sm" />
      <TableTh text="Cantidad" className="text-center" />
      <TableTh text="Activas" />
      <TableTh text="Porcentaje Activas" />
      <TableTh text="Estado" />
      <TableTh text="Acciones" className="text-right" />
    </>
  )
}
