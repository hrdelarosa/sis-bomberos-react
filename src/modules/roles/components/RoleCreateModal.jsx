import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Bookmark } from '../../servicios/components/Icons'
import useRoleStore from '../store/roles'

import Modal from '../../core/components/modal/Modal'
import Label from '../../core/components/UI/Label'
import Input from '../../core/components/UI/Input'
import MessageError from '../../core/components/UI/MessageError'
import Button from '../../core/components/UI/Button'

export default function RoleCreateModal({ isModalOpen, closeModal }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const { createRole } = useRoleStore()

  const onSubmit = async (data) => {
    createRole({ input: data })
    closeModal()
  }

  useEffect(() => {
    if (isModalOpen) reset()
  }, [isModalOpen, reset])

  return (
    <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <h4 className="text-xl font-semibold">Crear nueva estación</h4>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2.5"
        >
          <div>
            <Label htmlFor="nombre" label="Nombre" />
            <div className="mt-1.5">
              <Input
                id="nombre"
                type="text"
                placeholder="Administrador"
                {...register('nombre')}
                className="text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal"
              />
            </div>

            {errors.tipo && <MessageError error={errors.tipo.message} />}
          </div>

          <div>
            <Label htmlFor="descripcion" label="Descripción" />
            <div className="mt-1.5">
              <textarea
                id="descripcion"
                {...register('descripcion')}
                rows={4}
                cols={40}
                placeholder="Rol para administradores con acceso completo."
                className="w-full h-full resize-none text-gray-900 border-0 rounded-md p-2 text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 focus:outline-none placeholder:text-gray-500 placeholder:font-normal ring-1 transition ease-in-out duration-150"
              />
            </div>

            {errors.tipo && <MessageError error={errors.tipo.message} />}
          </div>

          <div className="flex justify-end mt-4">
            <Button>
              Guardar
              <Bookmark />
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  )
}
