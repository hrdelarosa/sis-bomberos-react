import { useMemo } from 'react'

export function useColorBadge({ text }: { text?: string }) {
  const randomColorClass = useMemo(() => {
    if (text === 'administrador')
      return 'bg-yellow-100 text-black hover:bg-yellow-200 border-yellow-200'

    const colorClasses = [
      'bg-rose-100 text-rose-800 hover:bg-rose-200 border-rose-200',
      'bg-pink-100 text-pink-800 hover:bg-pink-200 border-pink-200',
      'bg-fuchsia-100 text-fuchsia-800 hover:bg-fuchsia-200 border-fuchsia-200',
      'bg-violet-100 text-violet-800 hover:bg-violet-200 border-violet-200',
      'bg-indigo-100 text-indigo-800 hover:bg-indigo-200 border-indigo-200',
      'bg-sky-100 text-sky-800 hover:bg-sky-200 border-sky-200',
      'bg-cyan-100 text-cyan-800 hover:bg-cyan-200 border-cyan-200',
      'bg-teal-100 text-teal-800 hover:bg-teal-200 border-teal-200',
      'bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border-emerald-200',
      'bg-lime-100 text-lime-800 hover:bg-lime-200 border-lime-200',
      'bg-amber-100 text-amber-800 hover:bg-amber-200 border-amber-200',
    ]

    const randomIndex = Math.floor(Math.random() * colorClasses.length)
    return colorClasses[randomIndex]
  }, [text])

  return { randomColorClass }
}
