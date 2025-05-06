import { BadgeX, CircleCheckBig } from 'lucide-react'
import { useColorBadge } from '../../hooks/useColorsBadge'
import { BadgeType } from '../../types/BadgeTypes'
import { firstCapitalLetter } from '../../../core/utils/firstCapital'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  type?: BadgeType
  text: string
}

export default function Badge({ type = 'normal', text, ...props }: Props) {
  const { randomColorClass } = useColorBadge({ text })

  return (
    <>
      {type === 'role' ? (
        <div
          className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 select-none ${props.className} ${randomColorClass}`}
        >
          {firstCapitalLetter(text)}
        </div>
      ) : type === 'verified' ? (
        <div
          className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 select-none ${
            text === 'verificado'
              ? 'text-blue-700 border-blue-300 hover:bg-blue-50'
              : 'text-gray-600 border-gray-300 hover:bg-gray-100'
          }`}
        >
          {text === 'verificado' ? (
            <CircleCheckBig className="size-3" />
          ) : (
            <BadgeX className="size-3" />
          )}
          {firstCapitalLetter(text)}
        </div>
      ) : (
        <div
          className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent select-none ${
            props.className
          } ${
            text === 'activo'
              ? 'bg-green-100 text-green-800 hover:bg-green-200'
              : 'bg-red-100 text-red-800 hover:bg-red-200'
          }`}
        >
          {firstCapitalLetter(text)}
        </div>
      )}
    </>
  )
}
