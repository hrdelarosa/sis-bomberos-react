import { useMemo } from 'react'

export function useColorBadge() {
  const randomColorClass = useMemo(() => {
    const colorClasses = [
      'bg-red-500 text-white',
      'bg-green-500 text-white',
      'bg-blue-500 text-white',
      'bg-yellow-500 text-black',
      'bg-purple-500 text-white',
      'bg-pink-500 text-white',
      'bg-gray-500 text-white',
    ]

    const randomIndex = Math.floor(Math.random() * colorClasses.length)
    return colorClasses[randomIndex]
  }, [])

  return { randomColorClass }
}
