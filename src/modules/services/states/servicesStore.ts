import { create } from 'zustand'
import { ServiceStore } from '../types/ServicesTypes'
import {
  createServiceRequest,
  deleteServiceRequest,
  getServiceByIdRequest,
  getServicesByCreatorRequest,
  getServicesRequest,
  updateServiceRequest,
} from '../services/servicesService'
import { toast } from 'sonner'

const servicesStore = create<ServiceStore>((set, get) => ({
  services: [],
  currentService: null,
  loading: false,
  errorServices: null,
  totalPages: 0,
  currentPage: 1,
  totalServices: 0,
  servicesPerPage: 20,

  getServices: async ({ page, folio, incidente }) => {
    set({ loading: true, errorServices: null })

    try {
      const res = await getServicesRequest({ page, folio, incidente })
      const { services, totalPages, totalServices, servicesPerPage } = res

      set({
        services,
        totalPages,
        totalServices,
        servicesPerPage,
        loading: false,
      })
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)

        set({ services: [], loading: false, errorServices: message })
      }
    }
  },

  setCurrentPage: ({ page }) => set({ currentPage: page }),

  createService: async ({ input }) => {
    try {
      const res = await createServiceRequest({ input })
      const { message } = res

      toast.success(message)
      await servicesStore.getState().getServices({ page: 1 })
      return true
    } catch (error) {
      if (error instanceof Error) {
        const { message, errors } = JSON.parse(error.message)
        if (errors && Array.isArray(errors))
          errors.forEach((err) => toast.error(err.message))
        else toast.error(message)
      }

      return false
    }
  },

  deleteService: async ({ id }) => {
    try {
      const res = await deleteServiceRequest({ id })
      const { message } = res
      const currentServices = get().services

      set({
        services: currentServices.filter((service) => service.ser_id !== id),
      })
      toast.success(message)
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)
        toast.error(message)
      }
    }
  },

  getServiceById: async ({ id }) => {
    set({ loading: true, errorServices: null })

    try {
      const res = await getServiceByIdRequest({ id })
      const { service } = res

      set({ currentService: service, loading: false })
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)

        set({ currentService: null, loading: false, errorServices: message })
      }
    }
  },

  getServicesByCreator: async ({ id, limit }) => {
    set({ loading: true, errorServices: null })

    try {
      const res = await getServicesByCreatorRequest({ id, limit })
      const { services, totalServices } = res

      set({ services, totalServices, loading: false })
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)

        set({ services: [], loading: false, errorServices: message })
      }
    }
  },

  updateService: async ({ id, input }) => {
    try {
      const res = await updateServiceRequest({ id, input })
      const { message } = res

      toast.success(message)
      await servicesStore.getState().getServices({})
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)
        toast.error(message)
      }
    }
  },
}))

export default servicesStore
