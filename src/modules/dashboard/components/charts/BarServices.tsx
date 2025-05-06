import { useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import { firstCapitalLetter } from '../../../core/utils/firstCapital'
import { incidentColors } from '../../constants/colorsIncident'
import dashboardStore from '../../states/dashboardStore'
import ContentCard from '../../../core/components/ui/ContentCard'

export default function BarServices() {
  const { summary, getSummaryIncident } = dashboardStore()

  const labels = summary.perIncident.map((incident) =>
    firstCapitalLetter(incident.incidente)
  )
  const data = summary.perIncident.map((incident) => incident.cantidad)

  const backgroundColor = summary.perIncident.map(
    (incident) =>
      incidentColors[incident.incidente as keyof typeof incidentColors] ||
      incidentColors.otro
  )

  const summaryData = {
    labels,
    datasets: [
      {
        label: 'Cantidad de Servicios',
        data,
        backgroundColor,
      },
    ],
  }

  useEffect(() => {
    getSummaryIncident()
  }, [getSummaryIncident])

  return (
    <ContentCard className="p-5 col-span-2 col-start-1">
      <h1 className="text-2xl font-semibold mb-3">Resumen de Servicios</h1>

      <div className="h-[277px] flex items-center justify-center">
        <Bar
          data={summaryData}
          options={{
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'top',
              },
              tooltip: {
                callbacks: {
                  label: function (context) {
                    return `Cantidad: ${context.raw} de ${summary.total} servicios`
                  },
                },
              },
            },
            scales: {
              x: {
                title: {
                  display: true,
                  font: {
                    size: 13,
                    weight: 'bolder',
                  },
                  text: `Total de servicios: ${summary.total}`,
                },
              },
            },
          }}
        />
      </div>
    </ContentCard>
  )
}
