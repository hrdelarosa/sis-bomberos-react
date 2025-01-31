import { API, PATH_API_STATES } from '../../core/constants/pathsApi'

export async function geAllStatesRequest() {
  try {
    const res = await fetch(`${API}${PATH_API_STATES.states}`, {
      method: 'GET',
      credentials: 'include',
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.error || 'Error al obtner las unidades'
      throw new Error(errorData)
    }

    return data
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : 'Error desconocido al obtener las unidades'
    )
  }
}
