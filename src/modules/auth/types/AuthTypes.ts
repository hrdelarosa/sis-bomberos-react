interface User {
  us_id: number
  us_nombres: string
  us_apellidos: string
  us_correo: string
  rol_id_us: number
  rol_nombre: string
  est_id_us: number
  est_nombre: string
  us_verificado: number
  us_creado: string
  us_actualizacion: string
}

export interface AuthStore {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  loading: boolean
  errorUser: string | null
  registerUser: ({ input }: { input: RegisterInputs }) => Promise<void>
  login: ({ input }: { input: LoginInputs }) => Promise<void>
  verifyToken: () => Promise<void>
  logout: () => void
  verifyEmail: ({ input }: { input: VerifyEmailInput }) => Promise<boolean>
  resendVerify: ({
    input,
  }: {
    input: ResendVerifyEmailInput
  }) => Promise<boolean>
  requestResetPass: ({
    input,
  }: {
    input: RequestResetPassInput
  }) => Promise<boolean>
  resetPass: ({ input }: { input: ResetPassInput }) => Promise<boolean>
}

export interface RegisterInputs extends LoginInputs {
  nombres: string
  apellidos: string
  confirmarContraseña: string
}

export interface LoginInputs {
  correo: string
  contraseña: string
}

export interface VerifyEmailInput {
  token: string
}

export type ResendVerifyEmailInput = Pick<LoginInputs, 'correo'>
export type RequestResetPassInput = Pick<LoginInputs, 'correo'>

export interface ResetPassInput
  extends Pick<RegisterInputs, 'contraseña' | 'confirmarContraseña'> {
  token: string
}
