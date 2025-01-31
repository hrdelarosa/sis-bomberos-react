import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Bookmark } from '../../servicios/components/Icons'
import { BASE_PERSONAL } from '../constants/basePersonal'
import usePersonalStore from '../store/personnel'

import Modal from '../../core/components/modal/Modal'
import Label from '../../core/components/UI/Label'
import Input from '../../core/components/UI/Input'
import MessageError from '../../core/components/UI/MessageError'
import Button from '../../core/components/UI/Button'
import Select from '../../core/components/UI/Select'
import GroupInputs from '../../servicios/components/nuevo/GroupInputs'
import SelectItems from '../../core/components/UI/SelectItems'

export default function PersonalCreateModal({
  isModalOpen,
  closeModal,
  ranks,
  guards,
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const { createPersonnel } = usePersonalStore()

  const onSubmit = async (data) => {
    createPersonnel({ input: data })
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
            <Label htmlFor="nombres" label="Nombres" />
            <div className="mt-1.5">
              <Input
                id="nombres"
                type="text"
                placeholder="Juan Francisco"
                {...register('nombres')}
                className="text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal"
              />
            </div>

            {errors.tipo && <MessageError error={errors.tipo.message} />}
          </div>

          <div>
            <Label htmlFor="apellidos" label="Apellidos" />
            <div className="mt-1.5">
              <Input
                id="apellidos"
                type="text"
                placeholder="Cruz Pérez"
                {...register('apellidos')}
                className="text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal"
              />
            </div>

            {errors.tipo && <MessageError error={errors.tipo.message} />}
          </div>

          <GroupInputs className="grid-cols-[1fr,_1fr,]">
            <div>
              <Label htmlFor="np" label="N/P" />
              <div className="mt-1.5">
                <Input
                  id="np"
                  type="text"
                  placeholder="1911"
                  {...register('np')}
                  className="text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal"
                />
              </div>

              {errors.tipo && <MessageError error={errors.tipo.message} />}
            </div>

            <div>
              <Label htmlFor="base" label="Base" />
              <div className="mt-1.5">
                <Select
                  id="base"
                  {...register('base')}
                  className="text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal"
                  options={BASE_PERSONAL}
                />
              </div>

              {errors.tipo && <MessageError error={errors.tipo.message} />}
            </div>
          </GroupInputs>

          <GroupInputs className="grid-cols-[1fr,_1fr,]">
            <div>
              <Label htmlFor="rango" label="Rango" />
              <div className="mt-1.5">
                <SelectItems
                  id="rango"
                  {...register('rango')}
                  className="text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal"
                  items={ranks}
                />
              </div>

              {errors.tipo && <MessageError error={errors.tipo.message} />}
            </div>

            <div>
              <Label htmlFor="guardia" label="Guardia" />
              <div className="mt-1.5">
                <SelectItems
                  id="guardia"
                  {...register('guardia')}
                  className="text-sm bg-white focus:bg-gray-50 focus:outline focus:outline-gray-500 ring-gray-300 placeholder:text-gray-500 placeholder:font-normal"
                  items={guards}
                />
              </div>

              {errors.tipo && <MessageError error={errors.tipo.message} />}
            </div>
          </GroupInputs>

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
