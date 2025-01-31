import { create } from 'zustand'
import { geAllStatesRequest } from '../services/states'

const useStatesStore = create((set) => ({
  states: [],
  loading: true,
  error: null,

  getAllStates: async () => {
    try {
      const res = await geAllStatesRequest()
      const { data } = res

      set({ states: data, loading: false })
    } catch (error) {
      if (error instanceof Error) set({ error: error.message })
    }
  },
}))

export default useStatesStore
