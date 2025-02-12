import { useForm } from 'react-hook-form'
import { MailIcon } from '../core/components/Icons'
import Input from '../core/components/UI/Input'
import LayoutAuth from '../core/layout/LayoutAuth'
import MessageError from '../core/components/UI/MessageError'
import { useEffect } from 'react'
import useAuthStore from './store/auth'
import { useNavigate } from 'react-router-dom'
import { useModal } from '../core/hooks/modal/useModal'
import ResendModal from './components/ResendModal'

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
      {/* <main className="h-screen w-screen flex flex-col items-center justify-center gap-3 px-5 bg-slate-100/60"> */}
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
          className="w-full max-w-xs flex flex-col gap-7 mt-2.5"
        >
          <div>
            <div className="mt-2">
              <Input
                type="text"
                id="token"
                placeholder="Código"
                {...register('token', { required: 'El código es requerido' })}
                className={`text-sm  ${
                  errors.nombres
                    ? 'ring-fireRed-200 focus:ring-fireRed-500'
                    : 'ring-gray-100 focus:ring-fireYellow-400'
                }`}
              />
            </div>
            {errors.token && <MessageError error={errors.token.message} />}
          </div>

          <div className="flex justify-center">
            <button className="select-none py-1 px-7 rounded-lg bg-fireYellow-400 text-black hover:bg-black hover:text-fireYellow-400 text-sm font-semibold leading-loose transition-colors duration-200 ease-out">
              Verificar
            </button>
          </div>
        </form>

        <hr className="bg-slate-50 w-full h-px my-4" />

        <div className="flex items-center gap-7 text-sm">
          <p>¿No has recibido ningún código?</p>
          <button
            onClick={handleModalToggle}
            className="hover:text-blue-800 transition-colors duration-200 ease-out"
          >
            Reenviar código
          </button>
        </div>
      </section>
      {/* </main> */}

      <ResendModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </LayoutAuth>
  )
}
