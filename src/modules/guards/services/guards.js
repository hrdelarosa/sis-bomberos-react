import { API, PATH_API_GUARDS } from '../../core/constants/pathsApi'

export async function getAllGuardiasRequest() {
  try {
    const res = await fetch(`${API}${PATH_API_GUARDS.guards}`, {
      method: 'GET',
      credentials: 'include',
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.error || 'Error al obtner las guardias'
      throw new Error(errorData)
    }

    return data
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : 'Error desconocido al obtener las guardias'
    )
  }
}

export async function deleteGuardiasByIdRequest({ id }) {
  try {
    const res = await fetch(`${API}${PATH_API_GUARDS.deleteGuards}/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    })

    if (!res.ok) {
      const errorData =
        (await res.json()).error || 'Error al eliminar la guardia'
      throw new Error(errorData)
    }

    return res
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : 'Error desconocido al eliminar la guardia'
    )
  }
}

export async function createGuardiasRequest({ input }) {
  try {
    const res = await fetch(`${API}${PATH_API_GUARDS.createGuards}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(input),
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.error || 'Error al crear la guardia'
      throw new Error(errorData)
    }

    return data
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : 'Error desconocido al eliminar la guardia'
    )
  }
}
