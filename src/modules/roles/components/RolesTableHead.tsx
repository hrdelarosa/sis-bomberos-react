import TableTh from '../../core/components/ui/table/TableTh'

export default function RolesTableHead() {
  return (
    <>
      <TableTh>Rol</TableTh>
      <TableTh>Descripción</TableTh>
      <TableTh>Cantidad</TableTh>
      <TableTh>Activas</TableTh>
      <TableTh>Porcentaje Activas</TableTh>
      <TableTh>Estado</TableTh>
      <TableTh className="text-right">Acciones</TableTh>
    </>
  )
}
