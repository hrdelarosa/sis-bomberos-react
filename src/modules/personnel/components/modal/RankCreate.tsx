import { SubmitHandler, useForm } from 'react-hook-form'
import { CreateRankInputs } from '../../types/RanksTypes'

import Input from '../../../core/components/ui/Input'
import ButtonAction from '../../../core/components/ui/ButtonAction'
import ButtonCancel from '../../../core/components/ui/ButtonCancel'
import ranksStore from '../../states/ranksStore'

export default function RankCreate({ closeModal }: { closeModal: () => void }) {
  const { createRank } = ranksStore()
  const { register, handleSubmit } = useForm<CreateRankInputs>()

  const onSubmit: SubmitHandler<CreateRankInputs> = async (data) => {
    data.nombre = data.nombre.toLowerCase()

    await createRank({ input: data })
    closeModal()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <Input label="Nombre" autoFocus {...register('nombre')} />
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
