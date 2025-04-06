import { create } from 'zustand'
import { RolesStore } from '../types/RolesTypes'
import { getRolesRequest } from '../services/rolesService'

const rolesStore = create<RolesStore>((set) => ({
  roles: [],
  loading: false,
  errorRoles: null,

  getRoles: async () => {
    set({ loading: true, errorRoles: null })

    try {
      const res = await getRolesRequest()
      const { roles } = res

      set({ roles, loading: false, errorRoles: null })
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)

        set({
          roles: [],
          loading: false,
          errorRoles: message,
        })
      }
    }
  },
}))

export default rolesStore
