import { create } from 'zustand'
import { UsersStore } from '../types/UsersTypes'
import { getUsersRequest } from '../services/usersService'

const usersStore = create<UsersStore>((set) => ({
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
}))

export default usersStore
