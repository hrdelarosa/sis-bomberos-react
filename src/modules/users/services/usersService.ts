import { apiURL, pathsAPIURL } from '../../core/constants/pathsApi'
import { UpdateUserInputs } from '../types/UsersTypes'

export async function getUsersRequest() {
  try {
    const res = await fetch(`${apiURL}${pathsAPIURL.users.get}`, {
      method: 'GET',
      credentials: 'include',
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.message || [
        { message: data.message || 'Error al obtener los usuarios' },
      ]
      throw new Error(
        JSON.stringify({ message: data.message, errors: errorData })
      )
    }

    return data
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message === 'Failed to fetch'
          ? JSON.stringify({ message: error.message })
          : error.message
        : 'Error desconocido al obtener los usuarios'
    )
  }
}

export async function deleteUserRequest({ id }: { id: number }) {
  try {
    const res = await fetch(`${apiURL}${pathsAPIURL.users.delete}${id}`, {
      method: 'DELETE',
      credentials: 'include',
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.message || [
        { message: data.message || 'Error al eliminar el usuario' },
      ]
      throw new Error(
        JSON.stringify({ message: data.message, errors: errorData })
      )
    }

    return data
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message === 'Failed to fetch'
          ? JSON.stringify({ message: error.message })
          : error.message
        : 'Error desconocido al eliminar el usuario'
    )
  }
}

export async function updateUserRequest({
  id,
  input,
}: {
  id: number
  input: UpdateUserInputs
}) {
  try {
    const res = await fetch(`${apiURL}${pathsAPIURL.users.update}${id}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.message || [
        { message: data.message || 'Error al actualizar el usuario' },
      ]
      throw new Error(
        JSON.stringify({ message: data.message, errors: errorData })
      )
    }

    return data
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message === 'Failed to fetch'
          ? JSON.stringify({ message: error.message })
          : error.message
        : 'Error desconocido al actualizar el usuario'
    )
  }
}
