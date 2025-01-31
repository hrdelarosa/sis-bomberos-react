import { useAutoAnimate } from '@formkit/auto-animate/react'

export function useAnimation() {
  const [animationParent] = useAutoAnimate()

  return { animationParent }
}
