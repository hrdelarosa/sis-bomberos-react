import { useEffect } from 'react'
import { Pie } from 'react-chartjs-2'
import { firstCapitalLetter } from '../../../core/utils/firstCapital'
import { incidentColors } from '../../constants/colorsIncident'
import dashboardStore from '../../states/dashboardStore'
import ContentCard from '../../../core/components/ui/ContentCard'

export default function PieServices() {
  const { incidentesPorcentajes, getPorcentajeIncidentes } = dashboardStore()
  const labels = incidentesPorcentajes.map((incident) =>
    firstCapitalLetter(incident.ser_incidente)
  )
  const data = incidentesPorcentajes.map((incident) => incident.porcentaje)
  const backgroundColor = incidentesPorcentajes.map(
    (incident) =>
      incidentColors[incident.ser_incidente as keyof typeof incidentColors] ||
      incidentColors.otro
  )

  const porcentajeData = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor,
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  }

  useEffect(() => {
    getPorcentajeIncidentes()
  }, [getPorcentajeIncidentes])

  return (
    <ContentCard className="p-5 col-start-3 col-span-1">
      <div className="flex flex-col mb-5">
        <h1 className="text-2xl font-semibold">Servicios</h1>
        <p className="text-sm text-gray-600 font-medium">
          Distribución por tipo de incidente
        </p>
      </div>
      <div className="h-[250px] flex items-center justify-center">
        <Pie
          data={porcentajeData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
          }}
        />
      </div>
    </ContentCard>
  )
}
