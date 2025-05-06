import { apiURL, pathsAPIURL } from '../../core/constants/pathsApi'
import { CreateUnitInputs, UpdateUnitInputs } from '../types/UnitsTypes'

export async function getUnitsRequest() {
  try {
    const res = await fetch(`${apiURL}${pathsAPIURL.units.get}`, {
      method: 'GET',
      credentials: 'include',
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.errors || [
        { message: data.message || 'Error al obtener las unidades' },
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
        : 'Error desconocido al obtener las unidades'
    )
  }
}

export async function createUnitRequest({
  input,
}: {
  input: CreateUnitInputs
}) {
  try {
    const res = await fetch(`${apiURL}${pathsAPIURL.units.create}`, {
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
        { message: data.message || 'Error al crear la unidad' },
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
        : 'Error desconocido al crear la unidad'
    )
  }
}

export async function deleteUnitRequest({ id }: { id: number }) {
  try {
    const res = await fetch(`${apiURL}${pathsAPIURL.units.delete}${id}`, {
      method: 'DELETE',
      credentials: 'include',
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.message || [
        { message: data.message || 'Error al eliminar la unidad' },
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
        : 'Error desconocido al eliminar la unidad'
    )
  }
}

export async function updateUnitRequest({
  id,
  input,
}: {
  id: number
  input: UpdateUnitInputs
}) {
  try {
    const res = await fetch(`${apiURL}${pathsAPIURL.units.update}${id}`, {
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
        { message: data.message || 'Error al actualizar la unidad' },
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
        : 'Error desconocido al actualizar la unidad'
    )
  }
}
