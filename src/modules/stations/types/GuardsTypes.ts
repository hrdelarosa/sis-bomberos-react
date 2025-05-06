export interface Guard {
  gu_id: number
  gu_nombre: string
  et_id_gu: number
  et_nombre: string
}

export interface GuardsStore {
  guards: Guard[]
  loading: boolean
  errorGuards: string | null
  getGuarda: () => Promise<void>
  createGuard: ({ input }: { input: CreateGuardInputs }) => Promise<void>
  deleteGuard: ({ id }: { id: number }) => Promise<void>
  getGurdByStation: ({ id }: { id: number }) => Promise<void>
}

export interface CreateGuardInputs {
  nombre: string
  estacion: number
}
