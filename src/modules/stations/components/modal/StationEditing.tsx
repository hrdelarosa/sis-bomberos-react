import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Station, UpdateStationInputs } from '../../types/StationsTypes'
import { firstCapitalLetter } from '../../../core/utils/firstCapital'
import statesStore from '../../../states/states/StatesStore'

import Input from '../../../core/components/ui/Input'
import Select from '../../../core/components/ui/Select'
import ButtonAction from '../../../core/components/ui/ButtonAction'
import ButtonCancel from '../../../core/components/ui/ButtonCancel'
import stationsStore from '../../states/stationsStore'

export default function StationEditing({
  station,
  closeModal,
}: {
  station: Station
  closeModal: () => void
}) {
  const { updateStation } = stationsStore()
  const { states, getStates, errorState } = statesStore()
  const { register, handleSubmit } = useForm<UpdateStationInputs>({
    defaultValues: {
      estado: station.est_id_et,
    },
  })

  useEffect(() => {
    getStates()
  }, [getStates])

  const onSubmit: SubmitHandler<UpdateStationInputs> = async (data) => {
    await updateStation({ id: station.et_id, input: data })
    closeModal()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-1.5 mb-4">
        <Input
          label="Nombre"
          value={station.et_nombre}
          disabled
          className="disabled:bg-gray-100/70 disabled:ring-gray-200"
        />

        <Input
          label="Ubicación"
          value={station.et_ubicacion}
          disabled
          className="disabled:bg-gray-100/70 disabled:ring-gray-200"
        />
      </div>
      <Select
        label="Estado"
        htmlFor="estado-tipo"
        className="w-full"
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
