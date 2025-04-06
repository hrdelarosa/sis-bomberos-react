import TableTh from '../../core/components/ui/table/TableTh'

export default function StationTableHead() {
  return (
    <>
      <TableTh>Nombre</TableTh>
      <TableTh>Ubicación</TableTh>
      <TableTh>Estado</TableTh>
      <TableTh className="text-right">Acciones</TableTh>
    </>
  )
}
