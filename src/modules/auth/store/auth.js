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
} from '../services/auth'

const useAuthStore = create((set) => ({
  user: null,
  profile: null,
  token: Cookies.get('token') || null,
  isAuthenticated: !!Cookies.get('token'),
  loading: true,
  loadingSingup: false,
  error: [],

  signup: async (input) => {
    set({ loadingSingup: true })
    try {
      const res = await registerRequest(input)
      const { message } = res

      if (message) {
        set({ loadingSingup: false })
        toast.message(
          message,
          { description: 'Pendiente a la validación de su cuenta' },
          { duration: 5000 }
        )
      }
    } catch (error) {
      if (error instanceof Error) {
        set({ error: [error.message] })
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
      console.log(res)
      const { message } = res

      toast.success(message, { duration: 5000 })
    } catch (error) {
      if (error instanceof Error) toast.error(error.message)
    }
  },

  clearErrors: () => set({ error: [] }),
}))

export default useAuthStore
