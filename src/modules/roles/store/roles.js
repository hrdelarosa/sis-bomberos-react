import { create } from 'zustand'
import {
  getAllRolesRequest,
  deleteRolesByIdRequest,
  createRolesRequest,
} from '../services/roles'
import { toast } from 'sonner'

const useRoleStore = create((set, get) => ({
  roles: [],
  loading: true,
  error: null,
  upgrade: false,

  getAllRoles: async () => {
    try {
      const res = await getAllRolesRequest()
      const { data } = res

      set({ roles: data, loading: false })
    } catch (error) {
      if (error instanceof Error) set({ error: error.message })
    }
  },

  deleteRoleById: async ({ id }) => {
    try {
      const res = await deleteRolesByIdRequest({ id })
      const currerntRoles = get().roles

      if (res.status === 204) {
        set({
          roles: currerntRoles.filter((role) => role.id !== id),
        })
        toast.success('Se ha eliminado el role')
      }
    } catch (error) {
      if (error instanceof Error) set({ error: error.message })
    }
  },

  createRole: async ({ input }) => {
    try {
      const res = await createRolesRequest({ input })
      const { message, data } = res
      const currentUpgrade = get().upgrade

      toast.success(`${message}. Role: ${data.rol}`)
      set({ upgrade: !currentUpgrade })
    } catch (error) {
      if (error instanceof Error) {
        set({ error: error.message })
        if (error.message === 'El rol duplicado, este ya se ha creado')
          toast.error(error.message, { duration: 3000 })
      }
    }
  },
}))

export default useRoleStore
