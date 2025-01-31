import { SELECTINCIDENTES } from '../../constants/selectService'
import CardInfoService from '../nuevo/CardInfoService'
import CheckField from './CheckField'
import PersonalMiniCard from './PersonalMiniCard'
import TextField from './TextField'
import TimeField from './TimeField'
import UnitMiniCard from './UnitMiniCard'

export default function InfoService({ service }) {
  return (
    <section className="flex flex-col  gap-3.5">
      <CardInfoService title="Datos del Servicio">
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <TextField
              field="Fecha"
              text={new Date(service.creado).toLocaleDateString()}
            />

            <TextField field="Folio" text={service.folio} />
          </div>

          <div className="flex items-center justify-between">
            <TextField field="Nombre" text={service.nombre} />

            <TextField field="Telefono" text={service.telefono} />
          </div>

          <TextField field="Ubicación" text={service.ubicacion} />

          <div className="flex items-center gap-10 ml-16 my-2">
            <TimeField text="Salida" time={service.tiempo_salida} />
            <TimeField text="Llegada" time={service.tiempo_llegada} />
            <TimeField text="Control" time={service.tiempo_control} />
            <TimeField text="Base" time={service.tiempo_base} />
          </div>

          <div className="flex items-center gap-12">
            <CheckField text={SELECTINCIDENTES.INCENDIO} />
            <CheckField text={SELECTINCIDENTES.FUGA} />
            <CheckField text={SELECTINCIDENTES.RESCATE} />
            <CheckField text={SELECTINCIDENTES.ABEJAS} />
            <div className="flex items-center">
              <CheckField
                incident={service.OTRO !== ''}
                text={SELECTINCIDENTES.OTRO}
              />
              :<p className="text-[17px] ml-1.5">{service.otro}</p>
            </div>
          </div>
        </div>
      </CardInfoService>

      <div className="grid grid-cols-[2fr,_1fr] gap-3.5">
        <CardInfoService title="Personal">
          <div className="grid grid-cols-3 items-center gap-1">
            {service.personal_asignado &&
              service.personal_asignado.map((perosnal) => (
                <PersonalMiniCard
                  key={perosnal.id}
                  name={perosnal.nombre}
                  rank={perosnal.rango}
                />
              ))}
          </div>
        </CardInfoService>

        <CardInfoService title="Unidades">
          <div className="grid grid-cols-3 items-center gap-3">
            {service.unidades_asignadas &&
              service.unidades_asignadas.map((unit) => (
                <UnitMiniCard key={unit.id} unit={unit} />
              ))}
          </div>
        </CardInfoService>
      </div>
    </section>
  )
}
