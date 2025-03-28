import { ChartLineIcon } from 'lucide-react'
import CardUnitInfo from './ui/CardTypeInfo'
import GetIcon from './ui/getIcon'
import { firstCapitalLetter } from '../../core/utils/firstCapital'
import { useEffect } from 'react'
import unitsStore from '../states/unitsStore'
import useCalculateStatistics from '../hooks/useCalculateStatisticsTypes'

export default function SectionTypeUnits() {
  const {
    units,
    getUnits,
    types,
    getTypeUnits,
    loadingTypes,
    error,
    errorTypes,
  } = unitsStore()
  const { activeUnits, activePercentage, unitsByType } = useCalculateStatistics(
    {
      units,
      types,
    }
  )

  useEffect(() => {
    getUnits()
    getTypeUnits()
  }, [getUnits, getTypeUnits])

  return (
    <div className="flex flex-col gap-4 items-center text-black">
      <CardUnitInfo
        title="Total de Unidades"
        total={units.length}
        active={activeUnits.length}
        activePercentage={activePercentage}
        icon={<ChartLineIcon className="size-8 text-indigo-600" />}
      />

      <div className="space-y-1.5">
        <div className="w-56 p-px">
          <div className="text-sm font-medium text-gray-700 text-center">
            <h3 className="">Tipos de Unidades</h3>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          {error && errorTypes ? (
            <div className="w-56 bg-primary-white-main rounded-lg">
              <div className="p-6 text-sm font-medium text-gray-600 text-center">
                <h3 className="">{errorTypes}</h3>
              </div>
            </div>
          ) : (
            unitsByType.length > 0 &&
            unitsByType.map(({ type, total, active, activePercentage }) => (
              <CardUnitInfo
                key={type}
                title={type}
                total={total}
                active={active}
                activePercentage={activePercentage}
                icon={<GetIcon type={type.toLowerCase()} size="size-7" />}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}
