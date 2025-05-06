import { Check } from 'lucide-react'
import { firstCapitalLetter } from '../../../core/utils/firstCapital'
import { Personnel } from '../../../personnel/types/PersonnelTypes'

interface Props {
  persona: Personnel
  checked: boolean
  togglePersonalSelection: ({ personnel }: { personnel: Personnel }) => void
}

export default function ItemPersonal({
  persona,
  checked,
  togglePersonalSelection,
}: Props) {
  return (
    <label
      htmlFor={`per-${persona.per_id}`}
      className={`flex items-center justify-between gap-2 py-2 px-3 w-full hover:bg-gray-100 ${
        checked && 'bg-primary-yellow/5 hover:bg-primary-yellow/15'
      } cursor-pointer select-none`}
    >
      <input
        id={`per-${persona.per_id}`}
        type="checkbox"
        checked={checked}
        onChange={() => togglePersonalSelection({ personnel: persona })}
        className="size-4 peer hidden"
      />
      <div className="flex flex-col">
        <span className="font-medium">
          {`${persona.per_nombres} ${persona.per_apellidos}`}
        </span>
        <small className="text-xs text-gray-500">
          {`${persona.per_np} - ${firstCapitalLetter(persona.ran_nombre)}`}
        </small>
      </div>

      <div className="peer-checked:block hidden text-fireRed-800">
        <Check className="size-4" />
      </div>
    </label>
  )
}
