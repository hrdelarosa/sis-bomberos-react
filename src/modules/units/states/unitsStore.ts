import { create } from 'zustand'
import { UnitStore } from '../types/UnitsTypes'

import { getUnitsRequest } from '../services/unitsService'
import { getTypesUnitRequest } from '../services/typesService'

const unitsStore = create<UnitStore>((set) => ({
  units: [],
  types: [],
  loading: false,
  loadingTypes: false,
  error: null,
  errorTypes: null,

  getUnits: async () => {
    set({ loading: true, error: null })

    try {
      const res = await getUnitsRequest()
      const { units } = res

      set({ units, loading: false, error: null })
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)

        set({
          units: [],
          loading: false,
          error: message,
        })
      }
    }
  },

  getTypeUnits: async () => {
    set({ loadingTypes: true, errorTypes: null })

    try {
      const res = await getTypesUnitRequest()
      const { types } = res

      set({ types, loadingTypes: false, errorTypes: null })
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)

        set({
          types: [],
          loadingTypes: false,
          errorTypes: message,
        })
      }
    }
  },
}))

export default unitsStore
