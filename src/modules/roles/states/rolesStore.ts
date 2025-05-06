import { create } from 'zustand'
import { RolesStore } from '../types/RolesTypes'
import {
  createRoleRequest,
  deleteRoleRequest,
  getRolesRequest,
  updateRoleRequest,
} from '../services/rolesService'
import { toast } from 'sonner'

const rolesStore = create<RolesStore>((set, get) => ({
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

  createRole: async ({ input }) => {
    try {
      const res = await createRoleRequest({ input })
      const { message } = res

      toast.success(message)
      await rolesStore.getState().getRoles()
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)
        toast.error(message)
      }
    }
  },

  deleteRole: async ({ id }) => {
    try {
      const res = await deleteRoleRequest({ id })
      const { message } = res
      const currentRoles = get().roles

      set({ roles: currentRoles.filter((role) => role.rol_id !== id) })
      toast.success(message)
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)
        toast.error(message)
      }
    }
  },

  updateRole: async ({ id, input }) => {
    try {
      const res = await updateRoleRequest({ id, input })
      const { message } = res

      toast.success(message)
      await rolesStore.getState().getRoles()
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)
        toast.error(message)
      }
    }
  },
}))

export default rolesStore
