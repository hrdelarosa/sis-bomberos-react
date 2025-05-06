// export const apiURL = 'http://187.217.93.89:3000/api/'
export const apiURL = 'http://localhost:3000/api/'

export const pathsAPIURL = {
  dashboard: {
    incidentesPorcentaje: 'dashboard/services-incident-porcentaje',
    summaryIncident: 'dashboard/summary-per-incident ',
    servicesMonthly: 'dashboard/services-monthly',
    incidentMonthly: 'dashboard/services-per-incident-monthly',
    typesPorcentaje: 'dashboard/unit-types-porcentaje',
    unitStatus: 'dashboard/unit-status',
    responseServices: 'dashboard/response-services',
  },
  auth: {
    register: 'auth/register',
    login: 'auth/login',
    verify: 'auth/verify-token',
    logout: 'auth/logout',
    verifyEmail: 'auth/email-verification',
    resendVerify: 'auth/resend-email-verification',
    requestResetPass: 'auth/resend-email-verification',
    resetPass: 'auth/reset-password',
  },
  profile: {
    get: 'auth/profile/',
  },
  services: {
    get: 'services',
    create: 'services/create',
    delete: 'services/delete/',
    getById: 'services/',
    getByCreator: 'services/creator/',
    updateState: 'services/state/',
  },
  units: {
    get: 'units',
    create: 'units/create',
    delete: 'units/delete/',
    update: 'units/state/',

    types: {
      get: 'types',
      create: 'types/create',
      delete: 'types/delete/',
      update: 'types/state/',
    },
  },
  states: {
    get: 'states',
    getService: 'states/services',
  },
  personnel: {
    get: 'personnel',
    create: 'personnel/create',
    delete: 'personnel/delete/',
    update: 'personnel/update/',
    getByRank: 'personnel/rank/',
    getByGuard: 'personnel/guard/',

    ranks: {
      get: 'ranks',
      create: 'ranks/create',
      delete: 'ranks/delete/',
      update: 'ranks/state/',
    },
  },
  stations: {
    get: 'stations',
    create: 'stations/create',
    delete: 'stations/delete/',
    update: 'stations/state/',

    guards: {
      get: 'guards',
      create: 'guards/create',
      delete: 'guards/delete/',
      getByStation: 'guards/station/',
    },
  },
  users: {
    get: 'users',
    delete: 'users/delete/',
    update: 'users/update/',
  },
  roles: {
    get: 'roles',
    create: 'roles/create',
    delete: 'roles/delete/',
    update: 'roles/state/',
  },
}
