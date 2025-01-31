import { API, PATH_API_USERS } from '../../core/constants/pathsApi'

export async function getAllUsersRequest() {
  try {
    const res = await fetch(`${API}${PATH_API_USERS.users}`, {
      method: 'GET',
      credentials: 'include',
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.message || 'Error al obtner los usuarios'
      throw new Error(errorData)
    }

    return data
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : 'Error desconocido al obtener los usuarios'
    )
  }
}

export async function deleteUserByIdRequest({ id }) {
  try {
    const res = await fetch(`${API}${PATH_API_USERS.deleteUsers}/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    })

    if (!res.ok) {
      const errorData =
        (await res.json()).message || 'Error al eliminar el usuario'
      throw new Error(errorData)
    }

    return res
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : 'Error desconocido al eliminar el usuario'
    )
  }
}

export async function updateUserRequest({ id, input }) {
  try {
    const res = await fetch(`${API}${PATH_API_USERS.updateUsers}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(input),
    })

    if (!res.ok) {
      const errorData =
        (await res.json().message) || 'Error al actualizar el usuario'
      throw new Error(errorData)
    }

    return res
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : 'Error desconocido al actualizar el usuario'
    )
  }
}
