import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useModal } from '../core/hooks/modal/useModal'
import { useNavigate } from 'react-router-dom'
import { MailIcon } from '../core/components/Icons'
import useAuthStore from './store/auth'

import LayoutAuth from '../core/layout/LayoutAuth'
import Input from '../core/components/UI/Input'
import MessageError from '../core/components/UI/MessageError'
import ResendModal from './components/ResendModal'
import LargeButton from './components/LargeButton'

export default function VerifyEmail() {
  const { verifyEmail, isAuthenticated, error } = useAuthStore()
  const { isModalOpen, closeModal, handleModalToggle } = useModal()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    await verifyEmail({ token: data })
    if (!error.length) navigate('/login')
  }

  useEffect(() => {
    if (isAuthenticated) navigate('/')
  }, [isAuthenticated, navigate])

  return (
    <LayoutAuth>
      <section className="flex flex-col gap-2.5 items-center justify-center w-full max-w-xl bg-white p-6 rounded-lg">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold">Verifica tu correro</h1>
          <MailIcon />
        </div>
        <p className="text-center">
          Hemos enviado un código de verificación a su correo electrónico, por
          favor introdúzca el código en el recuadro inferior para verificar su
          correo electrónico.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-sm flex flex-col gap-7 mt-2.5"
        >
          <div>
            <div className="mt-2">
              <Input
                type="text"
                id="token"
                placeholder="Código"
                {...register('token', { required: 'El código es requerido' })}
                className={`text-sm  ${
                  errors.token
                    ? 'ring-fireRed-200 focus:ring-fireRed-500'
                    : 'ring-gray-100 focus:ring-fireYellow-400'
                }`}
              />
            </div>
            {errors.token && <MessageError error={errors.token.message} />}
          </div>

          <div className="flex justify-center">
            <LargeButton>Verificar</LargeButton>
          </div>
        </form>

        <hr className="bg-slate-50 w-full h-px my-4" />

        <div className="flex items-center gap-2 text-sm">
          <p>¿No has recibido ningún código?</p>

          <button
            onClick={handleModalToggle}
            className="text-fireOrange-600 hover:text-fireOrange-700 transition-colors duration-200 ease-out -200 hover:underline"
          >
            Reenviar código
          </button>
        </div>
      </section>

      <ResendModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </LayoutAuth>
  )
}
