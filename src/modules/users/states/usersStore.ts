import { create } from 'zustand'
import { UsersStore } from '../types/UsersTypes'
import {
  deleteUserRequest,
  getUsersRequest,
  updateUserRequest,
} from '../services/usersService'
import { toast } from 'sonner'

const usersStore = create<UsersStore>((set, get) => ({
  users: [],
  loading: false,
  errorUsers: null,

  getUsers: async () => {
    set({ loading: true, errorUsers: null })

    try {
      const res = await getUsersRequest()
      const { users } = res

      set({ users, loading: false, errorUsers: null })
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)

        set({
          users: [],
          loading: false,
          errorUsers: message,
        })
      }
    }
  },

  deleteUser: async ({ id }) => {
    try {
      const res = await deleteUserRequest({ id })
      const { message } = res
      const currentUsers = get().users

      set({ users: currentUsers.filter((user) => user.us_id !== id) })
      toast.success(message)
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)
        toast.error(message)
      }
    }
  },

  updateUser: async ({ id, input }) => {
    try {
      const res = await updateUserRequest({ id, input })
      const { message } = res

      toast.success(message)
      await usersStore.getState().getUsers()
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message)
        toast.error(message)
      }
    }
  },
}))

export default usersStore
