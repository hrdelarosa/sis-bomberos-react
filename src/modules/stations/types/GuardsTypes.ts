export interface Guard {
  id: string
  gu_nombre: string
  et_nombre: string
}

export interface GuardsStore {
  guards: Guard[]
  loading: boolean
  errorGuards: string | null
  getGuarda: () => Promise<void>
}
