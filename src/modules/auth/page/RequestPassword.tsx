import { Link } from 'react-router-dom'
import { useRequestPass } from '../hooks/useRequestPass'

import ContentForm from '../components/ContentForm'
import Input from '../../core/components/ui/Input'
import ButtonAction from '../../core/components/ui/ButtonAction'
import MiniLoader from '../../core/components/ui/MiniLoader'

export default function RequestPassword() {
  const { register, handleSubmit, onSubmit, loading } = useRequestPass()

  return (
    <ContentForm auth="requestPassword">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <Input
          label="Correo electrónico"
          {...register('correo')}
          autoFocus
          placeholder="bom@example.com"
          type="email"
        />

        <div className="flex items-center justify-between gap-6">
          <Link
            to="/reset-password"
            className="text-sm hover:underline underline-offset-4"
          >
            Ya tengo código
          </Link>

          <ButtonAction
            className="bg-primary-yellow hover:bg-black hover:text-primary-yellow disabled:bg-primary-yellow"
            disabled={loading}
          >
            {loading ? <MiniLoader /> : <>Enviar código</>}
          </ButtonAction>
        </div>
      </form>
    </ContentForm>
  )
}
