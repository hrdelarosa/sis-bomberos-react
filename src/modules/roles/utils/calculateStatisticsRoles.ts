import { Role } from '../types/RolesTypes'
import { User } from '../../users/types/UsersTypes'

export default function calculateStatisticsRoles({
  roles,
  users,
}: {
  roles: Role[]
  users: User[]
}) {
  const rolesWithUserStats = roles.map((rol) => {
    const relatedUser = users.filter(
      (user) => user.rol_nombre === rol.rol_nombre
    )
    const totalUsers = relatedUser.length
    const activeUsers = relatedUser.filter(
      (user) => user.est_nombre === 'activo'
    ).length
    const activePercentage =
      totalUsers > 0 ? (activeUsers / totalUsers) * 100 : 0

    return {
      ...rol,
      totalUsers,
      activeUsers,
      activePercentage,
    }
  })

  return { rolesWithUserStats }
}
