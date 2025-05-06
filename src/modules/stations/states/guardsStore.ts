import { create } from 'zustand'
import { GuardsStore } from '../types/GuardsTypes'
import {
  createGuardRequest,
  deleteGuardRequest,
  getGuardByStationRequest,
  getGuardsUnitRequest,
} from '../services/guardsService'
import { toast } from 'sonner'

const guardsStore = create<GuardsStore>((set, get) => ({
  guards: [],
  loading: false,
  errorGuards: null,

  getGuarda: async () => {
    set({ loading: true, errorGuards: null })

    try {
      const res = await getGuardsUnitRequest()
      const { guards } = res

      set({ guards, loading: false, errorGuards: null })
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)

        set({
          guards: [],
          loading: false,
          errorGuards: message,
        })
      }
    }
  },

  createGuard: async ({ input }) => {
    try {
      const res = await createGuardRequest({ input })
      const { message } = res

      toast.success(message)
      await guardsStore.getState().getGuarda()
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)
        toast.error(message)
      }
    }
  },

  deleteGuard: async ({ id }) => {
    try {
      const res = await deleteGuardRequest({ id })
      const { message } = res
      const currentGuard = get().guards

      set({ guards: currentGuard.filter((guard) => guard.gu_id !== id) })
      toast.success(message)
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)
        toast.error(message)
      }
    }
  },

  getGurdByStation: async ({ id }) => {
    set({ guards: [], loading: true, errorGuards: null })

    try {
      const res = await getGuardByStationRequest({ id })
      const { guards } = res

      set({ guards, loading: false, errorGuards: null })
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)

        set({
          guards: [],
          loading: false,
          errorGuards: message,
        })
      }
    }
  },
}))

export default guardsStore
