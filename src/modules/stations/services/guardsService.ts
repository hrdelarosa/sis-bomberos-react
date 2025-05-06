import { apiURL, pathsAPIURL } from '../../core/constants/pathsApi'
import { CreateGuardInputs } from '../types/GuardsTypes'

export async function getGuardsUnitRequest() {
  try {
    const res = await fetch(`${apiURL}${pathsAPIURL.stations.guards.get}`, {
      method: 'GET',
      credentials: 'include',
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.message || [
        { message: data.message || 'Error al obtener las guardias' },
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
        : 'Error desconocido al obtener las guardias'
    )
  }
}

export async function createGuardRequest({
  input,
}: {
  input: CreateGuardInputs
}) {
  try {
    const res = await fetch(`${apiURL}${pathsAPIURL.stations.guards.create}`, {
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
        { message: data.message || 'Error al crear la guardia' },
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
        : 'Error desconocido al crear la guardia'
    )
  }
}

export async function deleteGuardRequest({ id }: { id: number }) {
  try {
    const res = await fetch(
      `${apiURL}${pathsAPIURL.stations.guards.delete}${id}`,
      {
        method: 'DELETE',
        credentials: 'include',
      }
    )

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.message || [
        { message: data.message || 'Error al eliminar la guardia' },
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
        : 'Error desconocido al eliminar la guardia'
    )
  }
}

export async function getGuardByStationRequest({ id }: { id: number }) {
  try {
    const res = await fetch(
      `${apiURL}${pathsAPIURL.stations.guards.getByStation}${id}`,
      {
        method: 'GET',
        credentials: 'include',
      }
    )

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.errors || [
        {
          message:
            data.message || 'Error al obtener la guardia por la estación',
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
        ? error.message === 'Failed to fetch'
          ? JSON.stringify({ message: error.message })
          : error.message
        : 'Error desconocido al obtener la guardia por la estación'
    )
  }
}
