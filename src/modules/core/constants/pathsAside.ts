import {
  BellElectric,
  Building2,
  FilePlus,
  Files,
  FolderOpen,
  Home,
  IdCard,
  LogOut,
  ShieldCheck,
  ShieldUser,
  SquareUser,
  Truck,
  User,
  Users,
  UsersRound,
  Wrench,
} from 'lucide-react'

export const pathsAside = {
  project: {
    title: 'Bomberos',
    subTitle: 'Sistema de Gestión',
  },
  menu: {
    title: 'Menu',
    home: {
      title: 'Inicio',
      icon: Home,
      to: '/',
    },
    profile: {
      title: 'Perfil',
      icon: User,
      to: '/profile',
    },
    services: {
      title: 'Servicios',
      icon: FolderOpen,
      items: {
        create: {
          title: 'Crear',
          icon: FilePlus,
          to: '/services',
        },
        view: {
          title: 'Ver',
          icon: Files,
          to: '/services/create',
        },
      },
    },
  },
  support: {
    title: 'Soporte',
    users: {
      title: 'Usuarios',
      icon: Users,
      to: '/users',
    },
    roles: {
      title: 'Roles',
      icon: SquareUser,
      to: '/roles',
    },
    units: {
      title: 'Unidades',
      icon: Truck,
      to: '/units',
      items: {
        view: {
          title: 'Ver',
          icon: Truck,
          to: '/units',
        },
        types: {
          title: 'Tipos',
          icon: Wrench,
          to: '/units/types',
        },
      },
    },
    personnel: {
      title: 'Personal',
      icon: IdCard,
      items: {
        view: {
          title: 'Ver',
          icon: UsersRound,
          to: '/personnel',
        },
        ranks: {
          title: 'Rangos',
          icon: ShieldUser,
          to: '/personnel/ranks',
        },
      },
    },
    stations: {
      title: 'Estaciones',
      icon: Building2,
      items: {
        view: {
          title: 'Ver',
          icon: BellElectric,
          to: '/stations',
        },
        guards: {
          title: 'Guardias',
          icon: ShieldCheck,
          to: '/stations/guards',
        },
      },
    },
  },
  options: {
    logout: {
      title: 'Cerrar Sesión',
      icon: LogOut,
      action: () => console.log('Cerrar Sesión'),
    },
  },
}
