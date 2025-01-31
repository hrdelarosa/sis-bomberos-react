import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { STATE } from '../../../core/constants/statesItems'
import useUnitsStore from '../../store/units'

import Modal from '../../../core/components/modal/Modal'
import UnitNumber from './UnitNumber'
import RadioInput from './RadioInput'
import MessageError from '../../../core/components/UI/MessageError'
import Button from '../../../core/components/UI/Button'

export default function UnitEditModal({
  unit,
  states,
  isModalOpen,
  closeModal,
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { estado: unit.uni_stado },
  })
  const { updateUnit } = useUnitsStore()

  const onSubmit = async (data) => {
    if (unit && data) {
      if (data.estado !== unit.est_id_uni) {
        updateUnit({ id: unit.id, input: data })
        closeModal()
      } else {
        const dispo =
          data.estado === STATE.activo
            ? STATE.activo
            : data.estado === STATE.inactivo && STATE.inactivo
        toast.warning(
          `El estado ya está establecido como ${dispo}. No se puede cambiar al mismo estado.`,
          { duration: 3500 }
        )
      }
    }
  }

  useEffect(() => {
    if (isModalOpen) reset({ estado: unit.est_id_uni })
  }, [isModalOpen, reset, unit.est_id_uni])

  return (
    <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <h4 className="text-xl font-semibold">Editar Estado</h4>

          <div className="flex justify-center">
            <UnitNumber xl number={unit.uni_numero} noHash />
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7">
          <div className="flex justify-evenly">
            {states &&
              states.map((state) => (
                <RadioInput
                  key={state.id}
                  {...register('estado')}
                  text={state.est_nombre}
                  value={state.id}
                  defaultChecked={state.est_nombre === unit.est_id_uni}
                />
              ))}

            {errors.estado && <MessageError error={errors.estado.message} />}
          </div>

          <div className="flex justify-center">
            <Button type="submit">Guardar cambios</Button>
          </div>
        </form>
      </div>
    </Modal>
  )
}
