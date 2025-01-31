import { create } from 'zustand'
import { toast } from 'sonner'
import {
  getAllUsersRequest,
  deleteUserByIdRequest,
  updateUserRequest,
} from '../services/users'

const useUsersStore = create((set, get) => ({
  users: [],
  loading: true,
  error: null,
  upgrade: false,

  getAllUsers: async () => {
    try {
      const res = await getAllUsersRequest()
      const { data } = res

      set({ users: data, loading: false })
    } catch (error) {
      if (error instanceof Error) set({ error: error.message })
    }
  },

  deleteUserById: async ({ id }) => {
    try {
      const res = await deleteUserByIdRequest({ id })
      const currerntUsers = get().users

      if (res.status === 204) {
        set({ users: currerntUsers.filter((unit) => unit.id !== id) })
        toast.success('Se ha eliminado el usuario')
      }
    } catch (error) {
      if (error instanceof Error) set({ error: error.message })
    }
  },

  updateUser: async ({ id, input }) => {
    try {
      const res = await updateUserRequest({ id, input })
      const currentUpgrade = get().upgrade

      if (res.status === 204)
        toast.success('Se ha actualizado el usuario', { duration: 3000 })
      set({ upgrade: !currentUpgrade })
    } catch (error) {
      if (error instanceof Error) set({ error: error.message })
    }
  },
}))

export default useUsersStore
