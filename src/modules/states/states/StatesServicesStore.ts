import { create } from 'zustand'
import { StateServiceStore } from '../types/StatesServicesTypes'
import { getStatesServiceRequest } from '../services/statesServicesService'

const statesServicesStore = create<StateServiceStore>((set) => ({
  statesServices: [],
  errorStateServices: null,

  getStatesServices: async () => {
    set({ errorStateServices: null })

    try {
      const res = await getStatesServiceRequest()
      const { statesServices } = res

      set({ statesServices, errorStateServices: null })
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)

        set({ statesServices: [], errorStateServices: message })
      }
    }
  },
}))

export default statesServicesStore
