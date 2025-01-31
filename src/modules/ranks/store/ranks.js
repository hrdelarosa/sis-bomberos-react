import { create } from 'zustand'
import {
  getRanksRequest,
  deleteRankRequest,
  createRankRequest,
} from '../services/ranks'
import { toast } from 'sonner'

const useRanksStore = create((set, get) => ({
  ranks: [],
  loading: true,
  error: null,
  upgrade: false,

  getAllRanks: async () => {
    try {
      const res = await getRanksRequest()
      const { data } = res

      set({ ranks: data, loading: false })
    } catch (error) {
      console.log(error.message)
      if (error instanceof Error) set({ error: error.message })
    }
  },

  deleteRankById: async ({ id }) => {
    try {
      const res = await deleteRankRequest({ id })
      const currerntRanks = get().ranks

      if (res.status === 204) {
        set({ ranks: currerntRanks.filter((rank) => rank.id !== id) })
        toast.success('Se ha eliminado el rango')
      }
    } catch (error) {
      if (error instanceof Error) {
        set({ error: error.message })
        toast.error(error.message, { duration: 3000 })
      }
    }
  },

  createRanks: async ({ input }) => {
    try {
      const res = await createRankRequest({ input })
      const { message, data } = res
      const currentUpgrade = get().upgrade

      toast.success(`${message}. Rango: ${data.rango}`)
      set({ upgrade: !currentUpgrade })
    } catch (error) {
      if (error instanceof Error) set({ error: error.message })
    }
  },
}))

export default useRanksStore
