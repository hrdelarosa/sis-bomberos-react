import { ChartLine } from 'lucide-react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  total: number
  active: number
  percentage: number
}

export default function GraphicChart({
  title,
  total,
  active,
  percentage,
  ...props
}: Props) {
  return (
    <div className={`flex items-center gap-5 ${props.className}`}>
      <div>
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        <div className="flex items-end gap-1.5">
          <p className="text-[22px] font-bold">{total}</p>
          <p className="text-xs text-gray-600 mb-1">
            {active} activas ({percentage}%)
          </p>
        </div>
      </div>
      <ChartLine className="size-8 text-gray-800" />
    </div>
  )
}
