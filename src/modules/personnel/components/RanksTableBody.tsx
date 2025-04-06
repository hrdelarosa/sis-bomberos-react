import { Eye } from 'lucide-react'
import TableButtonsActions from '../../core/components/TableButonsActions'
import BadgeState from '../../core/components/ui/BadgeState'
import ButtonOption from '../../core/components/ui/ButtonOption'
import TableTd from '../../core/components/ui/table/TableTd'
import { PersonnelByRank } from '../types/personnelTypes'

export default function RanksTableBody({ rank }: { rank: PersonnelByRank }) {
  return (
    <tr key={rank.category} className="hover:bg-gray-100">
      <TableTd>{rank.category}</TableTd>

      <TableTd className="font-medium">
        <span className="ml-3">{rank.total}</span>
      </TableTd>

      <TableTd className="font-medium">
        <span className="ml-3">{rank.active}</span>
      </TableTd>
      <TableTd className="font-medium">
        <span className="ml-3">{rank.activePercentage}%</span>
      </TableTd>
      <TableTd>
        {rank.state ? (
          <BadgeState state={rank.state} />
        ) : (
          <span>Sin estado</span>
        )}
      </TableTd>

      <TableTd>
        <TableButtonsActions>
          <ButtonOption className="hover:bg-gray-200">
            <Eye className="size-4" />
          </ButtonOption>
        </TableButtonsActions>
      </TableTd>
    </tr>
  )
}
