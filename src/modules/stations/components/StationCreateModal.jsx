import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Bookmark } from '../../servicios/components/Icons'
import useStationsStore from '../store/stations'

import Modal from '../../core/components/modal/Modal'
import Label from '../../core/components/UI/Label'
import Input from '../../core/components/UI/Input'
import MessageError from '../../core/components/UI/MessageError'
import SelectItems from '../../core/components/UI/SelectItems'
import Button from '../../core/components/UI/Button'

export default function StationCreateModal({
  isModalOpen,
  closeModal,
  states,
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const { createStations } = useStationsStore()

  const onSubmit = async (data) => {
    createStations({ input: data })
    closeModal()
  }

  useEffect(() => {
    if (isModalOpen) reset({ tipo: '' })
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
                placeholder="Cuartel de Bomberos Acapulco - Central Farallon"
                {...register('nombre')}
                className="text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal"
              />
            </div>

            {errors.tipo && <MessageError error={errors.tipo.message} />}
          </div>

          <div>
            <Label htmlFor="ubicacion" label="Ubicación" />
            <div className="mt-1.5">
              <textarea
                id="ubicacion"
                {...register('ubicacion')}
                rows={4}
                cols={40}
                placeholder="Cañada de los Amates S/n, Fraccionamiento Farallon del Obispo, 39690 Acapulco de Juárez, Gro."
                className="w-full h-full resize-none text-gray-900 border-0 rounded-md p-2 text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 focus:outline-none placeholder:text-gray-500 placeholder:font-normal ring-1 transition ease-in-out duration-150"
              />
            </div>

            {errors.tipo && <MessageError error={errors.tipo.message} />}
          </div>

          <div>
            <Label htmlFor="estado" label="Estado" />
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
