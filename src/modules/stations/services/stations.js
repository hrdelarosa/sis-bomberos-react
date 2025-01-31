import { API, PATH_API_STATIONS } from '../../core/constants/pathsApi'

export async function getAllStationsRequest() {
  try {
    const res = await fetch(`${API}${PATH_API_STATIONS.stations}`, {
      method: 'GET',
      credentials: 'include',
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.error || 'Error al obtner las estaciones'
      throw new Error(errorData)
    }

    return data
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : 'Error desconocido al obtener las estaciones'
    )
  }
}

export async function deleteStationsByIdRequest({ id }) {
  try {
    const res = await fetch(`${API}${PATH_API_STATIONS.deleteStations}/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    })

    if (!res.ok) {
      const errorData =
        (await res.json()).error || 'Error al eliminar la estación'
      throw new Error(errorData)
    }

    return res
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : 'Error desconocido al eliminar la estación'
    )
  }
}

export async function createStationsRequest({ input }) {
  try {
    const res = await fetch(`${API}${PATH_API_STATIONS.createStations}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(input),
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.error || 'Error al crear la estación'
      throw new Error(errorData)
    }

    return data
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : 'Error desconocido al eliminar la estación'
    )
  }
}
