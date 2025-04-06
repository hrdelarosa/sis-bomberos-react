import { useEffect } from 'react'
import ButtonAction from '../../../core/components/ui/ButtonAction'
import Input from '../../../core/components/ui/Input'
import Select from '../../../core/components/ui/Select'
import { firstCapitalLetter } from '../../../core/utils/firstCapital'
import unitsStore from '../../states/unitsStore'
import { SubmitHandler, useForm } from 'react-hook-form'
import { CreateUnitInputs } from '../../types/UnitsTypes'
import ButtonCancel from '../../../core/components/ui/ButtonCancel'

export default function UnitCreate({ closeModal }: { closeModal: () => void }) {
  const { types, getTypeUnits, errorTypes } = unitsStore()
  const { register, handleSubmit } = useForm<CreateUnitInputs>()

  const onSubmit: SubmitHandler<CreateUnitInputs> = (data) => {
    console.log(data)
    closeModal()
  }

  useEffect(() => {
    getTypeUnits()
  }, [getTypeUnits])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-[3fr_1fr] gap-3.5 mb-4">
        <Select
          label="Tipo Unidad"
          htmlFor="tipo-unidad"
          className="w-full"
          {...register('tipo')}
        >
          {!errorTypes &&
            types.map((type) => (
              <option key={type.tu_id} value={type.tu_id}>
                {firstCapitalLetter(type.tu_nombre)}
              </option>
            ))}
        </Select>

        <Input label="Número" {...register('numero')} />
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
