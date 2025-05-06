import { apiURL, pathsAPIURL } from '../../core/constants/pathsApi'
import { CreateRankInputs, UpdateRankInputs } from '../types/RanksTypes'

export async function getRanksRequest() {
  try {
    const res = await fetch(`${apiURL}${pathsAPIURL.personnel.ranks.get}`, {
      method: 'GET',
      credentials: 'include',
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.errors || [
        { message: data.message || 'Error al obtener los rangos' },
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
        : 'Error desconocido al obtener los rangos'
    )
  }
}

export async function createRankRequest({
  input,
}: {
  input: CreateRankInputs
}) {
  try {
    const res = await fetch(`${apiURL}${pathsAPIURL.personnel.ranks.create}`, {
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
        { message: data.message || 'Error al crear el rango' },
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
        : 'Error desconocido al crear el rango'
    )
  }
}

export async function deleteRankRequest({ id }: { id: number }) {
  try {
    const res = await fetch(
      `${apiURL}${pathsAPIURL.personnel.ranks.delete}${id}`,
      {
        method: 'DELETE',
        credentials: 'include',
      }
    )

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.message || [
        { message: data.message || 'Error al eliminar el rango' },
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
        : 'Error desconocido al eliminar el rango'
    )
  }
}

export async function updateRankRequest({
  id,
  input,
}: {
  id: number
  input: UpdateRankInputs
}) {
  try {
    const res = await fetch(
      `${apiURL}${pathsAPIURL.personnel.ranks.update}${id}`,
      {
        method: 'PATCH',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(input),
      }
    )

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.message || [
        { message: data.message || 'Error al actualizar el rango' },
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
        : 'Error desconocido al actualizar el rango'
    )
  }
}
