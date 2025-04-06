import TableTh from '../../core/components/ui/table/TableTh'

export default function UsersTableHead() {
  return (
    <>
      <TableTh>Nombre</TableTh>
      <TableTh>Correo</TableTh>
      <TableTh>Rol</TableTh>
      <TableTh>Estado</TableTh>
      <TableTh>Verificado</TableTh>
      <TableTh>Creado</TableTh>
      <TableTh>Ultima actualización</TableTh>
      <TableTh>Total de servicios</TableTh>
      <TableTh className="text-right">Acciones</TableTh>
    </>
  )
}
