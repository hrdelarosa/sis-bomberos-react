import { create } from 'zustand'
import { AuthStore } from '../types/AuthTypes'
import {
  loginRequest,
  logoutRequest,
  registerRequest,
  requestPasswordResetRequest,
  resendVerifyEmailRequest,
  resetPasswordRequest,
  verifyEmailRequest,
  verifyTokenRequest,
} from '../services/authService'
import { toast } from 'sonner'

const authStore = create<AuthStore>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
  errorUser: null,

  registerUser: async ({ input }) => {
    set({ loading: true, errorUser: null })

    try {
      const res = await registerRequest({ input })
      const { message } = res

      toast.success(message)
      set({ loading: false, errorUser: null })
    } catch (error) {
      if (error instanceof Error) {
        const { message, errors } = JSON.parse(error.message)
        if (errors && Array.isArray(errors)) {
          errors.reverse().forEach((err) => toast.error(err.message))
        } else toast.error(message)

        set({ loading: false, errorUser: message })
      }
    }
  },

  login: async ({ input }) => {
    set({ loading: true, errorUser: null, token: null })

    try {
      const res = await loginRequest({ input })
      const { message, user, token } = res

      toast.success(message)
      set({ user, token, isAuthenticated: true, loading: false })
    } catch (error) {
      set({ loading: false })

      if (error instanceof Error) {
        const { message, errors } = JSON.parse(error.message)
        if (errors && Array.isArray(errors)) {
          errors.reverse().forEach((err) => toast.error(err.message))
        } else toast.error(message)

        set({
          token: null,
          isAuthenticated: false,
          loading: false,
          errorUser: message,
        })
      }
    }
  },

  verifyToken: async () => {
    set({ isAuthenticated: false, token: null, loading: true, errorUser: null })

    try {
      const res = await verifyTokenRequest()
      const { user } = res

      set({ user, isAuthenticated: true, loading: false, errorUser: null })
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)

        set({ isAuthenticated: false, loading: false, errorUser: message })
      }
    }
  },

  logout: async () => {
    set({ loading: true, errorUser: null })

    try {
      const res = await logoutRequest()
      const { message } = res

      toast.success(message)
      set({
        user: null,
        isAuthenticated: false,
        token: null,
        loading: false,
      })
    } catch (error) {
      set({ loading: false })

      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)
        toast.error(message)

        set({ errorUser: message })
      }
    }
  },

  verifyEmail: async ({ input }) => {
    set({ errorUser: null })

    try {
      const res = await verifyEmailRequest({ input })
      const { message } = res

      toast.success(message)
      return true
    } catch (error) {
      set({ loading: false })

      if (error instanceof Error) {
        const { message, errors } = JSON.parse(error.message)

        if (errors && Array.isArray(errors)) {
          errors.reverse().forEach((err) => toast.error(err.message))
        } else toast.error(message)

        set({ errorUser: message })
      }
      return false
    }
  },

  resendVerify: async ({ input }) => {
    set({ loading: true, errorUser: null })

    try {
      const res = await resendVerifyEmailRequest({ input })
      const { message } = res

      toast.success(message)
      set({ loading: false, errorUser: null })
      return true
    } catch (error) {
      if (error instanceof Error) {
        const { message, errors } = JSON.parse(error.message)

        if (errors && Array.isArray(errors)) {
          errors.reverse().forEach((err) => toast.error(err.message))
        } else toast.error(message)

        set({ loading: false, errorUser: message })
      }
      return false
    }
  },

  requestResetPass: async ({ input }) => {
    set({ loading: true, errorUser: null })

    try {
      const res = await requestPasswordResetRequest({ input })
      const { message } = res

      toast.success(message)
      set({ loading: false, errorUser: null })
      return true
    } catch (error) {
      if (error instanceof Error) {
        const { message, errors } = JSON.parse(error.message)

        if (errors && Array.isArray(errors)) {
          errors.reverse().forEach((err) => toast.error(err.message))
        } else toast.error(message)

        set({ loading: false, errorUser: message })
      }
      return false
    }
  },

  resetPass: async ({ input }) => {
    set({ loading: true, errorUser: null })

    try {
      const res = await resetPasswordRequest({ input })
      const { message } = res

      toast.success(message)
      set({ loading: false, errorUser: null })
      return true
    } catch (error) {
      if (error instanceof Error) {
        const { message, errors } = JSON.parse(error.message)

        if (errors && Array.isArray(errors)) {
          errors.reverse().forEach((err) => toast.error(err.message))
        } else toast.error(message)

        set({ loading: false, errorUser: message })
      }
      return false
    }
  },
}))

export default authStore
