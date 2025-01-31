import { API, PATH_API_SERVICES } from '../../core/constants/pathsApi'

export async function getServicesRequest() {
  try {
    const res = await fetch(`${API}${PATH_API_SERVICES.services}`, {
      method: 'GET',
      credentials: 'include',
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.error || 'Error al obtner los servicios'
      throw new Error(errorData)
    }

    return data
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : 'Error desconocido al obtener los servicios'
    )
  }
}

export async function deleteServicesByIdRequest({ id }) {
  try {
    const res = await fetch(`${API}${PATH_API_SERVICES.deleteService}/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    })

    if (!res.ok) {
      const errorData =
        (await res.json()).error || 'Error al eliminar el servicio'
      throw new Error(errorData)
    }

    return res
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : 'Error desconocido al eliminar el servicio'
    )
  }
}

export async function getServicesByIdRequest({ id }) {
  try {
    const res = await fetch(`${API}${PATH_API_SERVICES.services}/${id}`, {
      method: 'GET',
      credentials: 'include',
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.error || 'Error al obtner el servicio'
      throw new Error(errorData)
    }

    return data
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : 'Error desconocido al obtene el servicio'
    )
  }
}

export async function getServicesByCreatorRequest({ id }) {
  try {
    const res = await fetch(`${API}${PATH_API_SERVICES.serviceCreator}/${id}`, {
      method: 'GET',
      credentials: 'include',
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.message || 'Error al obtner el servicio'
      throw new Error(errorData)
    }

    return data
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : 'Error desconocido al obtene el servicio'
    )
  }
}

export async function createServiceRequest({ input }) {
  try {
    const res = await fetch(`${API}${PATH_API_SERVICES.createService}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(input),
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.message || 'Error al crear el servicio'
      throw new Error(errorData)
    }

    return data
  } catch (error) {
    console.log(error)
    throw new Error(
      error instanceof Error
        ? error.message
        : 'Error desconocido al eliminar el servicio'
    )
  }
}
