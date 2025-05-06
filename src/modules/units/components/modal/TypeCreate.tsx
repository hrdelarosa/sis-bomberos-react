import { SubmitHandler, useForm } from 'react-hook-form'
import { CreateTypeInputs } from '../../types/TypesUnitsTypes'
import typesStore from '../../states/typesStore'

import Input from '../../../core/components/ui/Input'
import ButtonAction from '../../../core/components/ui/ButtonAction'
import ButtonCancel from '../../../core/components/ui/ButtonCancel'

export default function TypeCreate({ closeModal }: { closeModal: () => void }) {
  const { createTypeUnit } = typesStore()
  const { register, handleSubmit } = useForm<CreateTypeInputs>()

  const onSubmit: SubmitHandler<CreateTypeInputs> = async (data) => {
    data.nombre = data.nombre.toLowerCase()

    await createTypeUnit({ input: data })
    closeModal()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="Nombre" autoFocus {...register('nombre')} />

      <div className="flex items-center justify-end gap-3 mt-8">
        <ButtonCancel onClick={closeModal} />
        <ButtonAction
          className="bg-primary-yellow hover:bg-black hover:text-primary-yellow"
          type="submit"
        >
          Guardar
        </ButtonAction>
      </div>
    </form>
  )
}
