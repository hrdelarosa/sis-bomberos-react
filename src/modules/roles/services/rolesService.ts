import { apiURL, pathsAPIURL } from '../../core/constants/pathsApi'
import { CreateRoleInputs, UpdateRoleInputs } from '../types/RolesTypes'

export async function getRolesRequest() {
  try {
    const res = await fetch(`${apiURL}${pathsAPIURL.roles.get}`, {
      method: 'GET',
      credentials: 'include',
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.message || [
        { message: data.message || 'Error al obtener los roles' },
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
        : 'Error desconocido al obtener los roles'
    )
  }
}

export async function createRoleRequest({
  input,
}: {
  input: CreateRoleInputs
}) {
  try {
    const res = await fetch(`${apiURL}${pathsAPIURL.roles.create}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.message || [
        { message: data.message || 'Error al crear el rol' },
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
        : 'Error desconocido al crear el rol'
    )
  }
}

export async function deleteRoleRequest({ id }: { id: number }) {
  try {
    const res = await fetch(`${apiURL}${pathsAPIURL.roles.delete}${id}`, {
      method: 'DELETE',
      credentials: 'include',
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.message || [
        { message: data.message || 'Error al eliminar el role' },
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
        : 'Error desconocido al eliminar el role'
    )
  }
}

export async function updateRoleRequest({
  id,
  input,
}: {
  id: number
  input: UpdateRoleInputs
}) {
  try {
    const res = await fetch(`${apiURL}${pathsAPIURL.roles.update}${id}`, {
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
        { message: data.message || 'Error al actualizar el rol' },
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
        : 'Error desconocido al actualizar el rol'
    )
  }
}
