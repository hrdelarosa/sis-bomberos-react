import { ArrowDown, ArrowUp, FireExtinguisher } from 'lucide-react'
import dashboardStore from '../../states/dashboardStore'
import { useEffect } from 'react'
import ContentCard from '../../../core/components/ui/ContentCard'

export default function ServicesMonth() {
  const { servicesMonthly, getServicesMonthly } = dashboardStore()

  useEffect(() => {
    getServicesMonthly()
  }, [getServicesMonthly])

  return (
    <ContentCard className="p-5 col-span-1 col-start-3 row-start-4">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-2xl font-semibold">Servicios Mensuales</h1>

        <FireExtinguisher className="text-red-700" />
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-3xl font-bold">
          {servicesMonthly.currentMonth}
        </span>

        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-500 font-semibold text-muted-foreground">
            Mes anterior: {servicesMonthly.previousMonth}
          </p>
          <div
            className={`flex items-center ${
              servicesMonthly.porcentaje > 0
                ? 'text-emerald-500'
                : 'text-red-600'
            } text-sm font-medium`}
          >
            {servicesMonthly.porcentaje > 0 ? (
              <ArrowUp className="size-3" />
            ) : (
              <ArrowDown className="size-3" />
            )}
            {servicesMonthly.porcentaje}%
          </div>
        </div>
      </div>
    </ContentCard>
  )
}
