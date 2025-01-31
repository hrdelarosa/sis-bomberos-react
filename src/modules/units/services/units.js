import { API, PATH_API_UNITS } from '../../core/constants/pathsApi'

export async function geAlltUnitsRequest() {
  try {
    const res = await fetch(`${API}${PATH_API_UNITS.units}`, {
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

export async function deleteUnitByIdRequest({ id }) {
  try {
    const res = await fetch(`${API}${PATH_API_UNITS.deleteUnit}/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    })

    if (!res.ok) {
      const errorData =
        (await res.json()).error || 'Error al eliminar la unidad'
      throw new Error(errorData)
    }

    return res
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : 'Error desconocido al eliminar la unidades'
    )
  }
}

export async function createUnitRequest({ input }) {
  try {
    const res = await fetch(`${API}${PATH_API_UNITS.creteUnit}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(input),
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.error || 'Error al crear la unidad'
      throw new Error(errorData)
    }

    return data
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : 'Error desconocido al eliminar la unidades'
    )
  }
}

export async function updateUnitRequest({ id, input }) {
  try {
    const res = await fetch(`${API}${PATH_API_UNITS.updateUnit}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(input),
    })

    if (!res.ok) {
      const data = await res.json()
      const errorData = data.error || 'Error al actualizar la unidad'
      throw new Error(errorData)
    }

    return res
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : 'Error desconocido al actualizar el usuario'
    )
  }
}

export async function getAllTypeUnitsRequest() {
  try {
    const res = await fetch(`${API}${PATH_API_UNITS.types}`, {
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

export async function deleteTypeUnitByIdRequest({ id }) {
  try {
    const res = await fetch(`${API}${PATH_API_UNITS.deleteType}/${id}`, {
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
        : 'Error desconocido al eliminar la unidades'
    )
  }
}

export async function createTypeUnitRequest({ input }) {
  try {
    const res = await fetch(`${API}${PATH_API_UNITS.createType}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(input),
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.error || 'Error al crear la unidad'
      throw new Error(errorData)
    }

    return data
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : 'Error desconocido al eliminar la unidades'
    )
  }
}
