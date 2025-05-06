import { SubmitHandler, useForm } from 'react-hook-form'
import { ResendVerifyEmailInput } from '../types/AuthTypes'
import authStore from '../states/authStore'

import Modal from '../../core/components/Modal'
import Input from '../../core/components/ui/Input'
import ButtonAction from '../../core/components/ui/ButtonAction'
import MiniLoader from '../../core/components/ui/MiniLoader'

interface Props {
  isModalOpen: boolean
  closeModal: () => void
}

export default function ResendVerificationCode({
  isModalOpen,
  closeModal,
}: Props) {
  const { register, handleSubmit } = useForm<ResendVerifyEmailInput>()
  const { resendVerify, loading } = authStore()

  const onSubmit: SubmitHandler<ResendVerifyEmailInput> = async (data) => {
    const success = await resendVerify({ input: data })
    if (success) closeModal()
  }

  return (
    <Modal
      title="Reenviar código de verificación"
      isOpneModal={isModalOpen}
      onClose={closeModal}
    >
      <div className="flex flex-col gap-6">
        <p className="text-sm text-gray-600">
          Escribe tu correo y te enviaremos nuevamente el código para continuar
          con el proceso.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <Input
            label="Correo electrónico"
            {...register('correo')}
            autoFocus
            placeholder="bom@example.com"
            type="email"
          />

          <div>
            <ButtonAction
              className="w-full justify-center bg-primary-yellow hover:bg-black hover:text-primary-yellow disabled:bg-primary-yellow"
              disabled={loading}
            >
              {loading ? <MiniLoader /> : <>Reenviar código</>}
            </ButtonAction>
          </div>
        </form>
      </div>
    </Modal>
  )
}
