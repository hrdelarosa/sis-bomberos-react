import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Role, UpdateRoleInputs } from '../../types/RolesTypes'
import { firstCapitalLetter } from '../../../core/utils/firstCapital'
import statesStore from '../../../states/states/StatesStore'

import Input from '../../../core/components/ui/Input'
import Select from '../../../core/components/ui/Select'
import ButtonAction from '../../../core/components/ui/ButtonAction'
import ButtonCancel from '../../../core/components/ui/ButtonCancel'
import rolesStore from '../../states/rolesStore'
import GroupInputs from '../../../core/components/ui/GroupInputs'

export default function RoleEditing({
  role,
  closeModal,
}: {
  role: Role
  closeModal: () => void
}) {
  const { updateRole } = rolesStore()
  const { states, getStates, errorState } = statesStore()
  const { register, handleSubmit } = useForm<UpdateRoleInputs>({
    defaultValues: {
      estado: role.est_id_rol,
    },
  })

  useEffect(() => {
    getStates()
  }, [getStates])

  const onSubmit: SubmitHandler<UpdateRoleInputs> = async (data) => {
    await updateRole({ id: role.rol_id, input: data })
    closeModal()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <GroupInputs className="grid-cols-[1fr_3fr] mb-2.5">
        <Input
          label="Rol"
          value={firstCapitalLetter(role.rol_nombre)}
          disabled
          className="disabled:bg-gray-100/70 disabled:ring-gray-200"
        />

        <Input
          label="Descripción"
          value={firstCapitalLetter(role.rol_descripcion)}
          disabled
          className="disabled:bg-gray-100/70 disabled:ring-gray-200"
        />
      </GroupInputs>

      <Select
        label="Estado"
        htmlFor="estado-rol"
        className="w-full"
        defaultValue={role.est_id_rol}
        {...register('estado', { valueAsNumber: true })}
      >
        {!errorState &&
          states.map((state) => (
            <option key={state.est_id} value={state.est_id}>
              {firstCapitalLetter(state.est_nombre)}
            </option>
          ))}
      </Select>

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
