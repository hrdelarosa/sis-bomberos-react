import { ChartLine } from 'lucide-react'
import BadgeState from '../../../core/components/ui/BadgeState'

interface Props {
  title: string
  state: string
  total: number
  active: number
  activePercentage: number
  icon: React.ReactNode
}

export default function CardTypeInfo({
  title,
  state,
  total,
  active,
  activePercentage,
  icon,
}: Props) {
  return (
    <div className="bg-primary-white-main rounded-lg">
      <div className="flex items-center justify-between p-6 pb-2 text-lg font-medium text-gray-600">
        <h3 className="">{title}</h3>
        <BadgeState state={state} />
      </div>

      <div className="flex items-center justify-between p-6 pt-0">
        <div>
          <p className="text-2xl font-bold">{total}</p>
          <p className="text-sm text-gray-600">
            {active} activas ({activePercentage}%)
          </p>
        </div>
        {icon || <ChartLine className="size-8 text-indigo-600" />}
      </div>
    </div>
  )
}
