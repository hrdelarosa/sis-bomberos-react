import { SubmitHandler, useForm } from 'react-hook-form'
import { CreateStationInputs } from '../../types/StationsTypes'

import Input from '../../../core/components/ui/Input'
import ButtonAction from '../../../core/components/ui/ButtonAction'
import ButtonCancel from '../../../core/components/ui/ButtonCancel'
import stationsStore from '../../states/stationsStore'

export default function StationCreate({
  closeModal,
}: {
  closeModal: () => void
}) {
  const { createStation } = stationsStore()
  const { register, handleSubmit } = useForm<CreateStationInputs>()

  const onSubmit: SubmitHandler<CreateStationInputs> = async (data) => {
    await createStation({ input: data })
    closeModal()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <Input label="Nombre" autoFocus {...register('nombre')} />
        <Input label="Ubicación" {...register('ubicacion')} />
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
