import { AlarmClock, Timer } from 'lucide-react'
import ContentCard from '../../../core/components/ui/ContentCard'
import { formatTime } from '../../utils/formatTime'
import { useEffect } from 'react'
import dashboardStore from '../../states/dashboardStore'
import Loader from '../Loader'
import Skeleton from '../../../core/components/skeleton/ui/Skeleton'

export default function TimesServices() {
  const { timesServices, getResponseServices, error, loading } =
    dashboardStore()

  useEffect(() => {
    getResponseServices()
  }, [getResponseServices])

  return (
    <ContentCard className="p-5 col-span-2 col-start-2">
      <div className="mb-3">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Tiempos de Servicio</h1>

          <AlarmClock className="text-green-600" />
        </div>

        <span className="text-sm text-gray-600 font-medium">
          Desglose de tiempos promedio por etapa
        </span>
      </div>

      <div className="flex flex-col gap-2.5">
        {loading ? (
          <Loader />
        ) : error ? (
          <div className="flex items-center justify-center">
            <p>{error}</p>
          </div>
        ) : (
          timesServices && (
            <>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium leading-none">
                    Tiempo de Respuesta
                  </p>
                  <p className="text-sm text-gray-500 font-medium leading-none">
                    Desde la alerta hasta la llegada
                  </p>
                </div>

                <div className="ml-auto font-medium flex items-center gap-2">
                  <Timer className="size-4 text-sky-600" />
                  {timesServices.averageResponseTime?.tiempo_respuesta ? (
                    formatTime(
                      timesServices.averageResponseTime?.tiempo_respuesta ||
                        '0:00'
                    )
                  ) : (
                    <Skeleton className="w-[91px] h-6" />
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium leading-none">Tiempo de Control</p>
                  <p className="text-sm text-gray-500 font-medium leading-none">
                    Desde la llegada hasta el control
                  </p>
                </div>

                <div className="ml-auto font-medium flex items-center gap-2">
                  <Timer className="size-4 text-purple-600" />
                  {timesServices.averageControlTime?.tiempo_control ? (
                    formatTime(
                      timesServices.averageControlTime?.tiempo_control || '0:00'
                    )
                  ) : (
                    <Skeleton className="w-[91px] h-6" />
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium leading-none">Tiempo Total</p>
                  <p className="text-sm text-gray-500 font-medium leading-none">
                    Duración completa del servicio
                  </p>
                </div>

                <div className="ml-auto font-medium flex items-center gap-2">
                  <Timer className="size-4 text-purple-600" />
                  {timesServices.overallAverageTime?.tiempo_total ? (
                    formatTime(
                      timesServices.overallAverageTime?.tiempo_total || '0:00'
                    )
                  ) : (
                    <Skeleton className="w-[91px] h-6" />
                  )}
                </div>
              </div>
            </>
          )
        )}
      </div>
    </ContentCard>
  )
}
