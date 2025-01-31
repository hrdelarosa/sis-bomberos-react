import { create } from 'zustand'
import {
  getAllStationsRequest,
  deleteStationsByIdRequest,
  createStationsRequest,
} from '../services/stations'
import { toast } from 'sonner'

const useStationsStore = create((set, get) => ({
  stations: [],
  loading: true,
  error: null,
  upgrade: false,

  getAllStations: async () => {
    try {
      const res = await getAllStationsRequest()
      const { data } = res

      set({ stations: data, loading: false })
    } catch (error) {
      if (error instanceof Error) set({ error: error.message })
    }
  },

  deleteStationById: async ({ id }) => {
    try {
      const res = await deleteStationsByIdRequest({ id })
      const currerntStations = get().stations

      if (res.status === 204) {
        set({
          stations: currerntStations.filter((station) => station.id !== id),
        })
        toast.success('Se ha eliminado la estación')
      }
    } catch (error) {
      if (error instanceof Error) set({ error: error.message })
    }
  },

  createStations: async ({ input }) => {
    try {
      const res = await createStationsRequest({ input })
      const { message, data } = res
      const currentUpgrade = get().upgrade

      toast.success(`${message}. Estación: ${data.estacion}`)
      set({ upgrade: !currentUpgrade })
    } catch (error) {
      if (error instanceof Error) {
        set({ error: error.message })
        if (error.message === 'Esta estación ya esta creada')
          toast.error(error.message, { duration: 3000 })
      }
    }
  },
}))

export default useStationsStore
