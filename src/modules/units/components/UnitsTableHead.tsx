import TableTh from '../../core/components/ui/table/TableTh'

export default function UnitsTableHead() {
  return (
    <>
      <TableTh className="w-24">Número</TableTh>
      <TableTh className="w-xl">Tipo</TableTh>
      <TableTh>Estado</TableTh>
      <TableTh className="text-right">Acciones</TableTh>
    </>
  )
}
