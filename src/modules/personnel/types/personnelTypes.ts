export interface Personnel {
  per_id: number
  per_nombres: string
  per_apellidos: string
  per_np: number
  ran_id_per: number
  ran_nombre: string
  per_base: string
  gu_id_per: number
  gu_nombre: string
  et_nombre: string
  per_diasEco: number
  per_vacaciones: number
  est_id_per: number
  est_nombre: string
}

export interface PersonnelStore {
  personnel: Personnel[]
  loading: boolean
  errorPersonnel: string | null
  getPersonnel: () => Promise<void>
  createPersonnel: ({
    input,
  }: {
    input: CreatePersonnelInputs
  }) => Promise<void>
  deletePersonnel: ({ id }: { id: number }) => Promise<void>
  updatePersonnel: ({
    id,
    input,
  }: {
    id: number
    input: UpdatePersonInputs
  }) => Promise<void>
  getPersonnelByRank: ({ id }: { id: number }) => Promise<void>
  getPersonnelByGuard: ({ id }: { id: number }) => Promise<void>
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
  estado: number
  rango: number
  guardia: number
}

export interface CreatePersonnelInputs {
  nombre: string
  apellidos: string
  np: string
  rango: number
  base: string
  guardia: number
}
