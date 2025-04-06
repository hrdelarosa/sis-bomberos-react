import { create } from 'zustand'
import { PersonnelStore } from '../types/personnelTypes'
import { getPersonnelRequest } from '../services/personnelService'
import { getRanksRequest } from '../services/ranksService'

const personnelStore = create<PersonnelStore>((set) => ({
  personnel: [],
  ranks: [],
  loading: false,
  loadingRanks: false,
  error: null,
  errorRanks: null,

  getPersonnel: async () => {
    set({ loading: true, error: null })

    try {
      const res = await getPersonnelRequest()
      const { personnel } = res

      set({ personnel, loading: false, error: null })
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)

        set({
          personnel: [],
          loading: false,
          error: message,
        })
      }
    }
  },

  getRanks: async () => {
    set({ loadingRanks: true, error: null })

    try {
      const res = await getRanksRequest()
      const { ranks } = res

      set({ ranks, loadingRanks: false, errorRanks: null })
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)

        set({
          ranks: [],
          loadingRanks: false,
          errorRanks: message,
        })
      }
    }
  },
}))

export default personnelStore
