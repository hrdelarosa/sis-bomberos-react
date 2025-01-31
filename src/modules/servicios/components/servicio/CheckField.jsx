import { capitalLetter } from '../../../core/lib/firstCapitalLetter'
import { Check } from '../Icons'

export default function CheckField({ incident, text }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`grid place-content-center size-6 rounded-md ${
          incident ? 'bg-green-100' : 'bg-gray-200'
        }`}
      >
        {incident && <Check />}
      </div>
      <p className={incident && 'font-semibold'}>{capitalLetter(text)}</p>
    </div>
  )
}
