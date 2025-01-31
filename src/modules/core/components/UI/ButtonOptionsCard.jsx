import { PointsVertical } from '../Icons'

export default function ButtomOptionsCard({ handleMenuToggle, ...props }) {
  return (
    <div onClick={(e) => e.stopPropagation()} className="relative">
      <button
        onClick={handleMenuToggle}
        className={`absolute ${props.className} hover:-rotate-90 transition-transform duration-300 ease-in-out`}
      >
        <PointsVertical />
      </button>
    </div>
  )
}
