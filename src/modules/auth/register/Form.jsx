import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import useAuthStore from '../store/auth'

import ContainerForm from '../components/ContainerForm'
import Label from '../../core/components/UI/Label'
import Input from '../../core/components/UI/Input'
import MessageError from '../../core/components/UI/MessageError'
import Button from '../components/Button'

export default function Form() {
  const { signup, isAuthenticated, error, loadingSingup } = useAuthStore()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    await signup(data)
    navigate('/verify-email')
  }

  useEffect(() => {
    if (isAuthenticated) navigate('/')
  }, [isAuthenticated, navigate])

  return (
    <ContainerForm error={error} title="Registrarse">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-3.5"
      >
        <div>
          <Label htmlFor="nombres" label="Nombre/s" />
          <div className="mt-2">
            <Input
              type="text"
              id="nombres"
              placeholder="Mario Lucas"
              {...register('nombres')}
              className={`${
                errors.nombres
                  ? 'ring-fireRed-200 focus:ring-fireRed-500'
                  : 'ring-gray-100 focus:ring-fireYellow-400'
              }`}
            />
          </div>
          {errors.nombres && <MessageError error={errors.nombres?.message} />}
        </div>

        <div>
          <Label htmlFor="apellidos" label="Apellidos" />
          <div className="mt-2">
            <Input
              type="text"
              id="apellidos"
              placeholder="García Rodríguez"
              {...register('apellidos')}
              className={`${
                errors.apellidos
                  ? 'ring-fireRed-200 focus:ring-fireRed-500'
                  : 'ring-gray-100 focus:ring-fireYellow-400'
              }`}
            />
          </div>
          {errors.apellidos && (
            <MessageError error={errors.apellidos?.message} />
          )}
        </div>

        <div>
          <Label htmlFor="correo" label="Correo electrónico" />
          <div className="mt-1.5">
            <Input
              id="correo"
              type="text"
              placeholder="example@example.com"
              {...register('correo')}
              className={`${
                errors.correo
                  ? 'ring-fireRed-200 focus:ring-fireRed-500'
                  : 'ring-gray-100 focus:ring-fireYellow-400'
              }`}
            />
          </div>
          {errors.correo && <MessageError error={errors.correo.message} />}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="constraseña" label="Contraseña" />
            <div className="mt-1.5">
              <Input
                type="password"
                id="constraseña"
                placeholder="********"
                {...register('contraseña')}
                className={`${
                  errors.constraseña
                    ? 'ring-fireRed-200 focus:ring-fireRed-500'
                    : 'ring-gray-100 focus:ring-fireYellow-400'
                }`}
              />
            </div>
            {errors.constraseña && (
              <MessageError error={errors.constraseña.message} />
            )}
          </div>

          <div>
            <Label htmlFor="confirmContraseña" label="Confirmar contraseña" />
            <div className="mt-1.5">
              <Input
                type="password"
                id="confirmContraseña"
                placeholder="********"
                {...register('confirmarContraseña')}
                className={`${
                  errors.confirmContraseña
                    ? 'ring-fireRed-200 focus:ring-fireRed-500'
                    : 'ring-gray-100 focus:ring-fireYellow-400'
                }`}
              />
            </div>
            {errors.confirmContraseña && (
              <MessageError error={errors.confirmContraseña.message} />
            )}
          </div>
        </div>

        <div className="">
          <p className="text-gray-900">
            {' '}
            Ya tienes cuenta?{' '}
            <Link
              to="/login"
              className="text-sm text-blue-500 -200 hover:underline mt-4"
            >
              Iniciar Sesión
            </Link>
          </p>
        </div>

        <Button text="Registrarse" loading={loadingSingup} />
      </form>
    </ContainerForm>
  )
}
