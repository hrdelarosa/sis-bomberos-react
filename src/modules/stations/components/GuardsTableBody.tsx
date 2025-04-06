import { Eye } from 'lucide-react'
import TableButtonsActions from '../../core/components/TableButonsActions'
import TableTd from '../../core/components/ui/table/TableTd'
import { Guard } from '../types/GuardsTypes'
import ButtonOption from '../../core/components/ui/ButtonOption'

export default function GuardsTableBody({ guard }: { guard: Guard }) {
  return (
    <tr key={guard.id} className="hover:bg-gray-100">
      <TableTd className="font-medium">{guard.gu_nombre}</TableTd>

      <TableTd>{guard.et_nombre}</TableTd>

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
