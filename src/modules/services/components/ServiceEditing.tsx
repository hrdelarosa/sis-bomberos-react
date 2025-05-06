import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Service, UpdateServicesInputs } from '../types/ServicesTypes'
import { firstCapitalLetter } from '../../core/utils/firstCapital'
import statesServicesStore from '../../states/states/StatesServicesStore'

import Input from '../../core/components/ui/Input'
import Select from '../../core/components/ui/Select'
import ButtonCancel from '../../core/components/ui/ButtonCancel'
import ButtonAction from '../../core/components/ui/ButtonAction'
import servicesStore from '../states/servicesStore'

export default function ServiceEditing({
  service,
  closeModal,
}: {
  service: Service
  closeModal: () => void
}) {
  const { updateService } = servicesStore()
  const { statesServices, getStatesServices, errorStateServices } =
    statesServicesStore()
  const { register, handleSubmit } = useForm<UpdateServicesInputs>({
    defaultValues: {
      estado: service.estser_id_ser,
    },
  })

  useEffect(() => {
    getStatesServices()
  }, [getStatesServices])

  const onSubmit: SubmitHandler<UpdateServicesInputs> = async (data) => {
    await updateService({ id: service.ser_id, input: data })
    closeModal()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-1.5">
        <div className="grid grid-cols-[1fr_2fr] gap-3">
          <Input
            label="Incidente"
            className="capitalize"
            value={service.ser_incidente}
            disabled
          />

          <Input label="Solicitante" value={service.us_nombres} disabled />
        </div>

        <div className="grid grid-cols-[1fr_1fr] gap-3">
          <Input label="Folio" value={service.ser_folio} disabled />

          <Select
            label="Estado"
            htmlFor="estado-servicio"
            className="w-full"
            {...register('estado', { valueAsNumber: true })}
          >
            {!errorStateServices &&
              statesServices.map((state) => (
                <option
                  key={state.estser_id}
                  disabled={
                    state.estser_id === 1 ||
                    state.estser_id === 2 ||
                    state.estser_id === 3
                  }
                  value={state.estser_id}
                >
                  {firstCapitalLetter(state.estser_nombre)}
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
