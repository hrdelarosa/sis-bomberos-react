interface Props<T> {
  data: T[]
  isActive: (item: T) => boolean
}

export default function useCalculateStatisticsGeneric<T>({
  data,
  isActive,
}: Props<T>) {
  const activeItems = data.filter(isActive)
  const activePercentage =
    data.length > 0 ? Math.round((activeItems.length / data.length) * 100) : 0

  return { activeItems, activePercentage, total: data.length }
}
