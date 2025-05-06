import { useEffect } from 'react'
import { toast } from 'sonner'
import authStore from '../../auth/states/authStore'
import servicesStore from '../../services/states/servicesStore'
import profileStore from '../state/profileStore'

export function useProfile() {
  const { user } = authStore()
  const { profile, getProfile, loadingProfile, errorProfile } = profileStore()
  const { services, getServicesByCreator, errorServices, loading } =
    servicesStore()

  useEffect(() => {
    if (user) {
      getProfile({ id: user.us_id })
      getServicesByCreator({ id: user.us_id })
    }
  }, [getProfile, user, getServicesByCreator])

  useEffect(() => {
    if (errorProfile) toast.error(errorProfile)
  }, [errorProfile])

  return { profile, loadingProfile, services, errorServices, loading }
}
