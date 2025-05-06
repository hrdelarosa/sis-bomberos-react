import {
  Ambulance,
  Axe,
  Bandage,
  BrickWall,
  Building2,
  Eye,
  FireExtinguisher,
  Flame,
  Hash,
  MapPinned,
  Maximize2,
  TriangleAlert,
  UserX,
} from 'lucide-react'
import { ServiceId, TypeIncident } from '../types/ServicesTypes'
import FieldInfo from './ui/FieldInfo'

interface Props {
  incident: TypeIncident
  currentService: ServiceId
}

export default function IncidentsType({ incident, currentService }: Props) {
  return (
    <>
      {incident === 'incendio' ? (
        <div className="grid grid-cols-2 gap-1.5">
          {/* Incendio */}
          <div>
            <span className="text-gray-800 font-semibold">Inmuebles</span>
            <div className="space-y-1.5">
              <FieldInfo
                title="Lugar"
                text={
                  currentService.tipo_inmueble
                    ? currentService.tipo_inmueble
                    : 'No especificado'
                }
                icon={<MapPinned className="size-4" />}
              />
              {currentService.tipo_inmueble && (
                <FieldInfo
                  title="Especificación del Lugar"
                  text={
                    currentService.inmueble_especificacion
                      ? currentService.inmueble_especificacion
                      : 'Sin especificación'
                  }
                  icon={<MapPinned className="size-4" />}
                />
              )}
            </div>
          </div>

          <div>
            <span className="text-gray-800 font-semibold">Otros</span>
            <div className="space-y-1.5">
              <FieldInfo
                title="Otro"
                text={
                  currentService.incendio_otros
                    ? currentService.incendio_otros
                    : 'No especificado'
                }
                icon={<Flame className="size-4" />}
              />
              {currentService.incendio_otros && (
                <FieldInfo
                  title="Especificación del Lugar"
                  text={
                    currentService.incendio_especificacion
                      ? currentService.incendio_especificacion
                      : 'Sin especificación'
                  }
                  icon={<MapPinned className="size-4" />}
                />
              )}
            </div>
          </div>
        </div>
      ) : incident === 'fuga o derrame' ? (
        <div className="flex flex-col gap-1.5">
          {/* Fuga */}
          <div className="grid grid-cols-3 gap-1.5">
            <FieldInfo
              title="Tipo de Fuga"
              text={
                currentService.tipo_fuga
                  ? currentService.tipo_fuga
                  : 'No especificado'
              }
              icon={<FireExtinguisher className="size-4" />}
            />
            {currentService.tipo_fuga && (
              <>
                <FieldInfo
                  title="Especificación del Fuga"
                  text={
                    currentService.fuga_especificacion
                      ? currentService.fuga_especificacion
                      : 'Sin especificación'
                  }
                  icon={<FireExtinguisher className="size-4" />}
                />
                <FieldInfo
                  title="Capacidad"
                  text={
                    currentService.capacidad
                      ? currentService.capacidad
                      : 'No especificada'
                  }
                  icon={<Maximize2 className="size-4" />}
                />
                <FieldInfo
                  title="Empresa"
                  text={
                    currentService.empresa
                      ? currentService.empresa
                      : 'No especificada'
                  }
                  icon={<Building2 className="size-4" />}
                />
              </>
            )}
          </div>

          <div className="grid grid-cols-3 gap-1.5">
            <FieldInfo
              title="Material"
              text={
                currentService.material
                  ? currentService.material
                  : 'No especificado'
              }
              icon={<BrickWall className="size-4" />}
            />
            <FieldInfo
              title="Numero de Guia"
              text={
                currentService.material
                  ? currentService.material
                  : 'No especificado'
              }
              icon={<BrickWall className="size-4" />}
            />
            <FieldInfo
              title="Observaciones"
              text={
                currentService.fuga_especificacion
                  ? currentService.fuga_especificacion
                  : 'Sin observaciones'
              }
              icon={<Eye className="size-4" />}
              tooltip
            />
          </div>
        </div>
      ) : incident === 'abejas' ? (
        <div className="grid grid-cols-2 gap-1.5">
          {/* Abejas */}
          <FieldInfo
            title="Lugar"
            text={
              currentService.tipo_abejas
                ? currentService.tipo_abejas
                : 'No especificado'
            }
            icon={<MapPinned className="size-4" />}
          />
          {currentService.tipo_abejas && (
            <FieldInfo
              title="Especificación del Lugar"
              text={
                currentService.abejas_especificacion
                  ? currentService.abejas_especificacion
                  : 'Sin especificación'
              }
              icon={<MapPinned className="size-4" />}
            />
          )}
          <FieldInfo
            title="Observaciones"
            text={
              currentService.abejas_observaciones
                ? currentService.abejas_observaciones
                : 'Sin observaciones'
            }
            icon={<Eye className="size-4" />}
          />
        </div>
      ) : incident === 'rescate' ? (
        <div className="flex flex-col gap-1.5">
          {/* Rescate */}
          <div className="grid grid-cols-2 gap-1.5">
            <FieldInfo
              title="Heridos"
              text={
                currentService.rescate_heridos
                  ? currentService.rescate_heridos
                  : 'No especificados'
              }
              icon={<Bandage className="size-4" />}
            />
            <FieldInfo
              title="Cadaveres"
              text={
                currentService.rescate_cadaveres
                  ? currentService.rescate_cadaveres
                  : 'No especificados'
              }
              icon={<UserX className="size-4" />}
            />
            {currentService.rescate_heridos &&
              currentService.rescate_cadaveres && (
                <FieldInfo
                  className="col-span-2"
                  title="Parte de Ambulancia"
                  text={
                    currentService.rescate_cadaveres
                      ? currentService.rescate_cadaveres
                      : 'Sin parte'
                  }
                  icon={<Ambulance className="size-4" />}
                  tooltip
                />
              )}
          </div>

          <div className="grid grid-cols-3 gap-1.5">
            <FieldInfo
              title="Equipo utilizado"
              text={
                currentService.equipo_utilizado
                  ? currentService.equipo_utilizado
                  : 'No especificado'
              }
              icon={<Axe className="size-4" />}
            />
            {currentService.equipo_utilizado && (
              <FieldInfo
                title="Especificación del Equipo"
                text={
                  currentService.rescate_especificacion
                    ? currentService.rescate_especificacion
                    : 'Sin especificación'
                }
                icon={<Axe className="size-4" />}
              />
            )}
            <FieldInfo
              title="No. Personal"
              text={
                currentService.rescate_especificacion
                  ? currentService.rescate_especificacion
                  : 'No especificado'
              }
              icon={<Hash className="size-4" />}
            />
          </div>
        </div>
      ) : (
        incident === 'otro' && (
          <div>
            <FieldInfo
              title="Otro incidente"
              text={
                currentService.otro ? currentService.otro : 'No especificado'
              }
              icon={<TriangleAlert className="size-4" />}
            />
          </div>
        )
      )}
    </>
  )
}
