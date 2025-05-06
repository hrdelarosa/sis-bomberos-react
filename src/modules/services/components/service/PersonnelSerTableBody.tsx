import TableTd from '../../../core/components/ui/table/TableTd'
import { firstCapitalLetter } from '../../../core/utils/firstCapital'
import { PersonnelService } from '../../types/ServicesTypes'

export default function PersonnelSerTableBody({
  personnel,
}: {
  personnel: PersonnelService
}) {
  return (
    <>
      <tr className="hover:bg-gray-100">
        <TableTd className="font-medium">{personnel.np}</TableTd>
        <TableTd>{personnel.nombre}</TableTd>
        <TableTd>{firstCapitalLetter(personnel.rango)}</TableTd>
        <TableTd>{firstCapitalLetter(personnel.base)}</TableTd>
        <TableTd>{firstCapitalLetter(personnel.guardia)}</TableTd>
      </tr>
    </>
  )
}
