import { MailCheck } from 'lucide-react'
import { AuthTitle, AuthType } from '../types/TitlesAuth'

export const authTitles: Record<AuthType, AuthTitle> = {
  login: {
    title: 'Iniciar Sesión',
    sub: 'Introduzca su dirección de correo electrónico para acceder a su cuenta',
  },
  register: {
    title: 'Registrarse',
  },
  verify: {
    title: 'Verifica tu Correro',
    sub: 'Te enviamos un código de verificación a tu correo electrónico. Ingresa ese código en el campo de abajo para verificar tu cuenta.',
    icon: MailCheck,
  },
  requestPassword: {
    title: 'Solicitar restablecimiento de Contraseña',
    sub: 'Introduzca la dirección de correo electrónico asociada a su cuenta y le enviaremos un código para restablecer la contraseña',
  },
  resetPassword: {
    title: 'Restablecer tu Contraseña',
    sub: 'Te hemos enviado un código a tu correo electrónico. Ingresa ese código junto con tu nueva contraseña para completar el proceso',
  },
}
