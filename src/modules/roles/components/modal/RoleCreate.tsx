import { SubmitHandler, useForm } from 'react-hook-form'
import { CreateRoleInputs } from '../../types/RolesTypes'
import { firstCapitalLetter } from '../../../core/utils/firstCapital'
import rolesStore from '../../states/rolesStore'

import Input from '../../../core/components/ui/Input'
import ButtonAction from '../../../core/components/ui/ButtonAction'
import ButtonCancel from '../../../core/components/ui/ButtonCancel'

export default function RoleCreate({ closeModal }: { closeModal: () => void }) {
  const { createRole } = rolesStore()
  const { register, handleSubmit } = useForm<CreateRoleInputs>()

  const onSubmit: SubmitHandler<CreateRoleInputs> = async (data) => {
    data.nombre = data.nombre.toLowerCase()
    data.descripcion = firstCapitalLetter(data.descripcion)

    await createRole({ input: data })
    closeModal()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <Input label="Nombre" autoFocus {...register('nombre')} />
        <Input label="Descripción" {...register('descripcion')} />
      </div>

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
