import { apiURL, pathsAPIURL } from '../../core/constants/pathsApi'

export async function getStationsRequest() {
  try {
    const res = await fetch(`${apiURL}${pathsAPIURL.stations.get}`, {
      method: 'GET',
      credentials: 'include',
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.message || [
        { message: data.message || 'Error al obtener las estaciones' },
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
        : 'Error desconocido al obtener las estaciones'
    )
  }
}
