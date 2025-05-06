import { LucideIcon } from 'lucide-react'

export interface AuthTitle {
  title: string
  sub?: string
  icon?: LucideIcon
}

export type AuthType =
  | 'login'
  | 'register'
  | 'verify'
  | 'requestPassword'
  | 'resetPassword'
