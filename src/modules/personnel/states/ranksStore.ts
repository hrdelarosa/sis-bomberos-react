import { create } from 'zustand'
import { RankStore } from '../types/RanksTypes'
import {
  createRankRequest,
  deleteRankRequest,
  getRanksRequest,
  updateRankRequest,
} from '../services/ranksService'
import { toast } from 'sonner'

const ranksStore = create<RankStore>((set, get) => ({
  ranks: [],
  loading: false,
  errorRanks: null,

  getRanks: async () => {
    set({ loading: true, errorRanks: null })

    try {
      const res = await getRanksRequest()
      const { ranks } = res

      set({ ranks, loading: false, errorRanks: null })
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)

        set({
          ranks: [],
          loading: false,
          errorRanks: message,
        })
      }
    }
  },

  createRank: async ({ input }) => {
    try {
      const res = await createRankRequest({ input })
      const { message } = res

      toast.success(message)
      await ranksStore.getState().getRanks()
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)
        toast.error(message)
      }
    }
  },

  deleteRank: async ({ id }) => {
    try {
      const res = await deleteRankRequest({ id })
      const { message } = res
      const currentRanks = get().ranks

      set({ ranks: currentRanks.filter((rank) => rank.ran_id !== id) })
      toast.success(message)
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)
        toast.error(message)
      }
    }
  },

  updateRank: async ({ id, input }) => {
    try {
      const res = await updateRankRequest({ id, input })
      const { message } = res

      toast.success(message)
      await ranksStore.getState().getRanks()
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)
        toast.error(message)
      }
    }
  },
}))

export default ranksStore
