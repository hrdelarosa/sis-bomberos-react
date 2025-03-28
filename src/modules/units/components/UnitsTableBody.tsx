import { Unit } from '../types/UnitsTypes'
import { firstCapitalLetter } from '../../core/utils/firstCapital'

import TableTd from '../../core/components/ui/table/TableTd'
import GetIcon from './ui/getIcon'
import BadgeState from '../../core/components/ui/BadgeState'
import TableButtonsActions from '../../core/components/TableButonsActions'

export default function UnitsTableBody({ unit }: { unit: Unit }) {
  return (
    <>
      <tr key={unit.id} className="hover:bg-gray-100">
        <TableTd className="font-medium">{unit.uni_numero}</TableTd>

        <TableTd>
          <div className="flex items-center gap-2">
            {<GetIcon type={unit.tu_id_uni} size="size-4" />}
            <span>{firstCapitalLetter(unit.tu_id_uni)}</span>
          </div>
        </TableTd>

        <TableTd>
          <BadgeState state={unit.est_id_uni} />
        </TableTd>

        <TableTd>
          <TableButtonsActions />
        </TableTd>
      </tr>
    </>
  )
}
