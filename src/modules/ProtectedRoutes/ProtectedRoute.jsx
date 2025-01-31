import { Navigate, Outlet } from 'react-router-dom'
import useAuthStore from '../auth/store/auth'
import Loading from '../core/components/UI/Loading'

export default function ProtectedRoute() {
  const { isAuthenticated, loading } = useAuthStore()

  if (loading) return <Loading />
  if (!loading && !isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}
