import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Bookmark } from '../../servicios/components/Icons'
import useRanksStore from '../store/ranks'

import Modal from '../../core/components/modal/Modal'
import Label from '../../core/components/UI/Label'
import Input from '../../core/components/UI/Input'
import MessageError from '../../core/components/UI/MessageError'
import Button from '../../core/components/UI/Button'

export default function RankCreateModal({ isModalOpen, closeModal }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const { createRanks } = useRanksStore()

  const onSubmit = async (data) => {
    createRanks({ input: data })
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
                placeholder="Sargento"
                {...register('nombre')}
                className="text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal"
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
