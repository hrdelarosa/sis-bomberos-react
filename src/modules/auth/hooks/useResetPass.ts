import { SubmitHandler, useForm } from 'react-hook-form'
import { ResetPassInput } from '../types/AuthTypes'
import { useNavigate } from 'react-router-dom'
import authStore from '../states/authStore'

export function useResetPass() {
  const { register, handleSubmit } = useForm<ResetPassInput>()
  const { resetPass, loading } = authStore()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<ResetPassInput> = async (data) => {
    const success = await resetPass({ input: data })
    if (success) navigate('/login')
  }

  return { register, handleSubmit, onSubmit, loading }
}
