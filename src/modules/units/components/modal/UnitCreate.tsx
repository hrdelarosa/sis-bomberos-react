import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { CreateUnitInputs } from '../../types/UnitsTypes'
import { firstCapitalLetter } from '../../../core/utils/firstCapital'
import typesStore from '../../states/typesStore'

import Input from '../../../core/components/ui/Input'
import Select from '../../../core/components/ui/Select'
import ButtonAction from '../../../core/components/ui/ButtonAction'
import ButtonCancel from '../../../core/components/ui/ButtonCancel'
import unitsStore from '../../states/unitsStore'

export default function UnitCreate({ closeModal }: { closeModal: () => void }) {
  const { createUnit } = unitsStore()
  const { types, getTypeUnits, errorTypes } = typesStore()
  const { register, handleSubmit } = useForm<CreateUnitInputs>()

  const onSubmit: SubmitHandler<CreateUnitInputs> = async (data) => {
    await createUnit({ input: data })
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
          {...register('tipo', { valueAsNumber: true })}
        >
          {!errorTypes &&
            types
              .filter((type) => type.est_nombre === 'activo')
              .map((type) => (
                <option key={type.tu_id} value={type.tu_id}>
                  {firstCapitalLetter(type.tu_nombre)}
                </option>
              ))}
        </Select>

        <Input label="Número" autoFocus {...register('numero')} />
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
