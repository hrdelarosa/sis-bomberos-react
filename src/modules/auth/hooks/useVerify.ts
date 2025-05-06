import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { VerifyEmailInput } from '../types/AuthTypes'
import { useModal } from '../../core/hooks/useModal'
import authStore from '../states/authStore'

export function useVerify() {
  const { register, handleSubmit } = useForm<VerifyEmailInput>()
  const { verifyEmail, loading, isAuthenticated } = authStore()
  const { isModalOpen, handleModalToggle, closeModal } = useModal()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<VerifyEmailInput> = async (data) => {
    const success = await verifyEmail({ input: data })
    if (success) navigate('/login')
  }

  useEffect(() => {
    if (isAuthenticated) navigate('/')
  }, [isAuthenticated, navigate])

  return {
    register,
    handleSubmit,
    onSubmit,
    loading,
    isModalOpen,
    handleModalToggle,
    closeModal,
  }
}
