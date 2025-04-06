import ButtonAction from './ui/ButtonAction'
import ButtonCancel from './ui/ButtonCancel'

interface Props {
  closeModal: () => void
  onDelete: () => void
  message: string
}

export default function DeleteItem({ closeModal, onDelete, message }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-gray-600 text-sm text-muted-foreground text-pretty">
        Esta acción eliminará permanentemente {message} y no se puede deshacer.
      </p>

      <div className="flex items-center justify-end gap-3">
        <ButtonCancel onClick={closeModal} />

        <ButtonAction
          onClick={onDelete}
          className="bg-primary-button-delete text-white hover:bg-primary-red"
          type="button"
        >
          Eliminar
        </ButtonAction>
      </div>
    </div>
  )
}
