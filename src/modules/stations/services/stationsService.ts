import { apiURL, pathsAPIURL } from '../../core/constants/pathsApi'
import {
  CreateStationInputs,
  UpdateStationInputs,
} from '../types/StationsTypes'

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

export async function createStationRequest({
  input,
}: {
  input: CreateStationInputs
}) {
  try {
    const res = await fetch(`${apiURL}${pathsAPIURL.stations.create}`, {
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
        { message: data.message || 'Error al crear la estación' },
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
        : 'Error desconocido al crear la estación'
    )
  }
}

export async function deleteStationRequest({ id }: { id: number }) {
  try {
    const res = await fetch(`${apiURL}${pathsAPIURL.stations.delete}${id}`, {
      method: 'DELETE',
      credentials: 'include',
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.message || [
        { message: data.message || 'Error al eliminar la estación' },
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
        : 'Error desconocido al eliminar la estación'
    )
  }
}

export async function updateStationRequest({
  id,
  input,
}: {
  id: number
  input: UpdateStationInputs
}) {
  try {
    const res = await fetch(`${apiURL}${pathsAPIURL.stations.update}${id}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.message || [
        { message: data.message || 'Error al actualizar la estación' },
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
        : 'Error desconocido al actualizar la estación'
    )
  }
}
