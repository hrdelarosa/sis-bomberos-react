import { SubmitHandler, useForm } from 'react-hook-form'
import { RequestResetPassInput } from '../types/AuthTypes'
import { useNavigate } from 'react-router-dom'
import authStore from '../states/authStore'

export function useRequestPass() {
  const { register, handleSubmit } = useForm<RequestResetPassInput>()
  const { requestResetPass, loading } = authStore()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<RequestResetPassInput> = async (data) => {
    const success = await requestResetPass({ input: data })
    if (success) navigate('/reset-password')
  }

  return { register, handleSubmit, onSubmit, loading }
}
