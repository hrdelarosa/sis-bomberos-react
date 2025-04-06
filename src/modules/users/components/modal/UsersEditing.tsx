import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { UpdateUserInputs, User } from '../../types/UsersTypes'
import { firstCapitalLetter } from '../../../core/utils/firstCapital'

import Input from '../../../core/components/ui/Input'
import Select from '../../../core/components/ui/Select'
import statesStore from '../../../states/states/StatesStore'
import ButtonAction from '../../../core/components/ui/ButtonAction'
import rolesStore from '../../../roles/states/rolesStore'
import ButtonCancel from '../../../core/components/ui/ButtonCancel'

export default function UserEditing({
  user,
  closeModal,
}: {
  user: User
  closeModal: () => void
}) {
  const { states, getStates, errorState } = statesStore()
  const { roles, getRoles, errorRoles } = rolesStore()
  const { register, handleSubmit } = useForm<UpdateUserInputs>({
    defaultValues: {
      estado: user.est_id_us,
      rol: user.rol_id_us,
    },
  })

  useEffect(() => {
    getStates()
    getRoles()
  }, [getStates, getRoles])

  const onSubmit: SubmitHandler<UpdateUserInputs> = (data) => {
    console.log(data)
    closeModal()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-[4fr_1fr] gap-2.5 mb-4">
        <Input
          label="Correo"
          value={user.us_correo}
          disabled
          className="disabled:bg-gray-100/70 disabled:ring-gray-200"
        />
        <Input
          label="Verificado"
          value={user.us_verificado ? 'Si' : 'No'}
          disabled
          className="disabled:bg-gray-100/70 disabled:ring-gray-200"
        />
      </div>
      <div className="grid grid-cols-[1fr_1fr] gap-2.5 mb-4">
        <Select
          label="Estado"
          htmlFor="estado-usuario"
          className="w-full"
          {...register('estado')}
        >
          {!errorState &&
            states.map((state) => (
              <option key={state.est_id} value={state.est_id}>
                {firstCapitalLetter(state.est_nombre)}
              </option>
            ))}
        </Select>

        <Select
          label="Roles"
          htmlFor="roles-usuario"
          className="w-full"
          {...register('rol')}
        >
          {!errorRoles &&
            roles.map((rol) => (
              <option key={rol.rol_id} value={rol.rol_id}>
                {firstCapitalLetter(rol.rol_nombre)}
              </option>
            ))}
        </Select>
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
