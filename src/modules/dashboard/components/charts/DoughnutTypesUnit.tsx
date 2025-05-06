import { useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { firstCapitalLetter } from '../../../core/utils/firstCapital'
import { typesUnitColors } from '../../constants/typesUnitColors'
import { getRandomColor } from '../../utils/getRandomColor'
import dashboardStore from '../../states/dashboardStore'
import ContentCard from '../../../core/components/ui/ContentCard'

export default function DoughnutTypesUnit() {
  const { typesPorcentaje, getTypesPorcentaje } = dashboardStore()
  const labels = typesPorcentaje.map((type) => firstCapitalLetter(type.tipo))
  const data = typesPorcentaje.map((type) => type.porcentaje)
  const backgroundColor = typesPorcentaje.map(
    (type) =>
      typesUnitColors[type.tipo as keyof typeof typesUnitColors] ||
      getRandomColor()
  )

  const typesUnitData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor,
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  }

  useEffect(() => {
    getTypesPorcentaje()
  }, [getTypesPorcentaje])

  return (
    <ContentCard className="p-5 col-start-1 col-span-1 row-start-3">
      <div className="flex flex-col mb-5">
        <h1 className="text-2xl font-semibold">Tipos de Unidad</h1>
        <p className="text-sm text-gray-600 font-medium">
          Distribución de las unidades por el tipo
        </p>
      </div>
      <div className="h-[250px] flex items-center justify-center">
        <Doughnut
          data={typesUnitData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
          }}
        />
      </div>
    </ContentCard>
  )
}
