import { create } from 'zustand'
import { toast } from 'sonner'
import {
  createTypeUnitRequest,
  createUnitRequest,
  deleteTypeUnitByIdRequest,
  deleteUnitByIdRequest,
  geAlltUnitsRequest,
  getAllTypeUnitsRequest,
  updateUnitRequest,
} from '../services/units'

const useUnitsStore = create((set, get) => ({
  units: [],
  types: [],
  loading: true,
  error: null,
  upgrade: false,

  getAllUnits: async () => {
    try {
      const res = await geAlltUnitsRequest()
      const { data } = res

      set({ units: data, loading: false })
    } catch (error) {
      if (error instanceof Error) set({ error: error.message })
    }
  },

  deleteUnitById: async ({ id }) => {
    try {
      const res = await deleteUnitByIdRequest({ id })
      const currerntUnits = get().units

      if (res.status === 204) {
        set({ units: currerntUnits.filter((unit) => unit.id !== id) })
        toast.success('Se ha eliminado la unidad')
      }
    } catch (error) {
      if (error instanceof Error) set({ error: error.message })
    }
  },

  createUnit: async ({ input }) => {
    try {
      const res = await createUnitRequest({ input })
      const { message, data } = res
      const currentUpgrade = get().upgrade

      toast.success(`${message}. Numero: ${data.unidad}`)
      set({ upgrade: !currentUpgrade })
    } catch (error) {
      if (error instanceof Error) set({ error: error.message })
    }
  },

  updateUnit: async ({ id, input }) => {
    try {
      const res = await updateUnitRequest({ id, input })
      const currentUpgrade = get().upgrade

      if (res.status === 204)
        toast.success('Se ha actualizado la unidad', { duration: 3000 })
      set({ upgrade: !currentUpgrade })
    } catch (error) {
      if (error instanceof Error) set({ error: error.message })
    }
  },
  // Types units
  getAllTypesU: async () => {
    try {
      const res = await getAllTypeUnitsRequest()
      const { data } = res

      set({ types: data, loading: false })
    } catch (error) {
      if (error instanceof Error) set({ error: error.message })
    }
  },

  deleteTypeUById: async ({ id }) => {
    try {
      const res = await deleteTypeUnitByIdRequest({ id })
      const currerntTypes = get().types

      if (res.status === 204) {
        set({ types: currerntTypes.filter((type) => type.id !== id) })
        toast.success('Se ha eliminado el tipo de unidad')
      }
    } catch (error) {
      if (error instanceof Error) set({ error: error.message })
    }
  },

  createTypeU: async ({ input }) => {
    try {
      const res = await createTypeUnitRequest({ input })
      const { message, data } = res
      const currentUpgrade = get().upgrade

      toast.success(`${message}. Tipo: ${data.nombre}`)
      set({ upgrade: !currentUpgrade })
    } catch (error) {
      if (error instanceof Error) {
        set({ error: error.message })
        if (error.message === 'El tipo de unidad ya existe')
          toast.error(error.message, { duration: 3000 })
      }
    }
  },
}))

export default useUnitsStore
