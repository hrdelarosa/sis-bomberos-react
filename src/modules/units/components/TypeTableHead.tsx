import TableTh from '../../core/components/ui/table/TableTh'

export default function TypeTableHead() {
  return (
    <>
      <TableTh className="w-sm">Tipo</TableTh>
      <TableTh className="text-center">Cantidad</TableTh>
      <TableTh>Activas</TableTh>
      <TableTh>Porcentaje Activas</TableTh>
      <TableTh>Estado</TableTh>
      <TableTh className="text-right">Acciones</TableTh>
    </>
  )
}
