import BadgeState from '../../../core/components/ui/BadgeState'
import TableTd from '../../../core/components/ui/table/TableTd'
import { firstCapitalLetter } from '../../../core/utils/firstCapital'
import { UnitService } from '../../types/ServicesTypes'

export default function UnitsSerTableBody({ unit }: { unit: UnitService }) {
  return (
    <>
      <tr className="hover:bg-gray-100">
        <TableTd className="font-medium">{unit.numero}</TableTd>

        <TableTd>
          <div className="flex items-center gap-2">
            <span>{firstCapitalLetter(unit.tipo)}</span>
          </div>
        </TableTd>

        <TableTd>
          <BadgeState state={unit.estado} />
        </TableTd>
      </tr>
    </>
  )
}
