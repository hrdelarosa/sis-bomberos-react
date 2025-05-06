import ButtonAction from './ui/ButtonAction'
import ButtonCancel from './ui/ButtonCancel'

interface Props {
  closeModal: () => void
  onDelete: () => void
  message: string
}

export default function DeleteItem({ closeModal, onDelete, message }: Props) {
  return (
    <div>
      <div className="flex flex-col mt-1">
        <p className="text-muted-foreground text-pretty">
          Esto eliminará <strong>{message}</strong>.
        </p>

        <p className="text-gray-500 text-sm text-muted-foreground text-pretty">
          Esta acción sera permanentemente y no se puede deshacer.
        </p>
      </div>

      <div className="flex items-center justify-end gap-3 mt-5">
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
