import { ArrowDown, ArrowUp, Flame } from 'lucide-react'
import ContentCard from '../../../core/components/ui/ContentCard'
import { firstCapitalLetter } from '../../../core/utils/firstCapital'
import { useEffect } from 'react'
import dashboardStore from '../../states/dashboardStore'
import Skeleton from '../../../core/components/skeleton/ui/Skeleton'

export default function IncidenteMonth() {
  const {
    servicesMonthly,
    perIncidentMonthly,
    getServicesMonthly,
    getIncidentMonthly,
  } = dashboardStore()

  useEffect(() => {
    getServicesMonthly()
    getIncidentMonthly()
  }, [getIncidentMonthly, getServicesMonthly])

  return (
    <ContentCard className="p-5 col-start-1 row-start-2 col-span-1">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-lg font-semibold">Incidente Mensual</h1>

        <Flame className="size-5 text-orange-500" />
      </div>

      <div className="flex flex-col gap-3">
        <div>
          {perIncidentMonthly.mostCurrentMonth.incidente ? (
            <span className="text-2xl font-bold">
              {firstCapitalLetter(
                perIncidentMonthly.mostCurrentMonth.incidente
              )}
            </span>
          ) : (
            <Skeleton className="h-8 w-24" />
          )}
          <p className="text-xs text-gray-500 font-semibold">
            Cantidad: {perIncidentMonthly.mostCurrentMonth.cantidad}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-800 font-semibold">Mes anterior</p>
          {perIncidentMonthly.mostPreviousMonth.incidente ? (
            <span className="text-2xl font-bold">
              {firstCapitalLetter(
                perIncidentMonthly.mostPreviousMonth.incidente
              )}
            </span>
          ) : (
            <Skeleton className="h-8 w-20" />
          )}
          <p className="text-xs text-gray-500 font-semibold">
            Cantidad: {perIncidentMonthly.mostPreviousMonth.cantidad}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div
            className={`flex items-center ${
              servicesMonthly.porcentaje > 0
                ? 'text-emerald-500'
                : 'text-red-600'
            } text-xs font-medium`}
          >
            {servicesMonthly.porcentaje > 0 ? (
              <ArrowUp className="size-3" />
            ) : (
              <ArrowDown className="size-3" />
            )}
            {servicesMonthly.porcentaje}%
            <p className="ml-1 text-gray-600">respecto al mes anterior</p>
          </div>
        </div>
      </div>
    </ContentCard>
  )
}
