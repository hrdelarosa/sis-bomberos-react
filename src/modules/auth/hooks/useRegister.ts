import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { RegisterInputs } from '../types/AuthTypes'
import authStore from '../states/authStore'

export function useRegister() {
  const { register, handleSubmit } = useForm<RegisterInputs>()
  const { registerUser, loading, errorUser } = authStore()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<RegisterInputs> = async (data) => {
    console.log(data)
    await registerUser({ input: data })
  }

  useEffect(() => {
    if (!errorUser && !loading) navigate('/verify-email')
  }, [errorUser, loading, navigate])

  return { register, handleSubmit, onSubmit, loading }
}
