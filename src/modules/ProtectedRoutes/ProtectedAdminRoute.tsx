import { Navigate, Outlet } from 'react-router-dom'
import useAuthStore from '../modules/auth/store/auth'
import Loading from '../UI/Loading'
import { UserRoles } from '../modules/core/utils/userType'

export default function ProtecteAdmindRoute() {
  const { user, isAuthenticated, loading } = useAuthStore()

  if (loading) return <Loading />
  if (!loading && !isAuthenticated) return <Navigate to="/login" replace />
  if (!loading && user?.rol_nombre !== UserRoles.ADMINISTRADOR)
    return <Navigate to="/" replace />

  return <Outlet />
}
