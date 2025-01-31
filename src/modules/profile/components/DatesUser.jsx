import { CreateCalendar, UpdateArrows } from './Icons'

export default function DatesUSer({ creado, actualizacion }) {
  return (
    <div className="flex flex-col items-end gap-5">
      <div className="flex flex-col gap-px">
        <small className="text-xs text-gray-500 font-medium">
          Fecha de cracion
        </small>

        <div className="flex items-center justify-end gap-1.5">
          <CreateCalendar />
          <span className="text-sm font-semibold">
            {new Date(creado).toLocaleDateString()}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-px">
        <small className="text-xs text-gray-500 font-medium">
          Ultima actualización
        </small>

        <div className="flex items-center justify-end gap-1.5">
          <UpdateArrows />
          <span className="text-sm font-semibold">
            {new Date(actualizacion).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  )
}
