import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import useAuthStore from '../store/auth'

import ContainerForm from '../components/ContainerForm'
import Label from '../../core/components/UI/Label'
import Input from '../../core/components/UI/Input'
import MessageError from '../../core/components/UI/MessageError'
import Button from '../components/Button'

export default function From() {
  const { login, isAuthenticated, error } = useAuthStore()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    await login(data)
  }

  useEffect(() => {
    if (isAuthenticated) navigate('/')
  }, [isAuthenticated, navigate])

  return (
    <ContainerForm error={error} title="Iniciar Sesión">
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

        <div>
          <Label htmlFor="contraseña" label="Contraseña" />
          <div className="mt-1.5">
            <Input
              type="password"
              id="contraseña"
              placeholder="********"
              {...register('contraseña')}
              className={`${
                errors.contraseña
                  ? 'ring-fireRed-200 focus:ring-fireRed-500'
                  : 'ring-gray-100 focus:ring-fireYellow-400'
              }`}
            />
          </div>
          {errors.contraseña && (
            <MessageError text={errors.contraseña.message} />
          )}
        </div>

        <Button text="Iniciar Sesión" />
      </form>

      <div className="flex justify-between items-center mt-5">
        <p className="text-gray-500 text-sm">
          {' '}
          No tienes cuenta?{' '}
          <Link
            to="/register"
            className="text-sm text-blue-500 -200 hover:underline mt-4"
          >
            Registrarse
          </Link>
        </p>

        <Link
          to="/request-reset-password"
          className="text-sm text-blue-500 -200 hover:underline"
        >
          Olvidé mi contraseña
        </Link>
      </div>
    </ContainerForm>
  )
}
