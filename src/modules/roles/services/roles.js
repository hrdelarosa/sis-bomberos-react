import { API, PATH_API_ROLES } from '../../core/constants/pathsApi'

export async function getAllRolesRequest() {
  try {
    const res = await fetch(`${API}${PATH_API_ROLES.roles}`, {
      method: 'GET',
      credentials: 'include',
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.error || 'Error al obtner los roles'
      throw new Error(errorData)
    }

    return data
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : 'Error desconocido al obtener los roles'
    )
  }
}

export async function deleteRolesByIdRequest({ id }) {
  try {
    const res = await fetch(`${API}${PATH_API_ROLES.deleteRoles}/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    })

    if (!res.ok) {
      const errorData = (await res.json()).error || 'Error al eliminar el role'
      throw new Error(errorData)
    }

    return res
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : 'Error desconocido al eliminar el role'
    )
  }
}

export async function createRolesRequest({ input }) {
  try {
    const res = await fetch(`${API}${PATH_API_ROLES.createRoles}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(input),
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.error || 'Error al crear el role'
      throw new Error(errorData)
    }

    return data
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : 'Error desconocido al eliminar el role'
    )
  }
}
