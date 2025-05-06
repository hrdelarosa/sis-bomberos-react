import { apiURL, pathsAPIURL } from '../../core/constants/pathsApi'
import {
  CreateServiceInputs,
  DeleteService,
  GetServiceById,
  ServiceByCreator,
  ServiceFilters,
  UpdateServicesInputs,
} from '../types/ServicesTypes'

export async function getServicesRequest({
  page,
  folio,
  incidente,
}: ServiceFilters) {
  try {
    const searchParams = new URLSearchParams()

    if (page) searchParams.append('page', page.toString())
    if (folio) searchParams.append('folio', folio)
    if (incidente) searchParams.append('incidente', incidente)

    const res = await fetch(
      `${apiURL}${pathsAPIURL.services.get}?${searchParams}`,
      {
        method: 'GET',
        credentials: 'include',
      }
    )

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.message || [
        { message: data.message || 'Error al obtener los servicios' },
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
        : 'Error desconocido al obtener los servicios'
    )
  }
}

export async function createServiceRequest({
  input,
}: {
  input: CreateServiceInputs
}) {
  try {
    const res = await fetch(`${apiURL}${pathsAPIURL.services.create}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    })

    const data = await res.json()
    console.log(res)
    console.log(data)

    if (!res.ok) {
      if (Array.isArray(data.errors)) {
        throw new Error(
          JSON.stringify({
            message: data.message,
            errors: data.errors,
          })
        )
      }
      const errorData = data.message || [
        { message: data.message || 'Error al crear el servicio' },
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
        : 'Error desconocido al crear el servicio'
    )
  }
}

export async function deleteServiceRequest({ id }: DeleteService) {
  try {
    const res = await fetch(`${apiURL}${pathsAPIURL.services.delete}${id}`, {
      method: 'DELETE',
      credentials: 'include',
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.message || [
        { message: data.message || 'Error al eliminar el servicio' },
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
        : 'Error desconocido al eliminar el servicio'
    )
  }
}

export async function getServiceByIdRequest({ id }: GetServiceById) {
  try {
    const res = await fetch(`${apiURL}${pathsAPIURL.services.getById}${id}`, {
      method: 'GET',
      credentials: 'include',
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.message || [
        { message: data.message || 'Error al obtener el servicio' },
      ]
      throw new Error(
        JSON.stringify({ message: data.message, errors: errorData })
      )
    }

    if (typeof data.service.personal_asignado === 'string') {
      data.service.personal_asignado = JSON.parse(
        data.service.personal_asignado
      )
    }
    if (typeof data.service.unidades_asignadas === 'string') {
      data.service.unidades_asignadas = JSON.parse(
        data.service.unidades_asignadas
      )
    }

    return data
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message === 'Failed to fetch'
          ? JSON.stringify({ message: error.message })
          : error.message
        : 'Error desconocido al obtener el servicio'
    )
  }
}

export async function getServicesByCreatorRequest({
  id,
  limit,
}: ServiceByCreator) {
  try {
    const searchParams = new URLSearchParams()
    if (limit) searchParams.append('limit', limit.toString())

    const res = await fetch(
      `${apiURL}${pathsAPIURL.services.getByCreator}${id}?${searchParams}`,
      {
        method: 'GET',
        credentials: 'include',
      }
    )

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.message || [
        {
          message: data.message || 'Error al obtener los servicios del creador',
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
        : 'Error desconocido al obtener los servicios del creador'
    )
  }
}

export async function updateServiceRequest({
  id,
  input,
}: {
  id: number
  input: UpdateServicesInputs
}) {
  try {
    const res = await fetch(
      `${apiURL}${pathsAPIURL.services.updateState}${id}`,
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
        {
          message: data.message || 'Error al actualizar el servicio',
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
        : 'Error desconocido al actualizar el servicio'
    )
  }
}
