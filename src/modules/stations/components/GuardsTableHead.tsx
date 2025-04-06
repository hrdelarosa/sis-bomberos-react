import TableTh from '../../core/components/ui/table/TableTh'

export default function GuardsTableHead() {
  return (
    <>
      <TableTh>Nombre</TableTh>
      <TableTh>Estación</TableTh>
      <TableTh className="text-right">Acciones</TableTh>
    </>
  )
}
