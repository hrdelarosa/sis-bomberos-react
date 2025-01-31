import { create } from 'zustand'
import {
  getAllGuardiasRequest,
  deleteGuardiasByIdRequest,
  createGuardiasRequest,
} from '../services/guards'
import { toast } from 'sonner'

const useGuardsStore = create((set, get) => ({
  guards: [],
  loading: true,
  error: null,
  upgrade: false,

  getAllguards: async () => {
    try {
      const res = await getAllGuardiasRequest()
      const { data } = res

      set({ guards: data, loading: false })
    } catch (error) {
      if (error instanceof Error) set({ error: error.message })
    }
  },

  deleteStationById: async ({ id }) => {
    try {
      const res = await deleteGuardiasByIdRequest({ id })
      const currerntguards = get().guards

      if (res.status === 204) {
        set({
          guards: currerntguards.filter((guard) => guard.id !== id),
        })
        toast.success('Se ha eliminado la estación')
      }
    } catch (error) {
      if (error instanceof Error) set({ error: error.message })
    }
  },

  createguards: async ({ input }) => {
    try {
      const res = await createGuardiasRequest({ input })
      const { message, data } = res
      const currentUpgrade = get().upgrade

      toast.success(`${message}. Estación: ${data.estacion}`)
      set({ upgrade: !currentUpgrade })
    } catch (error) {
      if (error instanceof Error) {
        set({ error: error.message })
        if (error.message === 'Esta estación ya esta creada')
          toast.error(error.message, { duration: 3000 })
      }
    }
  },
}))

export default useGuardsStore
