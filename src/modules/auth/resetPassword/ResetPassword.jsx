import { useForm } from 'react-hook-form'
import LayoutAuth from '../../core/layout/LayoutAuth'
import useAuthStore from '../store/auth'
import MessageError from '../../core/components/UI/MessageError'
import Input from '../../core/components/UI/Input'
import LargeButton from '../components/LargeButton'
import ContainerForm from '../components/ContainerForm'
import { useNavigate } from 'react-router-dom'

export default function ResetPassword() {
  const { resetPass, loadingFetch, error } = useAuthStore()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    await resetPass({ input: data, onSuccess: () => navigate('/login') })
  }

  return (
    <LayoutAuth>
      <ContainerForm title="Restablecer contraseña" error={error}>
        <p className="text-center">
          Hemos enviado un código a su correo electrónico, por favor introdúzca
          el código y la nueva contraseña en los recuadros para cambiar la
          contraseña.
        </p>
        <div className="w-full flex justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-sm flex flex-col gap-1.5 mt-2.5"
          >
            <div>
              <div className="mt-2">
                <Input
                  type="text"
                  id="token"
                  placeholder="Código"
                  {...register('token')}
                  className={`text-sm  ${
                    errors.token
                      ? 'ring-fireRed-200 focus:ring-fireRed-500'
                      : 'ring-gray-100 focus:ring-fireYellow-400'
                  }`}
                />
              </div>
              {errors.token && <MessageError error={errors.token.message} />}
            </div>

            <div>
              <div className="mt-2">
                <Input
                  type="password"
                  id="contraseña"
                  placeholder="Nueva contraseña"
                  {...register('contraseña')}
                  className={`text-sm  ${
                    errors.contraseña
                      ? 'ring-fireRed-200 focus:ring-fireRed-500'
                      : 'ring-gray-100 focus:ring-fireYellow-400'
                  }`}
                />
              </div>
              {errors.contraseña && (
                <MessageError error={errors.contraseña.message} />
              )}
            </div>

            <div>
              <div className="mt-2">
                <Input
                  type="password"
                  id="confirmarContraseña"
                  placeholder="Confirmar contraseña"
                  {...register('confirmarContraseña')}
                  className={`text-sm  ${
                    errors.confirmarContraseña
                      ? 'ring-fireRed-200 focus:ring-fireRed-500'
                      : 'ring-gray-100 focus:ring-fireYellow-400'
                  }`}
                />
              </div>
              {errors.confirmarContraseña && (
                <MessageError error={errors.confirmarContraseña.message} />
              )}
            </div>

            <div className="flex justify-center mt-5">
              <LargeButton loading={loadingFetch}>Enviar código</LargeButton>
            </div>
          </form>
        </div>
      </ContainerForm>
    </LayoutAuth>
  )
}
