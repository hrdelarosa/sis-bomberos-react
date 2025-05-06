import { SubmitHandler, useForm } from 'react-hook-form'
import { CreateGuardInputs } from '../../types/GuardsTypes'

import Input from '../../../core/components/ui/Input'
import ButtonAction from '../../../core/components/ui/ButtonAction'
import ButtonCancel from '../../../core/components/ui/ButtonCancel'
import stationsStore from '../../states/stationsStore'
import Select from '../../../core/components/ui/Select'
import { firstCapitalLetter } from '../../../core/utils/firstCapital'
import { useEffect } from 'react'
import guardsStore from '../../states/guardsStore'

export default function GuardCreate({
  closeModal,
}: {
  closeModal: () => void
}) {
  const { createGuard } = guardsStore()
  const { stations, getStations, errorStations } = stationsStore()
  const { register, handleSubmit } = useForm<CreateGuardInputs>()
  const onSubmit: SubmitHandler<CreateGuardInputs> = async (data) => {
    data.nombre = data.nombre.toLowerCase()

    await createGuard({ input: data })
    closeModal()
  }

  useEffect(() => {
    getStations()
  }, [getStations])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <Input label="Nombre" autoFocus {...register('nombre')} />
        <Select
          label="Estación"
          htmlFor="estacion-guardia"
          className="w-full"
          {...register('estacion', { valueAsNumber: true })}
        >
          {!errorStations &&
            stations
              .filter((station) => station.est_nombre === 'activo')
              .map((station) => (
                <option key={station.et_id} value={station.et_id}>
                  {firstCapitalLetter(station.et_nombre)}
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
