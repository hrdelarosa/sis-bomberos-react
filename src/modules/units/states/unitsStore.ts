import { create } from 'zustand'
import { UnitStore } from '../types/UnitsTypes'

import {
  createUnitRequest,
  deleteUnitRequest,
  getUnitsRequest,
  updateUnitRequest,
} from '../services/unitsService'
import { toast } from 'sonner'

const unitsStore = create<UnitStore>((set, get) => ({
  units: [],
  loading: false,
  errorUnits: null,

  getUnits: async () => {
    set({ loading: true, errorUnits: null })

    try {
      const res = await getUnitsRequest()
      const { units } = res

      set({ units, loading: false, errorUnits: null })
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)

        set({
          units: [],
          loading: false,
          errorUnits: message,
        })
      }
    }
  },

  createUnit: async ({ input }) => {
    try {
      const res = await createUnitRequest({ input })
      const { message } = res

      toast.success(message)
      await unitsStore.getState().getUnits()
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)
        toast.error(message)
      }
    }
  },

  deleteUnit: async ({ id }) => {
    try {
      const res = await deleteUnitRequest({ id })
      const { message } = res
      const currentUnits = get().units

      set({ units: currentUnits.filter((unit) => unit.uni_id !== id) })
      toast.success(message)
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)
        toast.error(message)
      }
    }
  },

  updateUnit: async ({ id, input }) => {
    try {
      const res = await updateUnitRequest({ id, input })
      const { message } = res

      toast.success(message)
      await unitsStore.getState().getUnits()
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)
        toast.error(message)
      }
    }
  },
}))

export default unitsStore
