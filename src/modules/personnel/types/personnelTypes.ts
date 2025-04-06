export interface Personnel {
  id: string
  per_nombres: string
  per_apellidos: string
  per_np: string
  ran_id_per: string
  per_base: string
  gu_id_per: string
  et_nombre: string
  per_diasEco: string
  per_vacaciones: string
  est_id_per: string
}

export interface Rank {
  id: string
  ran_nombre: string
  est_id_ran: string
}

export interface PersonnelStore {
  personnel: Personnel[]
  ranks: Rank[]
  loading: boolean
  loadingRanks: boolean
  error: string | null
  errorRanks: string | null
  getPersonnel: () => Promise<void>
  getRanks: () => Promise<void>
}

export interface PersonnelByRank {
  category: string
  total: number
  active: number
  activePercentage: number
  state: string
}

export enum SortBy {
  NONE = 'NONE',
  NAME = 'NAME',
  BASE = 'BASE',
  ESTACION = 'ESTACION',
}

export interface UseSortedPersonnelReturn {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
  handleChangeSort: (sort: SortBy) => void
  sortedPersonnel: Personnel[]
  setRankFilter: (value: string) => void
  setStateFilter: (value: string) => void
}

export type ChangeSort = UseSortedPersonnelReturn['handleChangeSort']

export interface UpdatePersonInputs {
  estado: string
  rango: string
  guardia: string
}
