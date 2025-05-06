import { apiURL, pathsAPIURL } from '../../core/constants/pathsApi'
import { GetProfile } from '../types/ProfileTypes'

export async function profileRequest({ id }: GetProfile) {
  try {
    const res = await fetch(`${apiURL}${pathsAPIURL.profile.get}${id}`, {
      method: 'GET',
      credentials: 'include',
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.errors || [
        { message: data.message || 'Error al obtener el perfil' },
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
        : 'Error desconocido al obtener el perfil'
    )
  }
}
