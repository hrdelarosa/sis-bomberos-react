import { apiURL, pathsAPIURL } from '../../core/constants/pathsApi'
import {
  LoginInputs,
  RegisterInputs,
  RequestResetPassInput,
  ResendVerifyEmailInput,
  ResetPassInput,
  VerifyEmailInput,
} from '../types/AuthTypes'

export async function registerRequest({ input }: { input: RegisterInputs }) {
  try {
    const res = await fetch(`${apiURL}${pathsAPIURL.auth.register}`, {
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
      const errorData = data.message || [
        { message: data.message || 'Error al registrar el usuario' },
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
        : 'Error desconocido al registrar el usuario'
    )
  }
}

export async function loginRequest({ input }: { input: LoginInputs }) {
  try {
    const res = await fetch(`${apiURL}${pathsAPIURL.auth.login}`, {
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
      const errorData = data.message || [
        { message: data.message || 'Error al registrar el usuario' },
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
        : 'Error desconocido al registrar el usuario'
    )
  }
}

export async function verifyTokenRequest() {
  try {
    const res = await fetch(`${apiURL}${pathsAPIURL.auth.verify}`, {
      method: 'GET',
      credentials: 'include',
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.errors || [
        { message: data.message || 'Error al validar el token' },
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
        : 'Error desconocido al validar el token'
    )
  }
}

export async function logoutRequest() {
  try {
    const res = await fetch(`${apiURL}${pathsAPIURL.auth.logout}`, {
      method: 'POST',
      credentials: 'include',
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.errors || [
        { message: data.message || 'Error al cerrar sesión' },
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
        : 'Error desconocido al cerrar sesión'
    )
  }
}
// NOTA: Modificar el if (!res.ok) para que quede igual que este, ya que como
// esta en el login, register ..., puede funcionar asi como el de este
export async function verifyEmailRequest({
  input,
}: {
  input: VerifyEmailInput
}) {
  try {
    const res = await fetch(`${apiURL}${pathsAPIURL.auth.verifyEmail}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.errors || [
        { message: data.message || 'Error al verificar el correo' },
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
        : 'Error desconocido al verificar el correo'
    )
  }
}

export async function resendVerifyEmailRequest({
  input,
}: {
  input: ResendVerifyEmailInput
}) {
  try {
    const res = await fetch(`${apiURL}${pathsAPIURL.auth.resendVerify}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.errors || [
        {
          message:
            data.message || 'Error al reenviar la verificación de correo',
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
        : 'Error desconocido al reenviar la verificación de correo'
    )
  }
}

export async function requestPasswordResetRequest({
  input,
}: {
  input: RequestResetPassInput
}) {
  try {
    const res = await fetch(`${apiURL}${pathsAPIURL.auth.requestResetPass}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.errors || [
        {
          message:
            data.message ||
            'Error al solicitar el restablecimiento de contraseña',
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
        : 'Error desconocido al solicitar el restablecimiento de contraseña'
    )
  }
}

export async function resetPasswordRequest({
  input,
}: {
  input: ResetPassInput
}) {
  try {
    const res = await fetch(`${apiURL}${pathsAPIURL.auth.resetPass}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    })

    const data = await res.json()

    if (!res.ok) {
      const errorData = data.errors || [
        { message: data.message || 'Error al restablecer la contraseña' },
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
        : 'Error desconocido al restablecer la contraseña'
    )
  }
}
