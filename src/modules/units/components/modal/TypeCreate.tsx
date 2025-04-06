import { SubmitHandler, useForm } from 'react-hook-form'
import { CreateTypeInputs } from '../../types/UnitsTypes'

import Input from '../../../core/components/ui/Input'
import ButtonAction from '../../../core/components/ui/ButtonAction'
import ButtonCancel from '../../../core/components/ui/ButtonCancel'

export default function TypeCreate({ closeModal }: { closeModal: () => void }) {
  const { register, handleSubmit } = useForm<CreateTypeInputs>()

  const onSubmit: SubmitHandler<CreateTypeInputs> = (data) => {
    console.log(data)
    closeModal()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="Nombre" {...register('nombre')} />

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
