import { API, PATH_API_AUTH } from '../../core/constants/pathsApi'

export async function registerRequest(input) {
  try {
    const res = await fetch(`${API}${PATH_API_AUTH.register}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(input),
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.errors
        ? data.errors.map((err) => `${err.message}`).join(', ')
        : data.message || 'Error en el registro'
      throw new Error(errorData)
    }

    return data
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : 'Error desconocido en el registro'
    )
  }
}

export async function loginRequest(input) {
  try {
    const res = await fetch(`${API}${PATH_API_AUTH.login}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(input),
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.errors
        ? data.errors.map((err) => `${err.message}`).join(', ')
        : data.message || 'Error en el registro'
      throw new Error(errorData)
    }

    return data
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : 'Error desconocido en el inicio de sesión'
    )
  }
}

export async function verifyTokenRequest() {
  try {
    const res = await fetch(`${API}${PATH_API_AUTH.verify}`, {
      method: 'GET',
      credentials: 'include',
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.error || 'Sin autorización'
      throw new Error(errorData)
    }

    return data
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : 'Error desconocido al validar el token'
    )
  }
}

export async function getProfileRequest({ id }) {
  try {
    const res = await fetch(`${API}${PATH_API_AUTH.profile}/${id}`, {
      method: 'GET',
      credentials: 'include',
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.error || 'Sin autorización'
      throw new Error(errorData)
    }

    return data
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : 'Error desconocido al validar el token'
    )
  }
}
