import { create } from 'zustand'
import { StateStore } from '../types/StatesTypes'

import { getStatesRequest } from '../services/statesService'

const statesStore = create<StateStore>((set) => ({
  states: [],
  errorState: null,

  getStates: async () => {
    set({ errorState: null })

    try {
      const res = await getStatesRequest()
      const { states } = res

      set({ states, errorState: null })
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)

        set({
          states: [],
          errorState: message,
        })
      }
    }
  },
}))

export default statesStore
