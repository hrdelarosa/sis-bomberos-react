import { timelineService } from '../../constants/timesService'
import { TimelineType } from '../../types/TimelineTypes'

interface Props {
  type: TimelineType
  time: string
  totalTime?: string
}

export default function TimelineItem({ type, time, totalTime }: Props) {
  const Icon = timelineService[type].icon

  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-0 bg-white p-1 rounded-full z-10">
        <Icon className="size-4" />
      </div>

      <div>
        <div className="flex justify-between items-center">
          <h4 className="text-sm font-medium">{timelineService[type].title}</h4>
          <span className="text-sm font-mono">{time.substring(0, 5)}</span>
        </div>
        <p className="text-xs text-gray-500">{timelineService[type].sub}</p>
        <div className="mt-1.5 text-xs text-gray-400 flex items-center">
          {type !== 'base' && (
            <span className="bg-gray-100 px-2 py-0.5 rounded">{totalTime}</span>
          )}
        </div>
      </div>
    </div>
  )
}
