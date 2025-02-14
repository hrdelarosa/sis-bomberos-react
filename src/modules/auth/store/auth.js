import { create } from 'zustand'
import { toast } from 'sonner'
import Cookies from 'js-cookie'
import {
  registerRequest,
  loginRequest,
  verifyTokenRequest,
  getProfileRequest,
  verifyEmailRequest,
  resendVerifyEmailRequest,
  requestResetPassword,
  resetPassRequest,
} from '../services/auth'

const useAuthStore = create((set) => ({
  user: null,
  profile: null,
  token: Cookies.get('token') || null,
  isAuthenticated: !!Cookies.get('token'),
  loading: true,
  loadingFetch: false,
  error: [],

  signup: async (input) => {
    try {
      set({ loadingFetch: true })
      const res = await registerRequest(input)
      const { message } = res

      if (message) {
        set({ loadingFetch: false })
        toast.message(
          message,
          { description: 'Pendiente a la validación de su cuenta' },
          { duration: 5000 }
        )
      }
    } catch (error) {
      if (error instanceof Error) {
        set({ loadingFetch: false, error: [error.message] })
        setTimeout(() => set({ error: [] }), 5000)
      }
    }
  },

  login: async (input) => {
    try {
      const res = await loginRequest(input)
      const { data } = res

      set({ user: data, isAuthenticated: true, error: [] })
    } catch (error) {
      console.log(error)
      if (error) {
        if (
          error.message ===
          'Tu cuenta está pendiente de validación por un administrador'
        )
          toast.warning(
            'Tu cuenta está pendiente de validación por un administrador'
          )
        else {
          set({ error: [error.message] })
          setTimeout(() => set({ error: [] }), 5000)
        }
      }
    }
  },

  checkLogin: async () => {
    const token = Cookies.get('token')

    if (!token) {
      set({ isAuthenticated: false, loading: false })
      return
    }

    try {
      const res = await verifyTokenRequest()
      const { data } = res

      set({ isAuthenticated: true, user: data, loading: false, error: [] })
    } catch (error) {
      if (error instanceof Error) set({ error: [error.message] })
    }
  },

  logout: () => {
    Cookies.remove('token')
    set({ user: null, isAuthenticated: false, error: [] })
  },

  getProfile: async ({ id }) => {
    try {
      const res = await getProfileRequest({ id })
      const { data } = res

      set({ profile: data, loading: false })
    } catch (error) {
      if (error instanceof Error) set({ error: [error.message] })
    }
  },

  verifyEmail: async ({ token }) => {
    try {
      const res = await verifyEmailRequest({ token })
      const { message } = res

      toast.success(message, { duration: 5000 })
    } catch (error) {
      if (error instanceof Error) set({ error: [error.message] })
    }
  },

  resendVerifyEmail: async ({ input }) => {
    try {
      const res = await resendVerifyEmailRequest({ input })
      const { message } = res

      toast.success(message, { duration: 5000 })
    } catch (error) {
      if (error instanceof Error) toast.error(error.message)
    }
  },

  requestResetPassword: async ({ input, onSuccess }) => {
    try {
      set({ loadingFetch: true })
      const res = await requestResetPassword({ input })
      const { message } = res

      if (message) {
        set({ loadingFetch: false })
        toast.success(message, { duration: 3000 })
        set({ error: [] })
      }
      if (onSuccess) onSuccess()
    } catch (error) {
      if (error instanceof Error) {
        set({ loadingFetch: false })
        const { message, errors } = JSON.parse(error.message)
        if (errors) {
          errors.forEach((err) => toast.error(err.message))
        } else {
          toast.error(message)
        }
      }
    }
  },

  resetPass: async ({ input, onSuccess }) => {
    try {
      set({ loadingFetch: true })
      const res = await resetPassRequest({ input })
      const { message } = res

      if (message) {
        toast.success(message, { duration: 3000 })
        set({ loadingFetch: false })
      }
      if (onSuccess) onSuccess()
    } catch (error) {
      if (error instanceof Error) {
        set({ loadingFetch: false })
        const { errors, isValidationError } = JSON.parse(error.message)
        const errorMessages = errors.map((err) => err.message)

        if (isValidationError) set({ error: errorMessages })
        else toast.error(errorMessages.join(', '))
        setTimeout(() => set({ error: [] }), 5000)
      }
    }
  },

  clearErrors: () => set({ error: [] }),
}))

export default useAuthStore
