import { create } from 'zustand'
import { toast } from 'sonner'
import {
  createPersonalRequest,
  deletePersonalRequest,
  getPersonalRequest,
  getPersonalGuardRequest,
  updatePersonalGuardRequest,
  getExcludePersonalGuardRequest,
} from '../services/personnel'

const usePersonalStore = create((set, get) => ({
  personal: [],
  personalGuard: [],
  loading: true,
  error: null,
  upgrade: false,

  createPersonnel: async ({ input }) => {
    try {
      const res = await createPersonalRequest({ input })
      const { message, data } = res
      const currentUpgrade = get().upgrade

      toast.message(message, {
        description: `Nombre: ${data.personal.nombre} \nN/P: ${data.personal.np}`,
      })
      set({ upgrade: !currentUpgrade })
    } catch (error) {
      if (error instanceof Error) set({ error: error.message })
    }
  },

  deletePersonnelById: async ({ id }) => {
    try {
      const res = await deletePersonalRequest({ id })
      const currernPersonal = get().personal

      if (res.status === 204) {
        set({
          personal: currernPersonal.filter((personal) => personal.id !== id),
        })
        toast.success('Se ha eliminado el personal')
      }
    } catch (error) {
      if (error instanceof Error) {
        set({ error: error.message })
      }
    }
  },

  getAllPersonal: async () => {
    try {
      const res = await getPersonalRequest()
      const { data } = res

      set({ personal: data, loading: false })
    } catch (error) {
      if (error instanceof Error) set({ error: error.message })
    }
  },

  getAllPersonalGuard: async ({ id }) => {
    try {
      const res = await getPersonalGuardRequest({ id })
      const { data } = res

      set({ personalGuard: data, loading: false })
    } catch (error) {
      if (error instanceof Error) set({ error: error.message })
    }
  },

  getExcludePersonalGuard: async ({ id }) => {
    try {
      const res = await getExcludePersonalGuardRequest({ id })
      const { data } = res

      set({ personal: data, loading: false })
    } catch (error) {
      if (error instanceof Error) set({ error: error.message })
    }
  },

  updatePersGuard: async ({ id, input }) => {
    try {
      const res = await updatePersonalGuardRequest({ id, input })
      const currentUpgrade = get().upgrade

      if (res.status === 204)
        toast.success('Se ha actualizado la guardia correctamente', {
          duration: 3000,
        })
      set({ upgrade: !currentUpgrade })
    } catch (error) {
      if (error instanceof Error) set({ error: error.message })
    }
  },
}))

export default usePersonalStore
