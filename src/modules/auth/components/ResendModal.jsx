import { useForm } from 'react-hook-form'
import Modal from '../../core/components/modal/Modal'
import Input from '../../core/components/UI/Input'
import Label from '../../core/components/UI/Label'
import MessageError from '../../core/components/UI/MessageError'
import Button from '../../core/components/UI/Button'
import useAuthStore from '../store/auth'

export default function ResendModal({ isModalOpen, closeModal }) {
  const { resendVerifyEmail } = useAuthStore()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    resendVerifyEmail(data)
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
            <Button>Reenviar código</Button>
          </div>
        </form>
      </div>
    </Modal>
  )
}
