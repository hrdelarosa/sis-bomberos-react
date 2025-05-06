export interface Unit {
  uni_id: number
  tu_id_uni: number
  tu_nombre: string
  uni_numero: string
  est_id_uni: number
  est_nombre: string
}

export interface UnitStore {
  units: Unit[]
  loading: boolean
  errorUnits: string | null
  getUnits: () => Promise<void>
  createUnit: ({ input }: { input: CreateUnitInputs }) => Promise<void>
  deleteUnit: ({ id }: { id: number }) => Promise<void>
  updateUnit: ({
    id,
    input,
  }: {
    id: number
    input: UpdateUnitInputs
  }) => Promise<void>
}

export interface UpdateUnitInputs {
  estado: number
}

export interface CreateUnitInputs {
  tipo: number
  numero: string
}
