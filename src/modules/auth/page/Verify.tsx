import { useVerify } from '../hooks/useVerify'

import ContentForm from '../components/ContentForm'
import Input from '../../core/components/ui/Input'
import ButtonAction from '../../core/components/ui/ButtonAction'
import MiniLoader from '../../core/components/ui/MiniLoader'
import ResendVerificationCode from '../components/ResendVerificationCode'

export default function Verify() {
  const {
    register,
    handleSubmit,
    onSubmit,
    loading,
    isModalOpen,
    handleModalToggle,
    closeModal,
  } = useVerify()

  return (
    <ContentForm auth="verify">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <Input
          label="Código"
          autoFocus
          {...register('token')}
          placeholder="Ejem: 482736"
        />

        <div className="flex flex-col gap-6">
          <ButtonAction
            className="w-full justify-center bg-primary-yellow hover:bg-black hover:text-primary-yellow disabled:bg-primary-yellow"
            disabled={loading}
          >
            {loading ? <MiniLoader /> : <>Verificar</>}
          </ButtonAction>

          <div className="text-center text-sm">
            <hr className="bg-slate-200 border-0 w-full h-px mb-4" />
            ¿No has recibido ningún código?{' '}
            <button
              type="button"
              onClick={() => handleModalToggle('edit')}
              className="cursor-pointer hover:underline underline-offset-4"
            >
              Reenviar código
            </button>
          </div>
        </div>
      </form>

      <ResendVerificationCode
        isModalOpen={isModalOpen !== null}
        closeModal={closeModal}
      />
    </ContentForm>
  )
}
