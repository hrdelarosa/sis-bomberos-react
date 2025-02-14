import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import useAuthStore from '../store/auth'

import LayoutAuth from '../../core/layout/LayoutAuth'
import Label from '../../core/components/UI/Label'
import Input from '../../core/components/UI/Input'
import MessageError from '../../core/components/UI/MessageError'
import LargeButton from '../components/LargeButton'

export default function RequestResetPassword() {
  const { requestResetPassword, loadingFetch } = useAuthStore()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    await requestResetPassword({
      input: data,
      onSuccess: () => navigate('/reset-password'),
    })
  }

  return (
    <LayoutAuth>
      <div className="w-full max-w-xl bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col gap-5">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Solicitar restablecer mi contraseña
            </h2>

            <p className="text-gray-800 font-semibold text-sm mt-2">
              Introduzca la dirección de correo electrónico asociada a su cuenta
              y le enviaremos un código para restablecer la contraseña.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-3.5"
          >
            <div>
              <Label htmlFor="correo" label="Correo electrónico" />
              <div className="mt-1.5">
                <Input
                  id="correo"
                  type="email"
                  placeholder="Escriba su correo electrónico"
                  {...register('correo')}
                  className={`${
                    errors.correo
                      ? 'ring-fireRed-200 focus:ring-fireRed-500'
                      : 'ring-gray-100 focus:ring-fireYellow-400'
                  }`}
                />
              </div>
              {errors.correo && <MessageError text={errors.correo.message} />}
            </div>

            <div className="flex justify-between">
              <Link
                to="/reset-password"
                className="text-sm text-fireOrange-600 -200 hover:underline"
              >
                Ya tengo código
              </Link>
              <LargeButton loading={loadingFetch}>Enviar código</LargeButton>
            </div>
          </form>
        </div>
      </div>
    </LayoutAuth>
  )
}
