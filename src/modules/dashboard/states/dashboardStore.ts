import { create } from 'zustand'
import { DashboardStore } from '../types/DashboardTypes'
import {
  getIncidentMonthly,
  getPorcentajeIncidentes,
  getResponseServices,
  getServicesMonthly,
  getSummaryIncident,
  getTypesPorcentaje,
  getUnitStatus,
} from '../services/dashboardService'

const dashboardStore = create<DashboardStore>((set) => ({
  loading: true,
  error: null,
  incidentesPorcentajes: [],
  summary: {
    total: 0,
    perIncident: [],
  },
  servicesMonthly: {
    currentMonth: 0,
    previousMonth: 0,
    porcentaje: 0,
  },
  perIncidentMonthly: {
    mostCurrentMonth: { incidente: '', cantidad: 0 },
    mostPreviousMonth: { incidente: '', cantidad: 0 },
    porcentaje: 0,
  },
  typesPorcentaje: [],
  statusUnits: [],
  timesServices: {
    averageResponseTime: { tiempo_respuesta: '' },
    averageControlTime: { tiempo_control: '' },
    overallAverageTime: { tiempo_total: '' },
  },

  getPorcentajeIncidentes: async () => {
    set({ loading: true, error: null })

    try {
      const res = await getPorcentajeIncidentes()
      const { incidentesPorcentajes } = res

      set({ incidentesPorcentajes, loading: false, error: null })
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)

        set({ loading: false, error: message })
      }
    }
  },

  getSummaryIncident: async () => {
    set({ loading: true, error: null })

    try {
      const res = await getSummaryIncident()
      const { summary } = res

      set({ summary, loading: false, error: null })
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)

        set({ loading: false, error: message })
      }
    }
  },

  getServicesMonthly: async () => {
    set({ loading: true, error: null })

    try {
      const res = await getServicesMonthly()
      const { servicesMonthly } = res

      set({ servicesMonthly, loading: false, error: null })
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)

        set({ loading: false, error: message })
      }
    }
  },

  getIncidentMonthly: async () => {
    set({ loading: true, error: null })

    try {
      const res = await getIncidentMonthly()
      const { perIncidentMonthly } = res

      set({ perIncidentMonthly, loading: false, error: null })
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)

        set({ loading: false, error: message })
      }
    }
  },
  getTypesPorcentaje: async () => {
    set({ loading: true, error: null })

    try {
      const res = await getTypesPorcentaje()
      const { typesPorcentaje } = res

      set({ typesPorcentaje, loading: false, error: null })
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)

        set({ loading: false, error: message })
      }
    }
  },

  getUnitStatus: async () => {
    set({ loading: true, error: null })

    try {
      const res = await getUnitStatus()
      const { statusUnits } = res

      set({ statusUnits, loading: false, error: null })
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)

        set({ loading: false, error: message })
      }
    }
  },

  getResponseServices: async () => {
    set({ loading: true, error: null })

    try {
      const res = await getResponseServices()
      const { timesServices } = res

      set({ timesServices, loading: false, error: null })
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)

        set({ loading: false, error: message })
      }
    }
  },
}))

export default dashboardStore
