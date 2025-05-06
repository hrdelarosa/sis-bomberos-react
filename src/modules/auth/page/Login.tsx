import { Link } from 'react-router-dom'
import { useLogin } from '../hooks/useLogin'

import ContentForm from '../components/ContentForm'
import Input from '../../core/components/ui/Input'
import ButtonAction from '../../core/components/ui/ButtonAction'
import MiniLoader from '../../core/components/ui/MiniLoader'

export default function Login() {
  const { register, handleSubmit, onSubmit, loading } = useLogin()

  return (
    <ContentForm>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <Input
            label="Correo electrónico"
            {...register('correo')}
            autoFocus
            placeholder="bom@example.com"
            type="email"
          />

          <div className="relative">
            <Input
              label="Contraseña"
              {...register('contraseña')}
              type="password"
            />

            <Link
              to="/request-reset-password"
              className="absolute top-0 right-0 text-sm hover:underline underline-offset-4"
            >
              ¿Ha olvidado su contraseña?
            </Link>
          </div>
        </div>

        <div>
          <ButtonAction
            className="w-full justify-center bg-primary-yellow hover:bg-black hover:text-primary-yellow disabled:bg-primary-yellow"
            disabled={loading}
          >
            {loading ? <MiniLoader /> : <>Iniciar Sesión</>}
          </ButtonAction>

          <div className="mt-4 text-center text-sm">
            ¿No tiene una cuenta?{' '}
            <Link to="/register" className="hover:underline underline-offset-4">
              Regístrese
            </Link>
          </div>
        </div>
      </form>
    </ContentForm>
  )
}
