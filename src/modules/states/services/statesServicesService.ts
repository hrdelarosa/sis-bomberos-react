import { apiURL, pathsAPIURL } from '../../core/constants/pathsApi'

export async function getStatesServiceRequest() {
  try {
    const res = await fetch(`${apiURL}${pathsAPIURL.states.getService}`, {
      method: 'GET',
      credentials: 'include',
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.errors || [
        {
          message:
            data.message || 'Error al obtener los estados de los servicios',
        },
      ]
      throw new Error(
        JSON.stringify({ message: data.message, errors: errorData })
      )
    }

    return data
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? JSON.stringify({ message: error.message })
        : 'Error desconocido al obtener los estados de los servicios'
    )
  }
}
