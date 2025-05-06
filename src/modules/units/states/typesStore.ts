import { create } from 'zustand'
import { TypeStore } from '../types/TypesUnitsTypes'

import {
  createTypeUnitRequest,
  deleteTypeUnitRequest,
  getTypesUnitRequest,
  updateTypeUnitRequest,
} from '../services/typesService'
import { toast } from 'sonner'

const typesStore = create<TypeStore>((set, get) => ({
  types: [],
  loading: false,
  errorTypes: null,

  getTypeUnits: async () => {
    set({ loading: true, errorTypes: null })

    try {
      const res = await getTypesUnitRequest()
      const { types } = res

      set({ types, loading: false, errorTypes: null })
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)

        set({
          types: [],
          loading: false,
          errorTypes: message,
        })
      }
    }
  },

  createTypeUnit: async ({ input }) => {
    try {
      const res = await createTypeUnitRequest({ input })
      const { message } = res

      toast.success(message)
      await typesStore.getState().getTypeUnits()
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)
        toast.error(message)
      }
    }
  },

  deleteTypeUnit: async ({ id }) => {
    try {
      const res = await deleteTypeUnitRequest({ id })
      const { message } = res
      const currentTypes = get().types

      set({ types: currentTypes.filter((type) => type.tu_id !== id) })
      toast.success(message)
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)
        toast.error(message)
      }
    }
  },

  updateTypeUnit: async ({ id, input }) => {
    try {
      const res = await updateTypeUnitRequest({ id, input })
      const { message } = res

      toast.success(message)
      await typesStore.getState().getTypeUnits()
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)
        toast.error(message)
      }
    }
  },
}))

export default typesStore
