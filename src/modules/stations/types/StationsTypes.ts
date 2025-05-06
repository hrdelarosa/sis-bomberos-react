export interface Station {
  et_id: number
  et_nombre: string
  et_ubicacion: string
  est_id_et: number
  est_nombre: string
}

export interface StationStore {
  stations: Station[]
  loading: boolean
  errorStations: string | null
  getStations: () => Promise<void>
  createStation: ({ input }: { input: CreateStationInputs }) => Promise<void>
  deleteStation: ({ id }: { id: number }) => Promise<void>
  updateStation: ({
    id,
    input,
  }: {
    id: number
    input: UpdateStationInputs
  }) => Promise<void>
}

export interface UpdateStationInputs {
  estado: number
}

export interface CreateStationInputs {
  nombre: string
  ubicacion: string
}
