export interface StateService {
  estser_id: number
  estser_nombre: string
  estser_descripcion: string
}

export interface StateServiceStore {
  statesServices: StateService[]
  errorStateServices: string | null
  getStatesServices: () => Promise<void>
}
