import { Bar } from 'react-chartjs-2'
import ContentCard from '../../../core/components/ui/ContentCard'
import dashboardStore from '../../states/dashboardStore'
import { firstCapitalLetter } from '../../../core/utils/firstCapital'
import { useEffect } from 'react'

export default function BarUnits() {
  const { statusUnits, getUnitStatus } = dashboardStore()
  const labels = statusUnits.map((unit) => firstCapitalLetter(unit.tipo))
  const dataActive = statusUnits.map((unit) => parseInt(unit.activas))
  const dataInactive = statusUnits.map(
    (unit) => unit.total - parseInt(unit.activas)
  )
  const statusData = {
    labels,
    datasets: [
      {
        label: 'Activas',
        data: dataActive,
        backgroundColor: '#16A34A',
      },
      {
        label: 'Inactivas',
        data: dataInactive,
        backgroundColor: '#c10007',
      },
    ],
  }

  useEffect(() => {
    getUnitStatus()
  }, [getUnitStatus])

  return (
    <ContentCard className="p-5 col-span-2 col-start-2 row-start-3">
      <h1 className="text-2xl font-semibold mb-3">Estado de las Unidades</h1>

      <div className="h-[277px] flex items-center justify-center">
        <Bar
          data={statusData}
          options={{
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'top',
              },
            },
          }}
        />
      </div>
    </ContentCard>
  )
}
