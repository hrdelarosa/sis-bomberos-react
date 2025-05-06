import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import { LoginInputs } from '../types/AuthTypes'
import authStore from '../states/authStore'

export function useLogin() {
  const { register, handleSubmit } = useForm<LoginInputs>()
  const { login, isAuthenticated, loading } = authStore()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from || '/'

  const onSubmit: SubmitHandler<LoginInputs> = async (data) =>
    await login({ input: data })

  useEffect(() => {
    if (isAuthenticated) navigate(from)
  }, [isAuthenticated, navigate, from])

  return { register, handleSubmit, onSubmit, loading }
}
