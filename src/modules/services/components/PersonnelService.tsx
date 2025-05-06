import styles from '../styles/scrollPersonnelSelected.module.css'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Personnel } from '../../personnel/types/PersonnelTypes'

import ItemPersonal from './ui/ItemPersonal'

interface Props {
  children: React.ReactNode
  personnel: Personnel[]
  error: string | null
  selectedPersonal: number[]
  togglePersonalSelection: ({ personnel }: { personnel: Personnel }) => void
}

export default function PersonnelService({
  children,
  personnel,
  error,
  selectedPersonal,
  togglePersonalSelection,
}: Props) {
  const [animationParent] = useAutoAnimate()

  return (
    <div className="flex flex-col gap-1.5 h-full">
      {children}
      <div
        className={`divide-y divide-slate-200 ${styles.personnelSelected} overflow-y-auto`}
        ref={animationParent}
      >
        {error ? (
          <p className="text-sm font-semibold text-gray-600">{error}</p>
        ) : (
          personnel.map((persona) => (
            <ItemPersonal
              key={persona.per_id}
              persona={persona}
              checked={selectedPersonal.some((id) => id === persona.per_id)}
              togglePersonalSelection={togglePersonalSelection}
            />
          ))
        )}
      </div>
    </div>
  )
}
