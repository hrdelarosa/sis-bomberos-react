export interface User {
  us_id: number
  us_nombres: string
  us_apellidos: string
  us_correo: string
  rol_id_us: number
  rol_nombre: string
  est_id_us: number
  est_nombre: string
  us_verificado: number
  us_creado: string
  us_actualizacion: string
  total_servicios: number
}

export interface UsersStore {
  users: User[]
  loading: boolean
  errorUsers: string | null
  getUsers: () => Promise<void>
}

export interface UpdateUserInputs {
  estado: number
  rol: number
}
