import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Bookmark } from '../../../servicios/components/Icons'

import Modal from '../../../core/components/modal/Modal'
import Label from '../../../core/components/UI/Label'
import Input from '../../../core/components/UI/Input'
import Button from '../../../core/components/UI/Button'
import MessageError from '../../../core/components/UI/MessageError'
import useUnitsStore from '../../store/units'

export default function TypeCreateModal({ isModalOpen, closeModal }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const { createTypeU } = useUnitsStore()

  const onSubmit = async (data) => {
    createTypeU({ input: data })
    closeModal()
  }

  useEffect(() => {
    if (isModalOpen) reset({ tipo: '' })
  }, [isModalOpen, reset])

  return (
    <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <h4 className="text-xl font-semibold">Crear tipo de unidad</h4>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7">
          <div>
            <Label htmlFor="tipo" label="Tipo" />
            <div className="mt-1.5">
              <Input
                id="tipo"
                type="text"
                placeholder="Camionetas"
                {...register('tipo')}
                className="text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal"
              />
            </div>

            {errors.tipo && <MessageError error={errors.tipo.message} />}
          </div>

          <div className="flex justify-end">
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
