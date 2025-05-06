import { Rank } from '../types/RanksTypes'
import { Personnel } from '../types/PersonnelTypes'

export function calculateStatisticsRanks({
  ranks,
  personnel,
}: {
  ranks: Rank[]
  personnel: Personnel[]
}) {
  const ranksWithUnitPersonnel = ranks.map((rank) => {
    const relatedRanks = personnel.filter(
      (person) => person.ran_nombre === rank.ran_nombre
    )
    const totalRanks = relatedRanks.length
    const activeRanks = relatedRanks.filter(
      (rank) => rank.est_nombre === 'activo'
    ).length
    const activePercentage =
      totalRanks > 0
        ? parseFloat(((activeRanks / totalRanks) * 100).toFixed(2))
        : 0

    return {
      ...rank,
      totalRanks,
      activeRanks,
      activePercentage,
    }
  })

  return { ranksWithUnitPersonnel }
}
