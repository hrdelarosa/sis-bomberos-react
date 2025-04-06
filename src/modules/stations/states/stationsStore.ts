import { create } from 'zustand'
import { StationStore } from '../types/StationsTypes'
import { getStationsRequest } from '../services/stationsService'

const stationsStore = create<StationStore>((set) => ({
  stations: [],
  loading: false,
  error: null,

  getStations: async () => {
    set({ loading: true, error: null })

    try {
      const res = await getStationsRequest()
      const { stations } = res

      set({ stations, loading: false, error: null })
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)

        set({
          stations: [],
          loading: false,
          error: message,
        })
      }
    }
  },
}))

export default stationsStore
