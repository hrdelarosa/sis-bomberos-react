import { create } from 'zustand'
import { ProfileStore } from '../types/ProfileTypes'
import { toast } from 'sonner'
import { profileRequest } from '../services/profileService'

const profileStore = create<ProfileStore>((set) => ({
  profile: null,
  loadingProfile: false,
  errorProfile: null,

  getProfile: async ({ id }) => {
    set({ loadingProfile: true, errorProfile: null })

    try {
      const res = await profileRequest({ id })
      const { profile } = res

      set({ profile, loadingProfile: false, errorProfile: null })
    } catch (error) {
      set({ loadingProfile: false })
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)
        toast.error(message)

        set({ profile: null, errorProfile: message })
      }
    }
  },
}))

export default profileStore
