import { create } from 'zustand'
import { StationStore } from '../types/StationsTypes'
import {
  createStationRequest,
  deleteStationRequest,
  getStationsRequest,
  updateStationRequest,
} from '../services/stationsService'
import { toast } from 'sonner'

const stationsStore = create<StationStore>((set, get) => ({
  stations: [],
  loading: false,
  errorStations: null,

  getStations: async () => {
    set({ loading: true, errorStations: null })

    try {
      const res = await getStationsRequest()
      const { stations } = res

      set({ stations, loading: false, errorStations: null })
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)

        set({
          stations: [],
          loading: false,
          errorStations: message,
        })
      }
    }
  },

  createStation: async ({ input }) => {
    try {
      const res = await createStationRequest({ input })
      const { message } = res

      toast.success(message)
      await stationsStore.getState().getStations()
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)
        toast.error(message)
      }
    }
  },

  deleteStation: async ({ id }) => {
    try {
      const res = await deleteStationRequest({ id })
      const { message } = res
      const currentStations = get().stations

      set({
        stations: currentStations.filter((station) => station.et_id !== id),
      })
      toast.success(message)
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)
        toast.error(message)
      }
    }
  },

  updateStation: async ({ id, input }) => {
    try {
      const res = await updateStationRequest({ id, input })
      const { message } = res

      toast.success(message)
      await stationsStore.getState().getStations()
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)
        toast.error(message)
      }
    }
  },
}))

export default stationsStore
