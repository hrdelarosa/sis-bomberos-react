export interface Unit {
  uni_id: number
  tu_id_uni: number
  tu_nombre: string
  uni_numero: string
  est_id_uni: number
  est_nombre: string
}

export interface TypeUnit {
  tu_id: number
  tu_nombre: string
  est_id_tu: number
  est_nombre: string
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

export interface TypeUnitWithStats extends TypeUnit {
  totalUnits: number
  activeUnits: number
  activePercentage: number
}

export interface UpdateUnitInputs {
  estado: number
}

export interface CreateUnitInputs {
  tipo: number
  numero: string
}

export interface CreateTypeInputs {
  nombre: string
}
