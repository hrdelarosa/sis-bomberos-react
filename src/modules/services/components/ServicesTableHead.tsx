import TableTh from '../../core/components/ui/table/TableTh'

export default function ServicesTableHead() {
  return (
    <>
      <TableTh>Incidente</TableTh>
      <TableTh>Folio</TableTh>
      <TableTh>Creado por</TableTh>
      <TableTh>Fechar</TableTh>
      <TableTh>Estado</TableTh>
      <TableTh>Solicitante</TableTh>
      <TableTh>Teléfono</TableTh>
      <TableTh className="text-right">Acciones</TableTh>
    </>
  )
}
