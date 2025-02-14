import { useForm } from 'react-hook-form'
import useAuthStore from '../store/auth'

import Modal from '../../core/components/modal/Modal'
import Label from '../../core/components/UI/Label'
import Input from '../../core/components/UI/Input'
import MessageError from '../../core/components/UI/MessageError'
import LargeButton from './LargeButton'

export default function ResendModal({ isModalOpen, closeModal }) {
  const { resendVerifyEmail } = useAuthStore()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    resendVerifyEmail({ input: data })
    reset()
    closeModal()
  }

  return (
    <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
      <div className="flex flex-col gap-3.5">
        <h1 className="text-xl font-semibold">Reenvio de código</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <div>
            <Label htmlFor="correo" label="Correo electrónico" />
            <div className="mt-1.5">
              <Input
                id="correo"
                type="text"
                placeholder="example@example.com"
                {...register('correo', { required: 'El correo es requerido' })}
                className={`${
                  errors.correo
                    ? 'ring-fireRed-200 focus:ring-fireRed-500'
                    : 'ring-gray-100 focus:ring-fireYellow-400'
                }`}
              />
            </div>
            {errors.correo && <MessageError error={errors.correo.message} />}
          </div>

          <div className="flex justify-center">
            <LargeButton>Reenviar código</LargeButton>
          </div>
        </form>
      </div>
    </Modal>
  )
}
