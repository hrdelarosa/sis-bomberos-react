import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TypeUnit, UpdateTypeInputs } from '../../types/TypesUnitsTypes'
import { firstCapitalLetter } from '../../../core/utils/firstCapital'

import Input from '../../../core/components/ui/Input'
import Select from '../../../core/components/ui/Select'
import statesStore from '../../../states/states/StatesStore'
import ButtonAction from '../../../core/components/ui/ButtonAction'
import ButtonCancel from '../../../core/components/ui/ButtonCancel'
import typesStore from '../../states/typesStore'

export default function TypeEditing({
  type,
  closeModal,
}: {
  type: TypeUnit
  closeModal: () => void
}) {
  const { updateTypeUnit } = typesStore()
  const { states, getStates, errorState } = statesStore()
  const { register, handleSubmit } = useForm<UpdateTypeInputs>({
    defaultValues: {
      estado: type.est_id_tu,
    },
  })

  useEffect(() => {
    getStates()
  }, [getStates])

  const onSubmit: SubmitHandler<UpdateTypeInputs> = async (data) => {
    await updateTypeUnit({ id: type.tu_id, input: data })
    closeModal()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-[1fr_1fr] gap-5 mb-4">
        <Input
          label="Número"
          value={firstCapitalLetter(type.tu_nombre)}
          disabled
          className="disabled:bg-gray-100/70 disabled:ring-gray-200"
        />
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
