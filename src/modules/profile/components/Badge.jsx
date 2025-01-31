import { capitalLetter } from '../../core/lib/firstCapitalLetter'
import { useColorBadge } from '../hooks/useColorsBadge'

export default function Badge({ text }) {
  const { randomColorClass } = useColorBadge()

  return (
    <span
      className={`py-1 px-2.5 text-xs font-medium rounded-lg ${
        text === 'administrador'
          ? 'bg-fireYellow-400 text-gray-800'
          : randomColorClass
      }`}
    >
      {capitalLetter(text)}
    </span>
  )
}
