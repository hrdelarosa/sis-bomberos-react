import TableTd from '../../core/components/ui/table/TableTd'
import { firstCapitalLetter } from '../../core/utils/firstCapital'
import formatDate from '../../core/utils/formatDate'
import BadgeStateService from '../../services/components/ui/BadgeStateService'
import { Service } from '../../services/types/ServicesTypes'

export default function ProfileSerTableBody({ service }: { service: Service }) {
  return (
    <>
      <tr className="hover:bg-gray-100">
        <TableTd className="font-medium">
          {firstCapitalLetter(service.ser_incidente)}
        </TableTd>
        <TableTd className="font-medium">{service.ser_folio}</TableTd>
        <TableTd>{service.ser_nombre}</TableTd>
        <TableTd>{formatDate(service.ser_creado)}</TableTd>
        <TableTd>
          <BadgeStateService state={service.estser_nombre} />
        </TableTd>
      </tr>
    </>
  )
}
