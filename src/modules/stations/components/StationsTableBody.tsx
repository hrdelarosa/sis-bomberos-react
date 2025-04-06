import TableButtonsActions from '../../core/components/TableButonsActions'
import BadgeState from '../../core/components/ui/BadgeState'
import TableTd from '../../core/components/ui/table/TableTd'
import { Station } from '../types/StationsTypes'

export default function StationTableBody({ station }: { station: Station }) {
  return (
    <tr key={station.id} className="hover:bg-gray-100">
      <TableTd className="font-medium">{station.et_nombre}</TableTd>

      <TableTd>{station.et_ubicacion}</TableTd>

      <TableTd>
        <BadgeState state={station.est_id_et} />
      </TableTd>

      <TableTd>
        <TableButtonsActions />
      </TableTd>
    </tr>
  )
}
