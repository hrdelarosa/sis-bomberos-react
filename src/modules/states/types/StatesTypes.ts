export interface State {
  est_id: number
  est_nombre: string
  est_descripcion: string
}

export interface StateStore {
  states: State[]
  errorState: string | null
  getStates: () => Promise<void>
}
