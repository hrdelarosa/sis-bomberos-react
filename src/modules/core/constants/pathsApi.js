export const API = 'http://localhost:1234/api'

export const PATH_API_AUTH = {
  register: '/auth/register',
  login: '/auth/login',
  verify: '/auth/verify-token',
  profile: '/auth/profile',
  verifyEmail: '/auth/verify-email',
  resendVerifyEmail: '/auth/resend-verify-email',
  requestResetPass: '/auth/request-password-reset',
  resetPass: '/auth/reset-password',
}

export const PATH_API_SERVICES = {
  services: '/servicios',
  deleteService: '/servicios/eliminar',
  createService: '/servicios/crear',
  serviceCreator: '/servicios/creado',
}

export const PATH_API_STATIONS = {
  stations: '/estaciones',
  deleteStations: '/estaciones/eliminar',
  createStations: '/estaciones/crear',
}

export const PATH_API_GUARDS = {
  guards: '/guardias',
  deleteGuards: '/guardias/eliminar',
  createGuards: '/guardias/crear',
}

export const PATH_API_PERSONAL = {
  createPersonnel: '/personal/crear',
  deletePersonnel: '/personal/eliminar',
  personnel: '/personal',
  personnelGuard: '/personal',
  excludePersonnelGuard: '/personal/excluir',
  updatePerGuard: '/personal/actualizar/guardia',
}

export const PATH_API_RANKS = {
  createRanks: '/rangos/crear',
  deleteRanks: '/rangos/eliminar',
  ranks: '/rangos',
}

export const PATH_API_ROLES = {
  createRoles: '/roles/crear',
  deleteRoles: '/roles/eliminar',
  roles: '/roles',
}

export const PATH_API_UNITS = {
  creteUnit: '/unidades/crear',
  updateUnit: '/unidades/actualizar',
  deleteUnit: '/unidades/eliminar',
  units: '/unidades',
  createType: '/unidades/tipo/crear',
  deleteType: '/unidades/tipo/eliminar',
  types: '/unidades/tipo',
}

export const PATH_API_STATES = {
  states: '/estados',
  statesById: '/estados/id',
  statesByName: '/estados/',
}

export const PATH_API_USERS = {
  users: '/usuarios',
  deleteUsers: '/usuarios/eliminar',
  updateUsers: '/usuarios/actualizar',
}
