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

export async function verifyEmailRequest({ token }) {
  try {
    const res = await fetch(`${API}${PATH_API_AUTH.verifyEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(token),
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.message || 'Error al verificar el correo'
      throw new Error(errorData)
    }

    return data
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : 'Error desconocido al verificar el correo'
    )
  }
}

export async function resendVerifyEmailRequest({ input }) {
  try {
    const res = await fetch(`${API}${PATH_API_AUTH.resendVerifyEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(input),
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData =
        data.message || 'Error al reenvio de código de verificación'
      throw new Error(errorData)
    }

    return data
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : 'Error desconocido al reenvio de código de verificación'
    )
  }
}

export async function requestResetPassword({ input }) {
  try {
    const res = await fetch(`${API}${PATH_API_AUTH.requestResetPass}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(input),
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.errors || [
        { message: data.message || 'Error al envio del código' },
      ]
      throw new Error(
        JSON.stringify({ message: data.message, errors: errorData })
      )
    }

    return data
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : 'Error desconocido al envio del código'
    )
  }
}

export async function resetPassRequest({ input }) {
  try {
    const res = await fetch(`${API}${PATH_API_AUTH.resetPass}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(input),
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.errors || [
        { message: data.message || 'Error al cambiar la contraseña' },
      ]
      const isValidationError = !!data.errors
      throw new Error(JSON.stringify({ errors: errorData, isValidationError }))
    }

    return data
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : 'Error desconocido al cambiar la contraseña'
    )
  }
}
