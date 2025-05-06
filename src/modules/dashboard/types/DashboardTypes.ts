interface IncidentesPorcentajes {
  ser_incidente: string
  total: number
  porcentaje: string
}

interface PerIncident {
  incidente: string
  cantidad: number
}
interface Summary {
  total: number
  perIncident: PerIncident[]
}

interface ServicesMonthly {
  currentMonth: number
  previousMonth: number
  porcentaje: number
}

interface MostMonth {
  incidente: string
  cantidad: number
}
interface perIncidentMonthly {
  mostCurrentMonth: MostMonth
  mostPreviousMonth: MostMonth
  porcentaje: number
}

interface TypesPorcentaje {
  tipo: string
  cantidad: number
  porcentaje: string
}

interface StatusUnits {
  tipo: string
  total: number
  activas: string
}

interface TimesServices {
  averageResponseTime: { tiempo_respuesta: string }
  averageControlTime: { tiempo_control: string }
  overallAverageTime: { tiempo_total: string }
}

export interface DashboardStore {
  loading: boolean
  error: string | null
  incidentesPorcentajes: IncidentesPorcentajes[]
  summary: Summary
  servicesMonthly: ServicesMonthly
  perIncidentMonthly: perIncidentMonthly
  typesPorcentaje: TypesPorcentaje[]
  statusUnits: StatusUnits[]
  timesServices: TimesServices
  getPorcentajeIncidentes: () => Promise<void>
  getSummaryIncident: () => Promise<void>
  getServicesMonthly: () => Promise<void>
  getIncidentMonthly: () => Promise<void>
  getTypesPorcentaje: () => Promise<void>
  getUnitStatus: () => Promise<void>
  getResponseServices: () => Promise<void>
}
