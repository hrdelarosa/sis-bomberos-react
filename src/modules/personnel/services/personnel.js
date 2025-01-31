import { API, PATH_API_PERSONAL } from '../../core/constants/pathsApi'

export async function createPersonalRequest({ input }) {
  try {
    const res = await fetch(`${API}${PATH_API_PERSONAL.createPersonnel}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(input),
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.error || 'Error al crear el personal'
      throw new Error(errorData)
    }

    return data
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : 'Error desconocido al crear el personal'
    )
  }
}

export async function deletePersonalRequest({ id }) {
  try {
    const res = await fetch(
      `${API}${PATH_API_PERSONAL.deletePersonnel}/${id}`,
      {
        method: 'DELETE',
        credentials: 'include',
      }
    )

    if (!res.ok) {
      const errorData =
        (await res.json().error) || 'Error al eliminar el personal'
      throw new Error(errorData)
    }

    return res
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : 'Error desconocido al eliminar el personal'
    )
  }
}

export async function getPersonalRequest() {
  try {
    const res = await fetch(`${API}${PATH_API_PERSONAL.personnel}`, {
      method: 'GET',
      credentials: 'include',
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.error || 'Error al obtner el personal'
      throw new Error(errorData)
    }

    return data
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : 'Error desconocido al obtener el personal'
    )
  }
}

export async function getPersonalGuardRequest({ id }) {
  try {
    const res = await fetch(`${API}${PATH_API_PERSONAL.personnelGuard}/${id}`, {
      method: 'GET',
      credentials: 'include',
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.error || 'Error al obtner el personal por guardia'
      throw new Error(errorData)
    }

    return data
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : 'Error desconocido al obtener el personal por guardia'
    )
  }
}

export async function getExcludePersonalGuardRequest({ id }) {
  try {
    const res = await fetch(
      `${API}${PATH_API_PERSONAL.excludePersonnelGuard}/${id}`,
      {
        method: 'GET',
        credentials: 'include',
      }
    )

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.error || 'Error al obtner el personal por guardia'
      throw new Error(errorData)
    }

    return data
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : 'Error desconocido al obtener el personal por guardia'
    )
  }
}

export async function updatePersonalGuardRequest({ id, input }) {
  try {
    const res = await fetch(`${API}${PATH_API_PERSONAL.updatePerGuard}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(input),
    })

    if (!res.ok) {
      const data = await res.json()
      const errorData = data.message || 'Error al actualizar la unidad'
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
