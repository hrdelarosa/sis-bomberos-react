import { useEffect } from 'react'
import ButtonAction from '../../../core/components/ui/ButtonAction'
import Input from '../../../core/components/ui/Input'
import { firstCapitalLetter } from '../../../core/utils/firstCapital'
import Filter from '../../../units/components/ui/Filter'
import statesStore from '../../../states/states/StatesStore'
import personnelStore from '../../states/personnelStore'
import guardsStore from '../../../stations/states/guardsStore'
import { Personnel, UpdatePersonInputs } from '../../types/personnelTypes'
import { SubmitHandler, useForm } from 'react-hook-form'
import Select from '../../../core/components/ui/Select'

export default function PersonnelEditingForm({
  person,
}: {
  person: Personnel
}) {
  const { states, getStates, errorState } = statesStore()
  const { ranks, getRanks, errorRanks } = personnelStore()
  const { guards, getGuarda, errorGuards } = guardsStore()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdatePersonInputs>()

  const onSubmit: SubmitHandler<UpdatePersonInputs> = (data) => {
    const estadoId = states.find(
      (state) => state.est_nombre === data.estado
    )?.id
    const rangoId = ranks.find((rank) => rank.ran_nombre === data.rango)?.id
    const guardiaId = guards.find(
      (guard) => guard.gu_nombre === data.guardia
    )?.id

    const payload = {
      ...data,
      estado: estadoId,
      rango: rangoId,
      guardia: guardiaId,
    }
    console.log(payload)
  }

  useEffect(() => {
    getStates()
    getRanks()
    getGuarda()
  }, [getStates, getRanks, getGuarda])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-[3fr_1fr] gap-3.5 mb-4">
        <Input
          label="Nombre"
          value={`${person.per_nombres} ${person.per_apellidos}`}
          disabled
          className="disabled:bg-gray-100/70 disabled:ring-gray-200"
        />
        <Input
          label="Np"
          value={person.per_np}
          disabled
          className="disabled:bg-gray-100/70 disabled:ring-gray-200"
        />
      </div>

      <div className="grid grid-cols-2 gap-3.5">
        <Select
          label="Estado"
          htmlFor="estado-personal"
          className="w-full"
          defaultValue={person.est_id_per}
          {...register('estado')}
        >
          {!errorState &&
            states.map((state) => (
              <option key={state.id} value={state.est_nombre}>
                {firstCapitalLetter(state.est_nombre)}
              </option>
            ))}
        </Select>

        <Select
          label="Rango"
          htmlFor="rango-personal"
          className="w-full"
          defaultValue={person.ran_id_per}
          {...register('rango')}
        >
          {!errorRanks &&
            ranks.map((rank) => (
              <option key={rank.id} value={rank.ran_nombre}>
                {firstCapitalLetter(rank.ran_nombre)}
              </option>
            ))}
        </Select>

        <Select
          label="Guardia"
          htmlFor="guardia-personal"
          className="w-full"
          defaultValue={person.gu_id_per}
          {...register('guardia')}
        >
          {!errorGuards &&
            guards.map((guard) => (
              <option key={guard.id} value={guard.id}>
                {firstCapitalLetter(guard.gu_nombre)}
              </option>
            ))}
        </Select>
      </div>

      <div className="flex items-center justify-end gap-3 mt-5">
        <ButtonAction
          className="bg-stone-200/50 hover:bg-stone-300/70"
          type="button"
        >
          Cancelar
        </ButtonAction>

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
