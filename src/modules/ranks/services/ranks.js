import { API, PATH_API_RANKS } from '../../core/constants/pathsApi'

export async function createRankRequest({ input }) {
  try {
    const res = await fetch(`${API}${PATH_API_RANKS.createRanks}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(input),
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.error || 'Error al crear el rango'
      throw new Error(errorData)
    }

    return data
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : 'Error desconocido al crear el rango'
    )
  }
}

export async function deleteRankRequest({ id }) {
  try {
    const res = await fetch(`${API}${PATH_API_RANKS.deleteRanks}/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    })

    if (!res.ok) {
      const errorData =
        (await res.json().message) || 'Error al eliminar el rango'
      throw new Error(errorData)
    }

    return res
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : 'Error desconocido al eliminar el rango'
    )
  }
}

export async function getRanksRequest() {
  try {
    const res = await fetch(`${API}${PATH_API_RANKS.ranks}`, {
      method: 'GET',
      credentials: 'include',
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.error || 'Error al obtner los rangos'
      throw new Error(errorData)
    }

    return data
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : 'Error desconocido al obtener los rangos'
    )
  }
}
