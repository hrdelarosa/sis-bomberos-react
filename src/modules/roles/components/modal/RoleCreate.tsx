import { SubmitHandler, useForm } from 'react-hook-form'
import { CreateRoleInputs } from '../../types/RolesTypes'

import Input from '../../../core/components/ui/Input'
import ButtonAction from '../../../core/components/ui/ButtonAction'
import ButtonCancel from '../../../core/components/ui/ButtonCancel'

export default function RoleCreate({ closeModal }: { closeModal: () => void }) {
  const { register, handleSubmit } = useForm<CreateRoleInputs>()

  const onSubmit: SubmitHandler<CreateRoleInputs> = (data) => {
    console.log(data)
    closeModal()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="Nombre" {...register('nombre')} />
      <Input label="Descripción" {...register('descripcion')} />

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
