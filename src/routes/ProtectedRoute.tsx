import { Navigate, Outlet, useLocation } from 'react-router-dom'
import authStore from '../modules/auth/states/authStore'

import Loader from '../modules/core/components/ui/Loader'

export default function ProtectedRoute() {
  const { isAuthenticated, loading } = authStore()
  const location = useLocation()

  if (loading) return <Loader />

  if (!loading && !isAuthenticated) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />
  }

  return <Outlet />
}
