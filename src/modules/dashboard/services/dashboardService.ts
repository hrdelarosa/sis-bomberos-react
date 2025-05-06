import { apiURL, pathsAPIURL } from '../../core/constants/pathsApi'

export async function getPorcentajeIncidentes() {
  try {
    const res = await fetch(
      `${apiURL}${pathsAPIURL.dashboard.incidentesPorcentaje}`,
      {
        method: 'GET',
        credentials: 'include',
      }
    )

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.message || [
        {
          message:
            data.message ||
            'Error al obtener los porcentajes de los servicios por incidente',
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
        : 'Error desconocido al obtener los porcentajes de los servicios por incidente'
    )
  }
}

export async function getSummaryIncident() {
  try {
    const res = await fetch(
      `${apiURL}${pathsAPIURL.dashboard.summaryIncident}`,
      {
        method: 'GET',
        credentials: 'include',
      }
    )

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.message || [
        {
          message:
            data.message || 'Error al obtener el resumen de los servicios',
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
        : 'Error desconocido al obtener el resumen de los servicios'
    )
  }
}

export async function getServicesMonthly() {
  try {
    const res = await fetch(
      `${apiURL}${pathsAPIURL.dashboard.servicesMonthly}`,
      {
        method: 'GET',
        credentials: 'include',
      }
    )

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.message || [
        {
          message:
            data.message ||
            'Error al obtener el total de los servicios del mes actual en comparación con el mes anterior',
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
        : 'Error desconocido al obtener el total de los servicios del mes actual en comparación con el mes anterior'
    )
  }
}

export async function getIncidentMonthly() {
  try {
    const res = await fetch(
      `${apiURL}${pathsAPIURL.dashboard.incidentMonthly}`,
      {
        method: 'GET',
        credentials: 'include',
      }
    )

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.message || [
        {
          message:
            data.message ||
            'Error al obtener el total de los servicios por incidente del mes actual en comparación con el mes anterior',
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
        : 'Error desconocido al obtener el total de los servicios por incidente del mes actual en comparación con el mes anterior'
    )
  }
}

export async function getTypesPorcentaje() {
  try {
    const res = await fetch(
      `${apiURL}${pathsAPIURL.dashboard.typesPorcentaje}`,
      {
        method: 'GET',
        credentials: 'include',
      }
    )

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.message || [
        {
          message:
            data.message ||
            'Error al obtener los porcentajes de los tipos de unidad',
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
        : 'Error desconocido al obtener los porcentajes de los tipos de unidad'
    )
  }
}

export async function getUnitStatus() {
  try {
    const res = await fetch(`${apiURL}${pathsAPIURL.dashboard.unitStatus}`, {
      method: 'GET',
      credentials: 'include',
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.message || [
        {
          message:
            data.message || 'Error al obtener los estados de las unidades',
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
        : 'Error desconocido al obtener los estados de las unidades'
    )
  }
}

export async function getResponseServices() {
  try {
    const res = await fetch(
      `${apiURL}${pathsAPIURL.dashboard.responseServices}`,
      {
        method: 'GET',
        credentials: 'include',
      }
    )

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.message || [
        {
          message:
            data.message ||
            'Error al obtener el tiempo de respuesta promedio de los sevicios',
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
        : 'Error desconocido al obtener el tiempo de respuesta promedio de los sevicios'
    )
  }
}
