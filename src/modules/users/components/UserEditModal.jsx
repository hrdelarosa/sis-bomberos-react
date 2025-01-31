import { useEffect } from 'react'
import Modal from '../../core/components/modal/Modal'
import Label from '../../core/components/UI/Label'
import Input from '../../core/components/UI/Input'
import MessageError from '../../core/components/UI/MessageError'
import { useForm } from 'react-hook-form'
import GroupInputs from '../../servicios/components/nuevo/GroupInputs'
import SelectItems from '../../core/components/UI/SelectItems'
import Button from '../../core/components/UI/Button'
import { toast } from 'sonner'
import useUsersStore from '../store/users'

export default function UserEditModal({
  user,
  isModalOpen,
  closeModal,
  roles,
  states,
}) {
  const defaultRolId =
    roles.find((role) => role.rol_nombre === user.rol_nombre)?.id || ''
  const defaultStateId =
    states.find((state) => state.est_nombre === user.est_nombre)?.id || ''
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      rol: defaultRolId,
      estado: defaultStateId,
    },
  })
  const { updateUser } = useUsersStore()

  const onSubmit = async (data) => {
    if (defaultRolId === data.rol && defaultStateId === data.estado)
      toast.warning(
        'No puedes cambiar al mismo rol y/o estado. Intentalo nuevamente',
        { duration: 3500 }
      )
    else {
      updateUser({ id: user.id, input: data })
      closeModal()
    }
  }

  useEffect(() => {
    if (isModalOpen)
      reset({
        rol:
          roles.find((role) => role.rol_nombre === user.rol_nombre)?.id || '',
        estado:
          states.find((state) => state.est_nombre === user.est_nombre)?.id ||
          '',
      })
  }, [isModalOpen, reset, roles, states, user.est_nombre, user.rol_nombre])

  return (
    <Modal
      isModalOpen={isModalOpen}
      closeModal={closeModal}
      className="max-w-2xl"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <h4 className="text-xl font-semibold">Editar Usuario</h4>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <GroupInputs className="grid-cols-[3fr,_2fr]">
            <div>
              <Label label="Nombre" />
              <div className="mt-1.5">
                <Input
                  id="nombres"
                  type="text"
                  defaultValue={`${user.us_nombres} ${user.us_apellidos}`}
                  disabled
                  className="text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal hover:disabled:bg-fireRed-50/45"
                />
              </div>

              {errors.tipo && <MessageError error={errors.tipo.message} />}
            </div>

            <div>
              <Label label="Correo" />
              <div className="mt-1.5">
                <Input
                  id="nombres"
                  type="text"
                  defaultValue={user.us_correo}
                  disabled
                  className="text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal hover:disabled:bg-fireRed-50/45"
                />
              </div>

              {errors.tipo && <MessageError error={errors.tipo.message} />}
            </div>
          </GroupInputs>

          <GroupInputs className="grid-cols-[2fr,_2fr]">
            <div>
              <Label htmlFor="rol" label="Roles" />
              <div className="mt-1.5">
                <SelectItems
                  id="rol"
                  {...register('rol')}
                  className="text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal"
                  items={roles}
                />
              </div>

              {errors.tipo && <MessageError error={errors.tipo.message} />}
            </div>

            <div>
              <Label label="Estado" />
              <div className="mt-1.5">
                <SelectItems
                  id="estado"
                  {...register('estado')}
                  className="text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal"
                  items={states}
                />
              </div>

              {errors.tipo && <MessageError error={errors.tipo.message} />}
            </div>
          </GroupInputs>

          <div className="flex justify-end mt-3">
            <Button type="submit">Guardar cambios</Button>
          </div>
        </form>
      </div>
    </Modal>
  )
}
