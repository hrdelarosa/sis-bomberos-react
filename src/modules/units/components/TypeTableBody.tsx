import { UnitsByType } from '../types/UnitsTypes'

import TableTd from '../../core/components/ui/table/TableTd'
import GetIcon from './ui/getIcon'
import BadgeState from '../../core/components/ui/BadgeState'
import TableButtonsActions from '../../core/components/TableButonsActions'

export default function TypeTableBody({ type }: { type: UnitsByType }) {
  return (
    <tr key={type.type} className="hover:bg-gray-100">
      <TableTd>
        <div className="flex items-center gap-2">
          {<GetIcon type={type.type} size="size-4" />}
          <span>{type.type}</span>
        </div>
      </TableTd>

      <TableTd className="font-medium">
        <span className="ml-3">{type.total}</span>
      </TableTd>

      <TableTd className="font-medium">
        <span className="ml-3">{type.active}</span>
      </TableTd>
      <TableTd className="font-medium">
        <span className="ml-3">{type.activePercentage}%</span>
      </TableTd>

      <TableTd>
        <BadgeState state={type.state} />
      </TableTd>

      <TableTd>
        <TableButtonsActions />
      </TableTd>
    </tr>
  )
}
