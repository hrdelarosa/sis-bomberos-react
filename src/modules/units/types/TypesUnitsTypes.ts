export interface TypeUnit {
  tu_id: number
  tu_nombre: string
  est_id_tu: number
  est_nombre: string
}

export interface TypeStore {
  types: TypeUnit[]
  loading: boolean
  errorTypes: string | null
  getTypeUnits: () => Promise<void>
  createTypeUnit: ({ input }: { input: CreateTypeInputs }) => Promise<void>
  deleteTypeUnit: ({ id }: { id: number }) => Promise<void>
  updateTypeUnit: ({
    id,
    input,
  }: {
    id: number
    input: UpdateTypeInputs
  }) => Promise<void>
}

export interface TypeUnitWithStats extends TypeUnit {
  totalUnits: number
  activeUnits: number
  activePercentage: number
}

export interface UpdateTypeInputs {
  estado: number
}

export interface CreateTypeInputs {
  nombre: string
}
