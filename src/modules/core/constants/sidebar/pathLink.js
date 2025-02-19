export const PATHS = {
  menu: {
    dasboard: {
      path: 'Inicio',
      to: '/',
    },
    profile: {
      path: 'Perfil',
      to: '/profile',
    },
  },
  services: {
    path: 'Servicios',
    to: '/services',
    new: {
      path: 'Nuevo',
      to: '/services/create',
    },
  },
  suport: {
    stations: {
      path: 'Estaciones',
      to: '/suport/stations',
    },
    guards: {
      path: 'Guardias',
      to: '/suport/guards',
    },
    personnel: {
      path: 'Personal',
      to: '/suport/personnel',
    },
    ranks: {
      path: 'Rangos',
      to: '/suport/ranks',
    },
    roles: {
      path: 'Roles',
      to: '/suport/roles',
    },
    units: {
      path: 'Unidades',
      to: '/suport/units',
      type: {
        path: 'Tipo de unidad',
        to: '/suport/units/types',
      },
    },
    users: {
      path: 'Usuarios',
      to: '/suport/users',
    },
  },
  settings: {
    path: 'Configuración',
    to: '/settings',
  },
}

export const PATH_SERVICES = {
  servicios: {
    path: 'Reportes de Servicios',
    to: '/services',
  },
  nuevo: {
    path: 'Nuevo Servicio',
    to: '/services/create',
  },
}

export const PATHS_SOPORTE = {
  usuarios: {
    path: 'Usuarios',
    to: '/support/users',
  },
  unidades: {
    path: 'Unidades',
    to: '/support/units',
  },
}
