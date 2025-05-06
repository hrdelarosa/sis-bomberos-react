import { useParams } from 'react-router-dom'
import {
  AlertCircle,
  Ambulance,
  Bandage,
  Clock1,
  Cuboid,
  FileDown,
  Hash,
  Info,
  MapPin,
  Pencil,
  PersonStanding,
  Phone,
  Printer,
  Scale,
  TriangleAlert,
  User,
  UserX,
} from 'lucide-react'
import { firstCapitalLetter } from '../../core/utils/firstCapital'
import { formatDateService } from '../utils/formatDateService'
import { calculateDuration } from '../utils/calculateDuration'
import { useService } from '../hooks/useService'

import Loader from '../../core/components/ui/Loader'
import ContentCard from '../../core/components/ui/ContentCard'
import FieldInfo from '../components/ui/FieldInfo'
import BadgeStateService from '../components/ui/BadgeStateService'
import ButtonAction from '../../core/components/ui/ButtonAction'
import InfoTime from '../components/ui/InfoTime'
import TimelineItem from '../components/ui/TimelineItem'
import Table from '../../core/components/Table'
import PersonnelSerTableHead from '../components/service/PersonnelSerTableHead'
import PersonnelSerTableBody from '../components/service/PersonnelSerTableBody'
import UnitsSerTableHead from '../components/service/UnitsSerTableHead'
import UnitsSerTableBody from '../components/service/UnitsSerTableBody'
import TableMessage from '../../core/components/ui/table/TableMessage'
import IncidentsType from '../components/IncidentsType'

export default function Service() {
  const { id } = useParams()
  const {
    user,
    currentService,
    errorServices,
    loading,
    activeTab,
    setActiveTab,
    tabs,
    animationParent,
  } = useService({ id: Number(id) })

  return (
    <>
      {loading ? (
        <Loader />
      ) : errorServices ? (
        <p>{errorServices}</p>
      ) : (
        currentService && (
          <div
            ref={animationParent}
            className={`grid grid-flow-col grid-rows-[272px_40px_1fr_auto_auto] grid-cols-3 gap-3.5`}
          >
            <ContentCard className="p-5 col-span-2 space-y-3">
              <h2 className="text-2xl font-semibold">Servicio</h2>

              <div className="flex flex-col gap-3">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Información General
                  </h3>

                  <div className="grid grid-cols-2">
                    <div className="flex flex-col gap-2.5">
                      <FieldInfo
                        title="Tipo de Incidente"
                        text={currentService.tipo_incidente}
                        icon={<AlertCircle className="size-4" />}
                      />
                      <FieldInfo
                        title="Solicitante"
                        text={currentService.nombre}
                        icon={<PersonStanding className="size-4" />}
                      />
                      <FieldInfo
                        title="Teléfono"
                        text={currentService.telefono}
                        icon={<Phone className="size-4" />}
                      />
                    </div>

                    <div className="flex flex-col gap-2.5">
                      <FieldInfo
                        title="Folio"
                        text={currentService.folio}
                        icon={<Hash className="size-4" />}
                      />
                      <FieldInfo
                        title="Fecha de Creación"
                        text={formatDateService({
                          date: currentService.creado,
                        })}
                        icon={<Clock1 className="size-4" />}
                      />
                      <FieldInfo
                        title="Ubicación"
                        text={currentService.ubicacion}
                        icon={<MapPin className="size-4" />}
                        tooltip
                      />
                    </div>
                  </div>
                </div>
              </div>
            </ContentCard>

            <ContentCard className="flex flex-col justify-between h-full p-5 col-start-3 col-span-1 row-span-1 ">
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-semibold">Detalles Servicio</h2>

                <div>
                  <div className="grid grid-cols-2 gap-3">
                    <FieldInfo
                      title="ID"
                      text={currentService.id_servicio.toString()}
                    />

                    <div>
                      <p className="text-sm text-gray-600 font-medium">
                        Estado
                      </p>
                      <BadgeStateService
                        state={currentService.estado_servicio}
                      />
                    </div>
                  </div>

                  <FieldInfo
                    title="Creado por"
                    text={currentService.usuario_creador}
                    icon={<User className="size-4" />}
                  />
                </div>
              </div>
              <div className="flex items-center justify-end gap-2">
                {user && user.rol_nombre === 'administrador' && (
                  <ButtonAction className="hover:bg-primary-yellow bg-black hover:text-black text-primary-yellow">
                    <Pencil className="size-5" />
                    Editar
                  </ButtonAction>
                )}
                <ButtonAction className="bg-primary-yellow hover:bg-black hover:text-primary-yellow hidden">
                  <Printer className="size-5" />
                  Imprimir
                </ButtonAction>
                <ButtonAction className="bg-primary-yellow hover:bg-black hover:text-primary-yellow hidden">
                  <FileDown className="size-5" />
                  Exportar
                </ButtonAction>
              </div>
            </ContentCard>

            <ContentCard className="grid grid-cols-3 p-1.5 row-start-2 col-span-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-2.5 py-1 text-sm font-medium rounded-md transition-colors cursor-pointer
                    ${
                      activeTab === tab.id
                        ? 'bg-primary-yellow text-black'
                        : 'hover:bg-gray-200/30 text-gray-600'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </ContentCard>

            <ContentCard
              className={`p-5 col-start-3 col-span-1 row-span-3 space-y-6`}
            >
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">
                  Cronología del Servicio
                </h3>

                <div className="space-y-2">
                  <InfoTime
                    text="Hora reportada"
                    time={currentService.tiempo_salida.substring(0, 5)}
                  />
                  <InfoTime
                    text="Duración Total"
                    time={calculateDuration({
                      startTime: currentService.tiempo_salida,
                      endTime: currentService.tiempo_base,
                    })}
                  />
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-2.5 top-0 bottom-0 w-0.5 bg-gray-200"></div>

                <div className="space-y-5">
                  <TimelineItem
                    type="departure"
                    time={currentService.tiempo_salida}
                    totalTime={calculateDuration({
                      startTime: currentService.tiempo_salida,
                      endTime: currentService.tiempo_llegada,
                    })}
                  />
                  <TimelineItem
                    type="arrival"
                    time={currentService.tiempo_llegada}
                    totalTime={calculateDuration({
                      startTime: currentService.tiempo_llegada,
                      endTime: currentService.tiempo_control,
                    })}
                  />
                  <TimelineItem
                    type="control"
                    time={currentService.tiempo_control}
                    totalTime={calculateDuration({
                      startTime: currentService.tiempo_control,
                      endTime: currentService.tiempo_base,
                    })}
                  />
                  <TimelineItem type="base" time={currentService.tiempo_base} />
                </div>
              </div>
            </ContentCard>

            <ContentCard
              className={`p-5 row-start-3 col-span-2 ${
                activeTab === 'incidente' ? 'row-span-1' : 'row-span-2'
              }`}
            >
              <div ref={animationParent} className="space-y-3">
                {activeTab === 'personal' && (
                  <>
                    <div>
                      <h2 className="text-xl font-semibold">
                        Personal Asignado
                      </h2>
                      <span className="text-sm text-gray-500 font-semibold">
                        Total: {currentService.personal_asignado.length}{' '}
                        elementos
                      </span>
                    </div>

                    <Table head={<PersonnelSerTableHead />}>
                      {!currentService.personal_asignado ||
                      currentService.personal_asignado.length === 0 ? (
                        <TableMessage
                          colSpan={5}
                          message="El servicio no tiene personal asignado"
                        />
                      ) : (
                        currentService.personal_asignado.map((person) => (
                          <PersonnelSerTableBody
                            key={person.id}
                            personnel={person}
                          />
                        ))
                      )}
                    </Table>
                  </>
                )}
                {activeTab === 'unidades' && (
                  <>
                    <div>
                      <h2 className="text-xl font-semibold">
                        Unidades Asignadas
                      </h2>
                      <span className="text-sm text-gray-500 font-semibold">
                        Total: {currentService.unidades_asignadas.length}{' '}
                        unidades
                      </span>
                    </div>

                    <Table head={<UnitsSerTableHead />}>
                      {!currentService.unidades_asignadas ||
                      currentService.unidades_asignadas.length === 0 ? (
                        <TableMessage
                          colSpan={3}
                          message="El servicio no tiene unidades asignadas"
                        />
                      ) : (
                        currentService.unidades_asignadas.map((unit) => (
                          <UnitsSerTableBody key={unit.id} unit={unit} />
                        ))
                      )}
                    </Table>
                  </>
                )}
                {activeTab === 'incidente' && (
                  <>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5">
                        <TriangleAlert className="size-4 text-primary-red" />
                        <h2 className="text-xl font-semibold">
                          Incidente:{' '}
                          {firstCapitalLetter(currentService.tipo_incidente)}
                        </h2>
                      </div>

                      <BadgeStateService
                        state={currentService.estado_servicio}
                      />
                    </div>
                    <div className="flex flex-col gap-2.5">
                      <FieldInfo
                        title="Descripción del Estado"
                        text={currentService.descripcion_estado}
                        icon={<Info className="size-4" />}
                      />

                      <div className="flex flex-col gap-1.5">
                        <h3 className="text-lg text-gray-800 font-semibold">
                          Detalles del Incidente
                        </h3>

                        <IncidentsType
                          incident={currentService.tipo_incidente}
                          currentService={currentService}
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </ContentCard>

            {activeTab === 'incidente' && (
              <ContentCard className="p-5 h-fit row-start-4 col-span-2 space-y-3">
                <h2 className="text-xl font-semibold">Observaciones</h2>
                <div className="bg-white p-2.5 rounded-lg">
                  <p className="text-pretty">{currentService.observaciones}</p>
                </div>
              </ContentCard>
            )}

            <ContentCard className="p-5 h-fit row-start-5 col-span-2 space-y-3">
              <h2 className="text-xl font-semibold">Daños</h2>

              <div className="grid grid-cols-2 gap-1.5">
                <div>
                  <span className="text-gray-800 font-semibold">
                    Materiales
                  </span>

                  <div className="space-y-1.5">
                    <FieldInfo
                      title="Material"
                      text={
                        currentService.tipo_daños
                          ? currentService.tipo_daños
                          : 'No especificada'
                      }
                      icon={<Cuboid className="size-4" />}
                    />
                    {currentService.tipo_daños && (
                      <FieldInfo
                        title="Especificación del Material"
                        text={
                          currentService.daños_especificacion
                            ? currentService.daños_especificacion
                            : 'Sin especificación'
                        }
                        icon={<Cuboid className="size-4" />}
                      />
                    )}
                  </div>
                </div>

                <div>
                  <span className="text-gray-800 font-semibold">
                    Materiales
                  </span>

                  <div className="space-y-1.5">
                    <div className="grid grid-cols-2 gap-1.5">
                      <FieldInfo
                        title="Heridos"
                        text={
                          currentService.daños_heridos
                            ? currentService.daños_heridos
                            : 'No especificados'
                        }
                        icon={<Bandage className="size-4" />}
                      />
                      <FieldInfo
                        title="Muertos"
                        text={
                          currentService.daños_muertos
                            ? currentService.daños_muertos
                            : 'No especificados'
                        }
                        icon={<UserX className="size-4" />}
                      />
                    </div>
                    {currentService.daños_heridos &&
                      currentService.daños_muertos && (
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
                </div>
              </div>
            </ContentCard>

            <ContentCard className="p-5 row-start-5 col-start-3 col-span-1 space-y-3">
              <h2 className="text-xl font-semibold">Legales</h2>

              <div className="space-y-1.5">
                <FieldInfo
                  title="Autoridad Legal"
                  text={
                    currentService.autoridad_legal
                      ? currentService.autoridad_legal
                      : 'No especificada'
                  }
                  icon={<Scale className="size-4" />}
                />
                {currentService.autoridad_legal && (
                  <FieldInfo
                    title="Especificación de la Autoridad Legal"
                    text={
                      currentService.otra_autoridad
                        ? currentService.otra_autoridad
                        : 'No especificada'
                    }
                    icon={<Scale className="size-4" />}
                  />
                )}
              </div>
            </ContentCard>
          </div>
        )
      )}
    </>
  )
}
