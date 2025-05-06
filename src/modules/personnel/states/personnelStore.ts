import { create } from 'zustand'
import { PersonnelStore } from '../types/PersonnelTypes'
import {
  createPersonnelRequest,
  deletePersonnelRequest,
  getPersonnelByGuardRequest,
  getPersonnelByRankRequest,
  getPersonnelRequest,
  updatePersonnelRequest,
} from '../services/personnelService'
import { toast } from 'sonner'

const personnelStore = create<PersonnelStore>((set, get) => ({
  personnel: [],
  loading: false,
  errorPersonnel: null,

  getPersonnel: async () => {
    set({ loading: true, errorPersonnel: null })

    try {
      const res = await getPersonnelRequest()
      const { personnel } = res

      set({ personnel, loading: false, errorPersonnel: null })
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)

        set({
          personnel: [],
          loading: false,
          errorPersonnel: message,
        })
      }
    }
  },

  createPersonnel: async ({ input }) => {
    try {
      const res = await createPersonnelRequest({ input })
      const { message } = res

      toast.success(message)
      await personnelStore.getState().getPersonnel()
    } catch (error) {
      if (error instanceof Error) {
        const { message, errors } = JSON.parse(error.message)
        if (errors && Array.isArray(errors)) {
          errors.forEach((err) => toast.error(err.message))
        } else toast.error(message)
      }
    }
  },

  deletePersonnel: async ({ id }) => {
    try {
      const res = await deletePersonnelRequest({ id })
      const { message } = res
      const currentPersonnel = get().personnel

      set({
        personnel: currentPersonnel.filter((person) => person.per_id !== id),
      })
      toast.success(message)
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)
        toast.error(message)
      }
    }
  },

  updatePersonnel: async ({ id, input }) => {
    try {
      const res = await updatePersonnelRequest({ id, input })
      const { message } = res

      toast.success(message)
      await personnelStore.getState().getPersonnel()
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)
        toast.error(message)
      }
    }
  },

  getPersonnelByRank: async ({ id }) => {
    set({ personnel: [], loading: true, errorPersonnel: null })

    try {
      const res = await getPersonnelByRankRequest({ id })
      const { personnel } = res

      set({ personnel, loading: false, errorPersonnel: null })
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)

        set({
          personnel: [],
          loading: false,
          errorPersonnel: message,
        })
      }
    }
  },

  getPersonnelByGuard: async ({ id }) => {
    set({ personnel: [], loading: true, errorPersonnel: null })

    try {
      const res = await getPersonnelByGuardRequest({ id })
      const { personnel } = res

      set({ personnel, loading: false, errorPersonnel: null })
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)

        set({
          personnel: [],
          loading: false,
          errorPersonnel: message,
        })
      }
    }
  },
}))

export default personnelStore
