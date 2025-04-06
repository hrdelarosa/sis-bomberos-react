import { firstCapitalLetter } from '../utils/firstCapital'

interface Props<Item, Category> {
  items: Item[]
  categories: Category[]
  getCategoryName: (category: Category) => string
  getItemCategory: (item: Item) => string
  isActive: (item: Item) => boolean
  getState?: (category: Category) => string
  getCategoryId?: (category: Category) => number
}

export default function useCalculateStatisticsElement<Item, Category>({
  items,
  categories,
  getCategoryName,
  getItemCategory,
  isActive,
  getState,
  getCategoryId,
}: Props<Item, Category>) {
  const statistics = categories.map((category) => {
    const itemsOfCategory = items.filter(
      (item) => getItemCategory(item) === getCategoryName(category)
    )
    const activeItemsOfCategory = itemsOfCategory.filter(isActive)
    const activePercentage =
      itemsOfCategory.length > 0
        ? Math.round(
            (activeItemsOfCategory.length / itemsOfCategory.length) * 100
          )
        : 0

    const state = getState ? getState(category) : ''
    const id = getCategoryId ? getCategoryId(category) : ''

    return {
      id,
      category: firstCapitalLetter(getCategoryName(category)),
      total: itemsOfCategory.length,
      active: activeItemsOfCategory.length,
      activePercentage,
      state,
    }
  })

  return { statistics }
}
