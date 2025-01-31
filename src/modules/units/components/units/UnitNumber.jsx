import { Truck } from '../../../core/components/sidebar/Icons'

export default function UnitNumber({ number, noHash, xl }) {
  return (
    <div className="flex items-center gap-1 text-gray-700">
      <Truck />
      <span className={`${xl ? 'text-xl' : 'text-base'} font-medium`}>
        Unidad {noHash ? '' : '#'}
        {number}
      </span>
    </div>
  )
}
