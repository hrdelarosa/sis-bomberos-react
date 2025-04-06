import { create } from 'zustand'
import { GuardsStore } from '../types/GuardsTypes'
import { getGuardsUnitRequest } from '../services/guardsService'

const guardsStore = create<GuardsStore>((set) => ({
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
}))

export default guardsStore
