import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { CreatePersonnelInputs } from '../../types/PersonnelTypes'
import { firstCapitalLetter } from '../../../core/utils/firstCapital'
import guardsStore from '../../../stations/states/guardsStore'
import ranksStore from '../../states/ranksStore'

import Input from '../../../core/components/ui/Input'
import ButtonAction from '../../../core/components/ui/ButtonAction'
import ButtonCancel from '../../../core/components/ui/ButtonCancel'
import Select from '../../../core/components/ui/Select'
import personnelStore from '../../states/personnelStore'

export default function PersonnelCreate({
  closeModal,
}: {
  closeModal: () => void
}) {
  const { createPersonnel } = personnelStore()
  const { ranks, getRanks, errorRanks } = ranksStore()
  const { guards, getGuarda, errorGuards } = guardsStore()
  const { register, handleSubmit } = useForm<CreatePersonnelInputs>()

  const onSubmit: SubmitHandler<CreatePersonnelInputs> = async (data) => {
    await createPersonnel({ input: data })
    closeModal()
  }

  useEffect(() => {
    getRanks()
    getGuarda()
  }, [getRanks, getGuarda])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-1.5">
        <Input label="Nombre/s" autoFocus {...register('nombre')} />
        <Input label="Apellido" {...register('apellidos')} />

        <div className="grid grid-cols-[1fr_1fr] gap-x-5 gap-y-1.5">
          <Input label="N/P" {...register('np')} />

          <Select
            label="Rango"
            htmlFor="rango-personal"
            className="w-full"
            {...register('rango', { valueAsNumber: true })}
          >
            {!errorRanks &&
              ranks
                .filter((rank) => rank.est_nombre === 'activo')
                .map((rank) => (
                  <option key={rank.ran_id} value={rank.ran_id}>
                    {firstCapitalLetter(rank.ran_nombre)}
                  </option>
                ))}
          </Select>

          <Select
            label="Base"
            htmlFor="base-personal"
            className="w-full"
            {...register('base')}
          >
            <option value="supernumerario">Supernumerario</option>
            <option value="sindicalizado">Sindicalizado</option>
          </Select>

          <Select
            label="Guardia"
            htmlFor="guardia-personal"
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
