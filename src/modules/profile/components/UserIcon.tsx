import { CircleUser } from 'lucide-react'
import { getInitials } from '../utils/getInitials'

interface Props {
  name: string | undefined
}

export default function UserIcon({ name }: Props) {
  return (
    <div className="relative shrink-0 mb-2.5">
      <div className="size-20 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center text-lg font-semibold">
        {name ? getInitials({ name }) : 'AA'}
      </div>

      <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full">
        <CircleUser className="size-4" />
      </div>
    </div>
  )
}
