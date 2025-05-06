import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Personnel, UpdatePersonInputs } from '../../types/PersonnelTypes'
import { firstCapitalLetter } from '../../../core/utils/firstCapital'
import personnelStore from '../../states/personnelStore'
import statesStore from '../../../states/states/StatesStore'
import ranksStore from '../../states/ranksStore'
import guardsStore from '../../../stations/states/guardsStore'

import Input from '../../../core/components/ui/Input'
import Select from '../../../core/components/ui/Select'
import ButtonAction from '../../../core/components/ui/ButtonAction'
import ButtonCancel from '../../../core/components/ui/ButtonCancel'

export default function PersonnelEditing({
  person,
  closeModal,
}: {
  person: Personnel
  closeModal: () => void
}) {
  const { updatePersonnel } = personnelStore()
  const { states, getStates, errorState } = statesStore()
  const { ranks, getRanks, errorRanks } = ranksStore()
  const { guards, getGuarda, errorGuards } = guardsStore()
  const { register, handleSubmit } = useForm<UpdatePersonInputs>({
    defaultValues: {
      estado: person.est_id_per,
      rango: person.ran_id_per,
      guardia: person.gu_id_per,
    },
  })

  useEffect(() => {
    getStates()
    getRanks()
    getGuarda()
  }, [getStates, getRanks, getGuarda])

  const onSubmit: SubmitHandler<UpdatePersonInputs> = async (data) => {
    await updatePersonnel({ id: person.per_id, input: data })
    closeModal()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-1.5">
        <div className="grid grid-cols-[4fr_1fr] gap-5">
          <Input
            label="Nombre"
            value={`${person.per_nombres} ${person.per_apellidos}`}
            disabled
          />

          <Input label="N/P" value={person.per_np} disabled />
        </div>

        <div className="grid grid-cols-[1fr_1fr] gap-5">
          <Select
            label="Estado"
            htmlFor="estado-persona"
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

          <Select
            label="Rango"
            htmlFor="rango-persona"
            className="w-full"
            {...register('rango', { valueAsNumber: true })}
          >
            {!errorRanks &&
              ranks.map((rank) => (
                <option key={rank.ran_id} value={rank.ran_id}>
                  {firstCapitalLetter(rank.ran_nombre)}
                </option>
              ))}
          </Select>
        </div>

        <Select
          label="Guardia"
          htmlFor="guardia-persona"
          className="w-full"
          {...register('guardia', { valueAsNumber: true })}
        >
          {!errorGuards &&
            guards.map((guard) => (
              <option key={guard.gu_id} value={guard.gu_id}>
                {firstCapitalLetter(guard.gu_nombre)}
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
