import TableTh from '../../core/components/ui/table/TableTh'

export default function RanksTableHead() {
  return (
    <>
      <TableTh>Rango</TableTh>
      <TableTh>Cantidad</TableTh>
      <TableTh>Activos</TableTh>
      <TableTh>Porcentaje Activos</TableTh>
      <TableTh>Estado</TableTh>
      <TableTh className="text-right">Acciones</TableTh>
    </>
  )
}
