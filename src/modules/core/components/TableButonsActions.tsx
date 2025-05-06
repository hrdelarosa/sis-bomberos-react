import { Pencil, Trash2 } from 'lucide-react'
import { Modal } from '../types/ModalTypes'

import ButtonOption from './ui/ButtonOption'

export default function TableButtonsActions({
  handleModalToggle,
  children,
}: {
  handleModalToggle: (type: Exclude<Modal, 'create' | null>) => void
  children?: React.ReactNode
}) {
  return (
    <div className="flex justify-end gap-2">
      {children}

      <ButtonOption
        className="hover:bg-gray-200"
        onClick={() => handleModalToggle('edit')}
      >
        <Pencil className="size-4" />
      </ButtonOption>

      <ButtonOption
        className="hover:bg-red-100"
        onClick={() => handleModalToggle('delete')}
      >
        <Trash2 className="size-4 text-red-600" />
      </ButtonOption>
    </div>
  )
}
