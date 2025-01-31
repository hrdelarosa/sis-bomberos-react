import { capitalLetter } from '../../../core/lib/firstCapitalLetter'
import { Check } from '../Icons'

import Input from '../../../core/components/UI/Input'

export default function ItemPersonal({
  persona,
  selectedPersonal,
  togglePersonalSelection,
}) {
  return (
    <li
      key={persona.id}
      className={`flex gap-2 items-center py-2.5 px-3.5 select-none cursor-pointer hover:bg-fireYellow-50 ${
        selectedPersonal.includes(persona.id) && 'bg-fireYellow-50/60'
      } first:pt-0 last:pb-0`}
    >
      <label
        htmlFor={persona.id}
        className="flex items-center justify-between w-full gap-2 cursor-pointer"
      >
        <Input
          id={persona.id}
          type="checkbox"
          checked={selectedPersonal.includes(persona.id)}
          onChange={() => togglePersonalSelection(persona.id)}
          className="size-4 peer hidden"
        />
        <div className="flex flex-col">
          <span className="font-medium">
            {`${persona.per_nombres} ${persona.per_apellidos}`}
          </span>
          <small className="text-xs text-gray-500">
            {`${persona.per_np} - ${capitalLetter(persona.ran_nombre)}`}
          </small>
        </div>

        <div className="peer-checked:block hidden text-fireRed-800">
          <Check size="size-5" />
        </div>
      </label>
    </li>
  )
}
