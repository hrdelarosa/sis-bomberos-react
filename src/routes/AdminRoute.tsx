import { Navigate, Outlet, useLocation } from 'react-router-dom'
import authStore from '../modules/auth/states/authStore'
import Loader from '../modules/core/components/ui/Loader'

export default function AdminRoute() {
  const { isAuthenticated, user, loading } = authStore()
  const location = useLocation()

  if (loading) return <Loader />

  if (!isAuthenticated || !user)
    return <Navigate to="/login" state={{ from: location.pathname }} replace />

  if (user.rol_nombre !== 'administrador') return <Navigate to="/" replace />

  return <Outlet />
}
