export interface Role {
  rol_id: number
  rol_nombre: string
  rol_descripcion: string
  est_id_rol: number
  est_nombre: string
}

export interface RoleWithStats extends Role {
  totalUsers: number
  activeUsers: number
  activePercentage: number
}

export interface RolesStore {
  roles: Role[]
  loading: boolean
  errorRoles: string | null
  getRoles: () => Promise<void>
}

export interface UsersByRole {
  id: string
  category: string
  total: number
  active: number
  activePercentage: number
  state: string
}

export interface UpdateRoleInputs {
  estado: number
}

export interface CreateRoleInputs {
  nombre: string
  descripcion: string
}
