import Badge from './Badge'
import BadgeState from './BadgeState'
import DatesUSer from './DatesUser'

export default function InfoUser({ profile }) {
  return (
    <section>
      <div className="grid grid-cols-[4fr,_1fr] justify-between">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-6">
            <p className="text-3xl font-semibold">{`${profile.us_nombres} ${profile.us_apellidos}`}</p>
            <BadgeState state={profile.est_nombre} />
          </div>

          <div className="flex items-center gap-6">
            <p className="text-lg text-gray-600 font-medium">
              {profile.us_correo}
            </p>

            <Badge text={profile.rol_nombre} />
          </div>

          <div className="flex items-center gap-2.5">
            <small className="text-base text-gray-600 font-medium">
              Total de servicios creados:
            </small>
            <p className="text-base font-semibold">
              {profile.servicios_creados}
            </p>
          </div>
        </div>

        <DatesUSer
          creado={profile.us_creado}
          actualizacion={profile.us_actualizacion}
        />
      </div>
    </section>
  )
}
