import { capitalLetter } from '../../../core/lib/firstCapitalLetter'

export default function PersonalMiniCard({ name, rank }) {
  return (
    <div className="flex flex-col gap-px border-2 border-gray-300 py-1 px-2 rounded-lg">
      <p className="text-black font-medium truncate">{name}</p>
      <small className="text-xs text-gray-500 font-semibold">
        {capitalLetter(rank)}
      </small>
    </div>
  )
}
