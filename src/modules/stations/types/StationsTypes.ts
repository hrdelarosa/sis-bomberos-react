export interface Station {
  id: string
  et_nombre: string
  et_ubicacion: string
  est_id_et: string
}

export interface StationStore {
  stations: Station[]
  loading: boolean
  error: string | null
  getStations: () => Promise<void>
}
