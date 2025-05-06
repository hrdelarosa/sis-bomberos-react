export interface Rank {
  ran_id: number
  ran_nombre: string
  est_id_ran: number
  est_nombre: string
}

export interface RankStore {
  ranks: Rank[]
  loading: boolean
  errorRanks: string | null
  getRanks: () => Promise<void>
  createRank: ({ input }: { input: CreateRankInputs }) => Promise<void>
  deleteRank: ({ id }: { id: number }) => Promise<void>
  updateRank: ({
    id,
    input,
  }: {
    id: number
    input: UpdateRankInputs
  }) => Promise<void>
}

export interface RankWithStats extends Rank {
  totalRanks: number
  activeRanks: number
  activePercentage: number
}

export interface UpdateRankInputs {
  estado: number
}

export interface CreateRankInputs {
  nombre: string
}
