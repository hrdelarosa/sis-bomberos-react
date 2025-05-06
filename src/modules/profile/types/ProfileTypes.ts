import { User } from '../../users/types/UsersTypes'

export interface Profile extends Omit<User, 'total_servicios'> {
  servicios_creados: number
}

export interface ProfileStore {
  profile: Profile | null
  loadingProfile: boolean
  errorProfile: string | null
  getProfile: ({ id }: GetProfile) => Promise<void>
}

export interface GetProfile {
  id: number
}
