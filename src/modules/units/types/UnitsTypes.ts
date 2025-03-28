export interface Unit {
  id: string
  tu_id_uni: string
  uni_numero: string
  est_id_uni: string
}

export interface TypeUnit {
  id: string
  tu_nombre: string
  est_id_tu: string
}

export interface UnitStore {
  units: Unit[]
  types: TypeUnit[]
  loading: boolean
  loadingTypes: boolean
  error: string | null
  errorTypes: string | null
  getUnits: () => Promise<void>
  getTypeUnits: () => Promise<void>
}

export interface UnitsByType {
  type: string
  total: number
  active: number
  activePercentage: number
  state: string
}
