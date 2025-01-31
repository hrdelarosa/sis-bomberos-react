import { create } from 'zustand'
import {
  deleteServicesByIdRequest,
  getServicesByIdRequest,
  getServicesRequest,
  createServiceRequest,
  getServicesByCreatorRequest,
} from '../services/services'
import { toast } from 'sonner'

const useServicesStore = create((set, get) => ({
  services: [],
  serviceId: null,
  loading: true,
  error: null,

  getAllServices: async () => {
    try {
      const res = await getServicesRequest()
      const { data } = res

      set({ services: data, loading: false })
    } catch (error) {
      if (error instanceof Error) set({ error: error.message })
    }
  },

  deleteServiceById: async ({ id }) => {
    try {
      const res = await deleteServicesByIdRequest({ id })
      const currernService = get().services

      if (res.status === 204)
        set({ services: currernService.filter((service) => service.id !== id) })
    } catch (error) {
      if (error instanceof Error) {
        console.log(error)
        set({ error: error.message })
      }
    }
  },

  getServiceById: async ({ id }) => {
    try {
      const res = await getServicesByIdRequest({ id })
      const { data } = res

      set({ serviceId: data, loading: false })
    } catch (error) {
      if (error instanceof Error) set({ error: error.message })
    }
  },

  getServiceByCreator: async ({ id }) => {
    try {
      const res = await getServicesByCreatorRequest({ id })
      const { data } = res

      set({ services: data })
    } catch (error) {
      if (error instanceof Error) set({ error: error.message })
    }
  },

  createService: async ({ input }) => {
    try {
      const res = await createServiceRequest({ input })
      const { message } = res

      toast.success(message)
    } catch (error) {
      if (error instanceof Error) set({ error: error.message })
    }
  },
}))

export default useServicesStore
