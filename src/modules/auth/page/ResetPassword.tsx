import { useResetPass } from '../hooks/useResetPass'

import ContentForm from '../components/ContentForm'
import GroupInputs from '../../core/components/ui/GroupInputs'
import Input from '../../core/components/ui/Input'
import ButtonAction from '../../core/components/ui/ButtonAction'
import MiniLoader from '../../core/components/ui/MiniLoader'

export default function ResetPassword() {
  const { register, handleSubmit, onSubmit, loading } = useResetPass()

  return (
    <ContentForm auth="resetPassword">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2.5">
          <Input
            label="Código"
            {...register('token')}
            autoFocus
            placeholder="Ejem: 482736"
          />

          <GroupInputs className="grid-cols-2">
            <Input
              label="Nueva Contraseña"
              {...register('contraseña')}
              type="password"
            />
            <Input
              label="Confirmar Contraseña"
              {...register('confirmarContraseña')}
              type="password"
            />
          </GroupInputs>
        </div>

        <ButtonAction
          className="w-full justify-center bg-primary-yellow hover:bg-black hover:text-primary-yellow disabled:bg-primary-yellow"
          disabled={loading}
        >
          {loading ? <MiniLoader /> : <>Confirmar</>}
        </ButtonAction>
      </form>
    </ContentForm>
  )
}
