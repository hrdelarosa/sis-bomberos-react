import { Pencil, Trash2 } from 'lucide-react'
import ButtonOption from './ui/ButtonOption'

export default function TableButtonsActions() {
  return (
    <div className="flex justify-end gap-2">
      <ButtonOption className="hover:bg-gray-200">
        <Pencil className="size-4" />
      </ButtonOption>

      <ButtonOption className="hover:bg-red-100">
        <Trash2 className="size-4 text-red-600" />
      </ButtonOption>
    </div>
  )
}
