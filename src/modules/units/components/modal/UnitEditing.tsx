import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Unit, UpdateUnitInputs } from '../../types/UnitsTypes'
import { firstCapitalLetter } from '../../../core/utils/firstCapital'

import Input from '../../../core/components/ui/Input'
import GetIcon from '../ui/getIcon'
import Select from '../../../core/components/ui/Select'
import statesStore from '../../../states/states/StatesStore'
import ButtonAction from '../../../core/components/ui/ButtonAction'
import ButtonCancel from '../../../core/components/ui/ButtonCancel'

export default function UnitEditing({
  unit,
  closeModal,
}: {
  unit: Unit
  closeModal: () => void
}) {
  const { states, getStates, errorState } = statesStore()
  const { register, handleSubmit } = useForm<UpdateUnitInputs>({
    defaultValues: {
      estado: unit.est_id_uni,
    },
  })

  useEffect(() => {
    getStates()
  }, [getStates])

  const onSubmit: SubmitHandler<UpdateUnitInputs> = (data) => {
    console.log(data)
    closeModal()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-[1fr_4fr] gap-5 mb-4">
        <Input
          label="Número"
          value={unit.uni_numero}
          disabled
          className="disabled:bg-gray-100/70 disabled:ring-gray-200"
        />
        <div className="relative">
          <GetIcon
            type={unit.tu_nombre}
            size="size-6 absolute right-2.5 top-1/2"
          />

          <Input
            label="Tipo de Unidad"
            value={firstCapitalLetter(unit.tu_nombre)}
            disabled
            className="disabled:bg-gray-100/70 disabled:ring-gray-200"
          />
        </div>
      </div>
      <Select
        label="Estado"
        htmlFor="estado-unidad"
        className="w-full"
        {...register('estado')}
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
