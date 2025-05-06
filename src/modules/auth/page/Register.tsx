import { Link } from 'react-router-dom'
import { useRegister } from '../hooks/useRegister'

import ContentForm from '../components/ContentForm'
import ButtonAction from '../../core/components/ui/ButtonAction'
import GroupInputs from '../../core/components/ui/GroupInputs'
import Input from '../../core/components/ui/Input'
import MiniLoader from '../../core/components/ui/MiniLoader'

export default function Register() {
  const { register, handleSubmit, onSubmit, loading } = useRegister()

  return (
    <ContentForm auth="register">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2.5">
          <Input label="Nombre/s" autoFocus {...register('nombres')} />
          <Input label="Apellidos" {...register('apellidos')} />
          <Input
            label="Correo electrónico"
            {...register('correo')}
            placeholder="bom@example.com"
            type="email"
          />

          <GroupInputs className="grid-cols-2">
            <Input
              label="Contraseña"
              {...register('contraseña')}
              type="password"
            />
            <Input
              label="Confirmar contraseña"
              {...register('confirmarContraseña')}
              type="password"
            />
          </GroupInputs>
        </div>

        <div>
          <ButtonAction className="w-full justify-center bg-primary-yellow hover:bg-black hover:text-primary-yellow disabled:bg-primary-yellow">
            {loading ? <MiniLoader /> : <>Registrarse</>}
          </ButtonAction>

          <div className="mt-4 text-center text-sm">
            ¿Ya tienes cuenta?{' '}
            <Link to="/login" className="hover:underline underline-offset-4">
              Iniciar Sesión
            </Link>
          </div>
        </div>
      </form>
    </ContentForm>
  )
}
