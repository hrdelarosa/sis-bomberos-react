export interface Service {
  ser_id: number
  us_nombres: string
  ser_creado: string
  ser_nombre: string
  ser_telefono: string
  ser_incidente: string
  ser_ubicacion: string
  ser_folio: string
  ser_observaciones: string
  estser_id_ser: number
  estser_nombre: ServicesState
}

export interface UnitService {
  id: number
  tipo: string
  estado: string
  numero: string
}

export interface PersonnelService {
  id: number
  np: number
  base: string
  rango: string
  nombre: string
  guardia: string
}

export interface ServiceId {
  usuario_creador: string
  id_servicio: number
  id_usuario: number
  creado: string
  nombre: string
  telefono: string
  tipo_incidente: TypeIncident
  ubicacion: string
  folio: string
  tiempo_salida: string
  tiempo_llegada: string
  tiempo_base: string
  tiempo_control: string
  otro: string
  observaciones: string
  estado_servicio: ServicesState
  descripcion_estado: string

  personal_asignado: PersonnelService[]
  unidades_asignadas: UnitService[]

  tipo_inmueble: string | null
  inmueble_especificacion: string | null
  incendio_otros: string | null
  incendio_especificacion: string | null

  tipo_fuga: string | null
  fuga_especificacion: string | null
  capacidad: string | null
  empresa: string | null
  material: string | null
  numero_guia: string | null
  fuga_observaciones: string | null

  tipo_abejas: string | null
  abejas_especificacion: string | null
  abejas_observaciones: string | null

  rescate_heridos: string | null
  rescate_cadaveres: string | null
  rescate_ambulancia: string | null
  equipo_utilizado: string | null
  rescate_especificacion: string | null
  numero_personal: string | null

  tipo_daños: string | null
  daños_especificacion: string | null
  daños_heridos: string | null
  daños_muertos: string | null
  daños_ambulancia: string | null

  autoridad_legal: string | null
  otra_autoridad: string | null
}

export interface ServiceFilters {
  page?: number
  folio?: string
  incidente?: string
}

export interface ServiceByCreator {
  id: number
  limit?: number
}

export interface ServiceStore {
  services: Service[]
  currentService: ServiceId | null
  loading: boolean
  errorServices: string | null
  totalPages: number
  currentPage: number
  totalServices: number
  servicesPerPage: number

  getServices: ({ page, folio, incidente }: ServiceFilters) => Promise<void>
  setCurrentPage: ({ page }: { page: number }) => void
  createService: ({ input }: { input: CreateServiceInputs }) => Promise<boolean>
  deleteService: ({ id }: DeleteService) => Promise<void>
  getServiceById: ({ id }: GetServiceById) => Promise<void>
  getServicesByCreator: ({ id, limit }: ServiceByCreator) => Promise<void>
  updateService: ({
    id,
    input,
  }: {
    id: number
    input: UpdateServicesInputs
  }) => Promise<void>
}

export interface UpdateServicesInputs {
  estado: number
}

export type TypeIncident =
  | 'incendio'
  | 'fuga o derrame'
  | 'rescate'
  | 'abejas'
  | 'otro'

export type ServicesState = 'nuevo' | 'reciente' | 'antiguo' | 'archivado'

export const enum IncidentType {
  INCEDIO = 'incendio',
  fUGA = 'fuga o derrame',
  RESCATE = 'rescate',
  ABEJAS = 'abejas',
  OTRO = 'otro',
}

export const enum IncidentIndendioInmueble {
  NONE = '',
  CASA = 'casa/habitación',
  ESTABLECIMIENTO = 'establecimiento',
  ESCULA = 'escuela',
  OTRO = 'otro',
}

export const enum IncidentIndendioOtros {
  NONE = '',
  TERRENO = 'terreno baldio',
  VEHICULO = 'vehiculo',
  FORESTAL = 'forestal',
  OTRO = 'otro',
}

export const enum IncidentFuga {
  NONE = '',
  CILINDRO = 'cilindro',
  ESTACION = 'estacionario',
  AUTOTANQUE = 'autotanque',
  OTRO = 'otro',
}

export const enum IncidentRescate {
  NONE = '',

  CUERDAS = 'Cuerdas',
  BARRETAS = 'Barretas',
  COMBINADA = 'Herramienta combinada',
  OTRO = 'otro',
}

export const enum IncidentAbejas {
  NONE = '',

  DENTRO = 'dentro casa',
  FUERA = 'fuera casa',
  TERRENO = 'terreno baldio',
  OTRO = 'otro',
}

export const enum IncidentDaños {
  NONE = '',

  MOBILIARIO = 'mobiliario',
  ESTRUCTURA = 'estructura',
  VEGETACION = 'vegetación',
  ESTRUCTURAS = 'estructuras vecinas',
  OTRO = 'otro',
}

export const enum SelectLegales {
  NONE = '',

  SPV = 'S.P y V',
  POLICIA = 'Policía Estado',
  PFP = 'P.F.P',
  PGR = 'P.G.R',
  PFE = 'P.J.E',
  OTRO = 'otro',
}

export interface CreateServiceInputs {
  usuario: number
  nombre: string
  telefono: string
  salida: string
  llegada: string
  control: string
  base: string
  incidente: string
  ubicacion: string
  otro: string
  observaciones: string
  unidades: number[]
  personal: number[]
  incendio?: {
    inmueble: IncidentIndendioInmueble
    inmEspecifique: string
    otro: IncidentIndendioOtros
    otrEspecifique: string
  }
  fugaDerrame?: {
    fuga: IncidentFuga
    capacidad: string
    especifique: string
    empresa: string
    noGuia: string
    material: string
    observaciones: string
  }
  rescate?: {
    heridos: string
    cadaveres: string
    ambulancia: string
    equipo: IncidentRescate
    noPersonal: string
    especifique: string
  }
  abejas?: {
    abeja: IncidentAbejas
    especifique: string
    observaciones: string
  }
  daños: {
    material: IncidentDaños
    especifique: string
    heridos: string
    muertos: string
    ambulancia: string
  }
  legales: {
    legal: SelectLegales
    otro: string
  }
}

export interface DeleteService {
  id: number
}
export type GetServiceById = Pick<DeleteService, 'id'>
