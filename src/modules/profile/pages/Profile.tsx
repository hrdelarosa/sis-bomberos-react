import {
  BadgeCheck,
  Calendar1,
  ChartNoAxesColumn,
  CircleUser,
  Clock8,
  Mail,
} from 'lucide-react'
import formatDate from '../../core/utils/formatDate'
import { useProfile } from '../hooks/useProfile'

import ContentCard from '../../core/components/ui/ContentCard'
import UserIcon from '../components/UserIcon'
import Badge from '../components/ui/Badge'
import Separator from '../../core/components/ui/Separator'
import FielTextIcon from '../components/ui/FieldTextIcon'
import Skeleton from '../../core/components/skeleton/ui/Skeleton'
import Table from '../../core/components/Table'
import SkeletonTable from '../../core/components/skeleton/SkeletonTable'
import ProfileSerTableHead from '../components/ProfileSerTableHead'
import ProfileSerTableBody from '../components/ProfileSerTableBody'
import TableMessage from '../../core/components/ui/table/TableMessage'
import Loader from '../../core/components/ui/Loader'

export default function Profile() {
  const { profile, loadingProfile, services, errorServices, loading } =
    useProfile()

  return (
    <>
      {loadingProfile ? (
        <Loader />
      ) : (
        <div className="grid grid-flow-col grid-rows-1 grid-cols-3 gap-3.5">
          <ContentCard className="p-5 col-start-1 row-start-1 col-span-1 space-y-[19px]">
            <div className="flex flex-col items-center gap-0.5">
              <UserIcon name={profile?.us_nombres} />

              <p className="text-xl font-bold tracking-tight">
                {profile?.us_nombres}
              </p>

              <div className="flex items-center gap-1.5 text-gray-600">
                <Mail className="size-4" />
                <span>{profile?.us_correo}</span>
              </div>

              <Badge
                type="role"
                className="mt-3"
                text={profile ? profile.rol_nombre : ''}
              />
            </div>

            <Separator />

            <div className="flex flex-col gap-2.5">
              <h3 className="font-medium text-gray-700 tracking-tight">
                Información del Usuario
              </h3>

              <div className="flex flex-col gap-2.5">
                <div className="flex items-center gap-7">
                  <FielTextIcon
                    label="Estado"
                    icon={<BadgeCheck className="size-4" />}
                  >
                    <Badge text={profile ? profile.est_nombre : ''} />
                    <Badge
                      type="verified"
                      text={
                        profile?.us_verificado ? 'verificado' : 'no verificado'
                      }
                    />
                  </FielTextIcon>

                  <FielTextIcon
                    label="ID de Usuario"
                    icon={<CircleUser className="size-4" />}
                  >
                    {profile?.us_id}
                  </FielTextIcon>
                </div>

                <FielTextIcon
                  label="Nombre Completo"
                  icon={<CircleUser className="size-4" />}
                >
                  {profile?.us_nombres} {profile?.us_apellidos}
                </FielTextIcon>

                <FielTextIcon label="Correo" icon={<Mail className="size-4" />}>
                  {profile?.us_correo}
                </FielTextIcon>
              </div>
            </div>

            <Separator />

            <div className="flex flex-col gap-2.5">
              <h3 className="font-medium text-gray-700 tracking-tight">
                Actividad de la Cuenta
              </h3>

              <div>
                <div className="relative pb-6">
                  <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"></span>

                  <div className="relative flex items-center space-x-2">
                    <div className="relative px-1">
                      <div className="size-8 flex items-center justify-center rounded-full bg-indigo-500 ring-4 ring-white">
                        <Clock8 className="size-4 text-white" />
                      </div>
                    </div>

                    <div>
                      <span className="text-sm font-medium text-gray-900">
                        Última Actualización
                      </span>
                      <p className="mt-0.5 text-sm text-gray-500">
                        La cuenta fue actualizada el{' '}
                        {formatDate(profile ? profile.us_creado : '--/--/--')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center space-x-2">
                  <div className="relative px-1">
                    <div className="size-8 flex items-center justify-center rounded-full bg-indigo-500 ring-8 ring-white">
                      <Calendar1 className="size-4 text-white" />
                    </div>
                  </div>

                  <div>
                    <span className="text-sm font-medium text-gray-900">
                      Cuenta Creada
                    </span>
                    <p className="mt-0.5 text-sm text-gray-500">
                      La cuenta fue creada el{' '}
                      {formatDate(profile ? profile.us_creado : '--/--/--')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ContentCard>

          <ContentCard className="p-5 col-start-2 row-start-1 col-span-2 space-y-5">
            <header className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">Servicios Creados</h3>
                <p className="text-sm text-muted-foreground text-gray-500">
                  Listado de los ultimos 3 servicios registrados por el usuario
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className="size-8 grid place-content-center rounded-lg bg-primary-yellow/60">
                  <ChartNoAxesColumn className="size-5" />
                </div>

                <div className="flex flex-col">
                  <span className="text-xs font-medium text-gray-500">
                    Servicios Creados
                  </span>
                  {loading ? (
                    <Skeleton className="w-14 h-5" />
                  ) : (
                    <p className="font-semibold text-sm w-fit">
                      <span className="text-gray-700">Total:</span>{' '}
                      {profile?.servicios_creados}
                    </p>
                  )}
                </div>
              </div>
            </header>

            <Table head={<ProfileSerTableHead />}>
              {loading ? (
                <SkeletonTable colums={5} rows={3} />
              ) : errorServices ? (
                <TableMessage colSpan={5} message={errorServices} />
              ) : !services || services.length === 0 ? (
                <TableMessage
                  colSpan={5}
                  message="No se han encontrado servicios registrados"
                />
              ) : (
                services.map((service) => (
                  <ProfileSerTableBody key={service.ser_id} service={service} />
                ))
              )}
            </Table>
          </ContentCard>
        </div>
      )}
    </>
  )
}
