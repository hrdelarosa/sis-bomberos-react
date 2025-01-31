import { verifiedUser } from '../constants/verifiedUser'

export default function StatusBadge({ verified }) {
  return (
    <div className="flex items-center gap-1.5">
      <div
        className={`grid place-content-center size-3.5 rounded-full ${
          verified ? 'bg-green-200/30' : 'bg-red-200/30'
        }`}
      >
        <div
          className={`size-1.5 rounded-full ${
            verified ? 'bg-green-400' : 'bg-red-500'
          }`}
        ></div>
      </div>
      <span className="text-sm">
        {verified ? verifiedUser.completado : verifiedUser.pendiente}
      </span>
    </div>
  )
}
