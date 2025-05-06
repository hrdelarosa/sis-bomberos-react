import { apiURL, pathsAPIURL } from '../../core/constants/pathsApi'
import {
  CreatePersonnelInputs,
  UpdatePersonInputs,
} from '../types/PersonnelTypes'

export async function getPersonnelRequest() {
  try {
    const res = await fetch(`${apiURL}${pathsAPIURL.personnel.get}`, {
      method: 'GET',
      credentials: 'include',
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.errors || [
        { message: data.message || 'Error al obtener el personal' },
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
        : 'Error desconocido al obtener el personal'
    )
  }
}

export async function createPersonnelRequest({
  input,
}: {
  input: CreatePersonnelInputs
}) {
  try {
    const res = await fetch(`${apiURL}${pathsAPIURL.personnel.create}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    })

    const data = await res.json()

    if (!res.ok) {
      if (Array.isArray(data.errors)) {
        throw new Error(
          JSON.stringify({
            message: data.message,
            errors: data.errors,
          })
        )
      }
      const errorData = [
        { message: data.message || 'Error al crear el personal' },
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
        : 'Error desconocido al crear el personal'
    )
  }
}

export async function deletePersonnelRequest({ id }: { id: number }) {
  try {
    const res = await fetch(`${apiURL}${pathsAPIURL.personnel.delete}${id}`, {
      method: 'DELETE',
      credentials: 'include',
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.message || [
        { message: data.message || 'Error al eliminar el personal' },
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
        : 'Error desconocido al eliminar el personal'
    )
  }
}

export async function updatePersonnelRequest({
  id,
  input,
}: {
  id: number
  input: UpdatePersonInputs
}) {
  try {
    const res = await fetch(`${apiURL}${pathsAPIURL.personnel.update}${id}`, {
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
        {
          message: data.message || 'Error al actualizar el personal',
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
        : 'Error desconocido al actualizar el personal'
    )
  }
}

export async function getPersonnelByRankRequest({ id }: { id: number }) {
  try {
    const res = await fetch(
      `${apiURL}${pathsAPIURL.personnel.getByRank}${id}`,
      {
        method: 'GET',
        credentials: 'include',
      }
    )

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.errors || [
        {
          message: data.message || 'Error al obtener el personal por el rango',
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
        : 'Error desconocido al obtener el personal por el rango'
    )
  }
}

export async function getPersonnelByGuardRequest({ id }: { id: number }) {
  try {
    const res = await fetch(
      `${apiURL}${pathsAPIURL.personnel.getByGuard}${id}`,
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
            data.message || 'Error al obtener el personal por la guardia',
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
        : 'Error desconocido al obtener el personal por la guardia'
    )
  }
}
