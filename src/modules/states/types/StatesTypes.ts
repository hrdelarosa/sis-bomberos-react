export interface State {
  id: string
  est_nombre: string
  est_descripcion: string
}

export interface StateStore {
  states: State[]
  errorState: string | null
  getStates: () => Promise<void>
}
